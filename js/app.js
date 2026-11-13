// js/app.js

// ================= GLOBAL VARIABLES & TAB SWITCHING =================
var TAB_ORDER = ['tabDaily', 'tabTests', 'tabHome', 'tabCustom', 'tabInsights'];
var currentActiveTab = 'tabHome';

function hideAllActiveScreens() {
    if (typeof activeTestState !== 'undefined' && activeTestState && activeTestState.timer) {
        clearInterval(activeTestState.timer);
    }
    var resScreen = document.getElementById('resultScreen');
    var actScreen = document.getElementById('activeTestScreen');
    var instScreen = document.getElementById('instructionScreen');
    var revScreen = document.getElementById('reviewScreen');
    var loadScreen = document.getElementById('loadingScreen');

    if (resScreen) { resScreen.classList.add('hidden'); resScreen.style.display = ''; }
    if (actScreen) { actScreen.classList.add('hidden'); actScreen.style.display = ''; }
    if (instScreen) { instScreen.style.display = 'none'; }
    if (revScreen) { revScreen.classList.add('hidden'); revScreen.style.display = 'none'; }
    if (loadScreen) { loadScreen.classList.add('hidden'); loadScreen.style.display = 'none'; }
}

window.switchTab = function(tabId, navElement) {
    hideAllActiveScreens();
    currentActiveTab = tabId;
    localStorage.setItem('medqActiveTab', tabId);

    var tabs = document.querySelectorAll('.tab-content');
    for(var i = 0; i < tabs.length; i++) { tabs[i].classList.add('hidden'); }
    
    var targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.remove('hidden');

    var navItems = document.querySelectorAll('#bottomNav .nav-item, #bottomNav .nav-home-wrapper');
    for(var j = 0; j < navItems.length; j++) { navItems[j].classList.remove('active'); }
    
    var matchingNav = navElement || document.getElementById('navBtn_' + tabId);
    if (matchingNav) matchingNav.classList.add('active');

    if (tabId === 'tabHome' && typeof renderHomeDashboard === 'function') renderHomeDashboard();
    if (tabId === 'tabInsights' && typeof renderInsightsHub === 'function') renderInsightsHub();

    var mainEl = document.getElementById('mainContainer');
    if (mainEl) mainEl.scrollTop = 0;
};

// --- Swipe Engine ---
let touchStartX = 0;
let touchStartY = 0;
document.addEventListener('DOMContentLoaded', function() {
    const mainArea = document.getElementById('mainContainer');
    if (!mainArea) return;
    mainArea.addEventListener('touchstart', function(e) {
        if (e.target.closest('.no-swipe')) { touchStartX = null; return; }
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    mainArea.addEventListener('touchend', function(e) {
        if (touchStartX === null) return;
        let diffX = e.changedTouches[0].screenX - touchStartX;
        let diffY = e.changedTouches[0].screenY - touchStartY;
        if (Math.abs(diffX) > 75 && Math.abs(diffX) > Math.abs(diffY) * 1.6) {
            let currIdx = TAB_ORDER.indexOf(currentActiveTab);
            if (diffX < 0 && currIdx < TAB_ORDER.length - 1) {
                if(typeof playUISound === 'function') playUISound('tab');
                switchTab(TAB_ORDER[currIdx + 1]);
            } else if (diffX > 0 && currIdx > 0) {
                if(typeof playUISound === 'function') playUISound('tab');
                switchTab(TAB_ORDER[currIdx - 1]);
            }
        }
        touchStartX = null;
    }, { passive: true });
});

// ================= STATS LOGIC =================
function recordSubjectAttempt(subjectName, isCorrect, timeSpentSecs) {
    if (!subjectName) return;
    let subStats = JSON.parse(localStorage.getItem('medqSubjectStats')) || {};
    if (!subStats[subjectName]) subStats[subjectName] = { solved: 0, correct: 0, timeSpent: 0 };
    subStats[subjectName].solved += 1;
    if (isCorrect) subStats[subjectName].correct += 1;
    if (timeSpentSecs && timeSpentSecs > 0) {
        subStats[subjectName].timeSpent = (subStats[subjectName].timeSpent || 0) + timeSpentSecs;
    }
    localStorage.setItem('medqSubjectStats', JSON.stringify(subStats));
}

function getStrongAndWeakSubjects() {
    let subStats = JSON.parse(localStorage.getItem('medqSubjectStats')) || {};
    let entries = Object.keys(subStats).map(function(key) {
        return [key, subStats[key]];
    }).filter(function(item) {
        return item[1].solved > 0;
    });
    
    if (entries.length === 0) return { strong: 'Practice more MCQs', weak: 'Practice more MCQs' };

    entries.sort(function(a, b) {
        return (b[1].correct / b[1].solved) - (a[1].correct / a[1].solved);
    });
    
    let strong = entries[0][0] + " (" + Math.round((entries[0][1].correct / entries[0][1].solved) * 100) + "%)";
    let weakEntry = entries[entries.length - 1];
    let weak = entries.length > 1
        ? weakEntry[0] + " (" + Math.round((weakEntry[1].correct / weakEntry[1].solved) * 100) + "%)"
        : 'Keep practicing';
        
    return { strong: strong, weak: weak };
}

// ================= DAILY DOSE LOGIC =================
let dailyQuestions = [];
let currentDailyQ = 0;
let dailyAnswers = [];

function getAllowedSubjectsForUser() {
    var desig = localStorage.getItem('spUserDesignation') || 'Intern / Doctor';
    var allowed = [];
    var MBBS_YEARS = window.MBBS_YEARS || {
        "First Year": ["Anatomy", "Physiology", "Biochemistry"],
        "Second Year": ["Pathology", "Pharmacology", "Microbiology"],
        "Third Year (Part 1)": ["Forensic Medicine", "PSM", "ENT", "Ophthalmology"],
        "Third Year (Part 2)": ["Medicine", "Surgery", "OBG", "Pediatrics", "Orthopedics", "Psychiatry", "Dermatology", "Radiology", "Anesthesia"]
    };

    if (desig === 'First Year') allowed = MBBS_YEARS["First Year"];
    else if (desig === 'Second Year') allowed = MBBS_YEARS["First Year"].concat(MBBS_YEARS["Second Year"]);
    else if (desig === 'Third Year') allowed = MBBS_YEARS["First Year"].concat(MBBS_YEARS["Second Year"], ["Forensic Medicine", "PSM", "ENT", "Ophthalmology"]);
    else allowed = window.SUBJECTS || []; // For Final Year/Interns
    return allowed;
}

function renderDailyMCQ() {
    const dailyMCQCount = 5;
    const today = new Date();
    const dateSeed = "daily_" + today.getFullYear() + "_" + today.getMonth() + "_" + today.getDate();
    
    var allowedSubs = getAllowedSubjectsForUser();
    var userPool = window.qBank.filter(function(q) { return allowedSubs.indexOf(q.subject) > -1; });
    if(userPool.length < dailyMCQCount) userPool = window.qBank; 

    dailyQuestions = typeof seededShuffle === 'function' ? seededShuffle(userPool, dateSeed).slice(0, dailyMCQCount) : userPool.slice(0, dailyMCQCount);
    dailyAnswers = new Array(dailyQuestions.length).fill(null);
    currentDailyQ = 0;
    renderSingleDailyQuestion();
}

function renderSingleDailyQuestion() {
    const container = document.getElementById('dailyMcqContainer');
    if (!container || dailyQuestions.length === 0) return;

    const q = dailyQuestions[currentDailyQ];
    const hasAnswered = dailyAnswers[currentDailyQ] !== null;
    const userAns = dailyAnswers[currentDailyQ];

    document.getElementById('dailyProgress').innerText = (currentDailyQ + 1) + ' of ' + dailyQuestions.length;

    let levelBadgeColor = q.level === 'Hard' ? '#dc2626' : (q.level === 'Easy' ? '#10b981' : '#d97706');
    let levelText = q.level ? ` • <span style="color:${levelBadgeColor};">${q.level}</span>` : '';
    let chapterText = q.chapter ? ` (${q.chapter})` : '';

    let html = `<div class="card" style="margin-bottom: 0; box-shadow: none; border: none; padding: 0;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom:12px;">
            <div style="font-size:0.82rem; color:var(--text-gray); font-weight:700; text-transform: uppercase;">
                ${q.subject} • ${q.topic}${chapterText}${levelText}
            </div>
            <button onclick="shareQuestion(${q.id})" style="background:var(--primary-light); border:none; padding:5px 8px; border-radius:20px; color:var(--primary); cursor:pointer; font-size:0.85rem; font-weight:bold;" title="Share Question">📤 Share</button>
        </div>
        <div class="mcq-q" style="font-size: 1.15rem; color: var(--text-dark);">${q.q} ${q.img ? `<img src="${q.img}" style="max-width:100%; border-radius:8px; margin-top:12px; border:1px solid #ddd; display:block;">` : ''}</div>
        <div class="options-container">`;

    let fakePcts = [];
    if (hasAnswered) {
        let correctPct = 65 + ((q.id || currentDailyQ) % 20); 
        let rem = 100 - correctPct;
        for (let i = 0; i < q.opts.length; i++) {
            if (i === q.ans) {
                fakePcts.push(correctPct);
            } else {
                let p = Math.floor(rem / (q.opts.length - 1)) + (i % 3);
                fakePcts.push(p);
            }
        }
    }

    q.opts.forEach(function(opt, oIdx) {
        let optClass = "mcq-option";
        let pointerStyle = hasAnswered ? "pointer-events: none;" : "cursor: pointer;";
        let percentHtml = "";
        let barHtml = "";

        if (hasAnswered) {
            if (oIdx === q.ans) {
                optClass += " correct";
                barHtml = `<div style="position:absolute; left:0; top:0; height:100%; width:${fakePcts[oIdx]}%; background:rgba(16, 185, 129, 0.2); border-radius:8px; z-index:0; transition: width 0.8s ease-out;"></div>`;
            } else if (oIdx === userAns) {
                optClass += " incorrect";
                barHtml = `<div style="position:absolute; left:0; top:0; height:100%; width:${fakePcts[oIdx]}%; background:rgba(239, 68, 68, 0.15); border-radius:8px; z-index:0; transition: width 0.8s ease-out;"></div>`;
            } else {
                barHtml = `<div style="position:absolute; left:0; top:0; height:100%; width:${fakePcts[oIdx]}%; background:rgba(0,0,0,0.05); border-radius:8px; z-index:0; transition: width 0.8s ease-out;"></div>`;
            }
            percentHtml = `<span style="font-weight:800; font-size:0.9rem; z-index:1; opacity:0.8;">${fakePcts[oIdx]}%</span>`;
        }
        html += `<div class="${optClass}" style="${pointerStyle} position:relative; overflow:hidden;" onclick="handleDailyAnswer(${currentDailyQ}, ${oIdx}, ${q.ans})">
            ${barHtml}
            <span style="z-index:1; position:relative;">${opt}</span>
            ${percentHtml}
        </div>`;
    });

    html += `</div>
        <div id="dailyExpBlock" class="hidden" style="margin-top: 20px; background: #e2eef9; padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
            <strong style="color: var(--primary);">✅ Standard Explanation:</strong><br>
            <div style="font-size: 0.95rem; color: #004085; margin-top: 5px; line-height: 1.6;">${q.exp}</div>
            ${q.wrongExp ? `
                <button id="btnShowWrongExp" class="btn btn-outline" style="margin-top: 14px; font-size: 0.85rem; padding: 8px 12px; border-color: #d93025; color: #d93025; background: white;" onclick="showWrongOptionsExplanation(${currentDailyQ})">
                    Rule Out: Why Not The Others?
                </button>
                <div id="dailyWrongExpBlock" class="hidden" style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed #93c5fd; font-size: 0.92rem; color: #7f1d1d; line-height: 1.6;">
                    <strong style="color: #dc2626; display: block; margin-bottom: 6px;">🔍 Ruling Out Other Options:</strong>
                    ${q.wrongExp}
                </div>
            ` : ''}
        </div>
    </div>`;

    if (hasAnswered) {
        html += `
            <div id="postAnswerBtns" style="display: flex; gap: 8px; margin-top: 25px; padding-bottom: 20px;">
                <button class="btn btn-outline" style="flex: 0.8; padding: 12px; font-weight: 600; font-size: 0.9rem; visibility: ${currentDailyQ === 0 ? 'hidden' : 'visible'};" onclick="prevDailyQuestion()">⬅️ Prev</button>
                <button class="btn btn-outline" style="flex: 1.2; border: 2px solid var(--primary); font-weight: 600; padding: 12px; font-size: 0.9rem;" onclick="showDailyExplanation(${currentDailyQ})">📖 Explanation</button>
                <button class="btn btn-primary" style="flex: 1; padding: 12px; font-weight: 600; font-size: 0.9rem;" onclick="nextDailyQuestion()">${currentDailyQ === dailyQuestions.length - 1 ? 'Finish 🎉' : 'Next ➡️'}</button>
            </div>
        `;
    } else {
        html += `
            <div style="display: flex; justify-content: space-between; margin-top: 15px; padding-bottom: 20px;">
                <button class="btn btn-outline" onclick="prevDailyQuestion()" style="width: 48%; visibility: ${currentDailyQ === 0 ? 'hidden' : 'visible'};">← Previous</button>
                <button class="btn btn-primary" onclick="nextDailyQuestion()" style="width: 48%;">Skip ➡️</button>
            </div>
        `;
    }
    container.innerHTML = html;
}

function handleDailyAnswer(qIndex, selectedIdx, correctIdx) {
    if (typeof playUISound === 'function') playUISound('tap');
    dailyAnswers[qIndex] = selectedIdx;
    const isCorrect = (selectedIdx === correctIdx);
    recordQuestionAttempt(isCorrect, dailyQuestions[qIndex]);
    recordSubjectAttempt(dailyQuestions[qIndex].subject, isCorrect);
    renderSingleDailyQuestion();
}

function showDailyExplanation(qIndex) {
    if (typeof playUISound === 'function') playUISound('tab');
    const postBtns = document.getElementById('postAnswerBtns');
    if (postBtns && postBtns.children.length > 1) postBtns.children[1].style.display = 'none';
    const expBlock = document.getElementById('dailyExpBlock');
    if (expBlock) {
        expBlock.classList.remove('hidden');
        expBlock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function showWrongOptionsExplanation(qIndex) {
    if (typeof playUISound === 'function') playUISound('tap');
    const btnWrong = document.getElementById('btnShowWrongExp');
    if (btnWrong) btnWrong.style.display = 'none';
    const wrongBlock = document.getElementById('dailyWrongExpBlock');
    if (wrongBlock) {
        wrongBlock.classList.remove('hidden');
        wrongBlock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function nextDailyQuestion() {
    if (typeof playUISound === 'function') playUISound('tab');
    if (currentDailyQ < dailyQuestions.length - 1) {
        currentDailyQ++;
        renderSingleDailyQuestion();
    } else {
        checkAndSaveStreak();
        alert("🎉 Awesome, Doctor! 🩺\nGreat job completing today's dose!");
        switchTab('tabHome');
    }
}

function prevDailyQuestion() {
    if(typeof playUISound === 'function') playUISound('tab');
    if (currentDailyQ > 0) { currentDailyQ--; renderSingleDailyQuestion(); }
}

function loadArchiveMCQ(daysAgo) {
    if(typeof playUISound === 'function') playUISound('tap');
    const dailyMCQCount = 5;
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() - daysAgo);
    const dateSeed = "daily_" + targetDate.getFullYear() + "_" + targetDate.getMonth() + "_" + targetDate.getDate();
    
    var allowedSubs = getAllowedSubjectsForUser();
    var userPool = window.qBank.filter(function(q) { return allowedSubs.indexOf(q.subject) > -1; });
    if(userPool.length < dailyMCQCount) userPool = window.qBank;

    dailyQuestions = typeof seededShuffle === 'function' ? seededShuffle(userPool, dateSeed).slice(0, dailyMCQCount) : userPool.slice(0, dailyMCQCount).reverse();
    dailyAnswers = new Array(dailyQuestions.length).fill(null);
    currentDailyQ = 0;
    
    const headerTitle = document.getElementById('dailyDateTitle');
    if (headerTitle) { headerTitle.innerText = `Archive: ${targetDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`; }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderSingleDailyQuestion();
}

function loadTodayMCQ() {
    if(typeof playUISound === 'function') playUISound('tap');
    const headerTitle = document.getElementById('dailyDateTitle');
    if (headerTitle) { headerTitle.innerText = `Daily Dose`; }
    renderDailyMCQ();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= TEST ENGINE & TIMER =================
let activeTestState = { questions: [], currentQ: 0, answers: [], timer: null, visited: {}, flags: {}, testName: '' };
let currentReviewQ = 0;

function proceedToActualTest() {
    if (!window.pendingTestParams) return;
    if(typeof playUISound === 'function') playUISound('btn');
    
    var finalPattern = document.getElementById('instExamPattern').value;
    window.pendingTestParams.examPattern = finalPattern;
    document.getElementById('instructionScreen').style.display = 'none';

    var seedId = window.pendingTestParams.seedId;
    var testName = window.pendingTestParams.testName;
    var subjectFilter = window.pendingTestParams.subjectFilter;
    var maxQs = window.pendingTestParams.maxQs;
    var customPool = window.pendingTestParams.customPool;
    var pattern = window.pendingTestParams.examPattern;
    var isPyqOnly = window.pendingTestParams.isPyqOnly;

    if (customPool) {
        activeTestState = { questions: customPool, answers: new Array(customPool.length).fill(null), currentQ: 0, timer: null, visited: {}, flags: {}, testName: testName, examPattern: pattern };
        document.getElementById('activeTestTitle').innerText = testName;
        document.getElementById('totalQNum').innerText = customPool.length;
        var tabs = document.querySelectorAll('.tab-content');
        for(var t=0; t<tabs.length; t++){ tabs[t].classList.add('hidden'); }
        const actScreen = document.getElementById('activeTestScreen');
        actScreen.classList.remove('hidden');
        actScreen.style.display = '';
        renderQuestion();
        startTestTimer(customPool.length * 60);
    } else {
        executeStandardTest(seedId, testName, subjectFilter, maxQs, pattern, isPyqOnly);
    }
}

function executeStandardTest(seedId, testName, subjectFilter, maxQs, pattern, isPyqOnly) {
    let poolToUse = window.qBank.filter(function(q) {
        return isPyqOnly ? (q.isPYQ === true || (q.tags && q.tags.indexOf('PYQ') > -1)) : true;
    });
    
    let selectedQs = [];
    if (subjectFilter) {
        let pool = poolToUse.filter(function(q){ return q.subject === subjectFilter; });
        if (pool.length === 0) return;
        let shuffledPool = seededShuffle(pool, seedId);
        let subtopicMap = {};
        shuffledPool.forEach(function(q) {
            if (!subtopicMap[q.topic]) subtopicMap[q.topic] = [];
            subtopicMap[q.topic].push(q);
        });
        let keys = Object.keys(subtopicMap);
        let i = 0;
        while (selectedQs.length < maxQs && selectedQs.length < shuffledPool.length) {
            let key = keys[i % keys.length];
            if (subtopicMap[key].length > 0) { selectedQs.push(subtopicMap[key].shift()); }
            i++;
        }
    } else {
        let shuffledPool = seededShuffle(poolToUse, seedId);
        let subjectMap = {};
        shuffledPool.forEach(function(q) {
            if (!subjectMap[q.subject]) subjectMap[q.subject] = [];
            subjectMap[q.subject].push(q);
        });
        let keys = Object.keys(subjectMap);
        let i = 0;
        while (selectedQs.length < maxQs && selectedQs.length < shuffledPool.length) {
            let key = keys[i % keys.length];
            if (subjectMap[key].length > 0) { selectedQs.push(subjectMap[key].shift()); }
            i++;
        }
    }
    selectedQs = seededShuffle(selectedQs, seedId + "_final");
    
    activeTestState = { questions: selectedQs, answers: new Array(selectedQs.length).fill(null), currentQ: 0, timer: null, visited: {}, flags: {}, testName: testName, examPattern: pattern };
    
    document.getElementById('activeTestTitle').innerText = testName;
    document.getElementById('totalQNum').innerText = selectedQs.length;
    var tabs = document.querySelectorAll('.tab-content');
    for(var t=0; t<tabs.length; t++){ tabs[t].classList.add('hidden'); }
    document.getElementById('activeTestScreen').classList.remove('hidden');
    renderQuestion();
    startTestTimer(selectedQs.length * 60);
}

function startTestTimer(seconds) {
    let timeLeft = seconds;
    if (activeTestState.timeLeft && activeTestState.timeLeft > 0) { timeLeft = activeTestState.timeLeft; }
    const timerDisplay = document.getElementById('testTimer');
    if (activeTestState.timer) clearInterval(activeTestState.timer);
    activeTestState.timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(activeTestState.timer);
            alert("Time is up! Auto-submitting your test.");
            submitTest();
            return;
        }
        timeLeft--;
        window.currentTestTimeLeft = timeLeft;
        let h = Math.floor(timeLeft / 3600);
        let m = Math.floor((timeLeft % 3600) / 60);
        let s = timeLeft % 60;
        if (timerDisplay) { timerDisplay.innerText = h.toString().padStart(2, '0') + ':' + m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0'); }
    }, 1000);
}

// ================= ACTIVE TEST QUESTION RENDERER =================
function renderQuestion() {
    const qIndex = activeTestState.currentQ;
    const qData = activeTestState.questions[qIndex];
    if (!activeTestState.visited) activeTestState.visited = {};
    if (!activeTestState.flags) activeTestState.flags = {};
    activeTestState.visited[qIndex] = true;
    autoSaveTest();

    document.getElementById('currentQNum').innerText = qIndex + 1;
    let imgHtml = qData.img ? `<img src="${qData.img}" onclick="openImageZoom('${qData.img}')" style="max-width:100%; border-radius:8px; margin-top:12px; border:1px solid #ddd; display:block; cursor:zoom-in;" title="Tap to zoom">` : '';
    
    document.getElementById('questionText').innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
            <div>${qData.q}</div>
            <div style="display: flex; gap: 8px; flex-shrink: 0;">
                <button onclick="shareQuestion(${qData.id})" style="background:var(--primary-light); border:none; padding:6px; border-radius:50%; color:var(--primary); cursor:pointer; font-size:1.1rem; display:flex; align-items:center; justify-content:center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" title="Share Question">📤</button>
            </div>
        </div>
        ${imgHtml}
    `;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    const currentSelected = activeTestState.answers[qIndex];

    qData.opts.forEach(function(opt, index) {
        const isChecked = currentSelected === index;
        const borderStyle = isChecked ? "border: 2px solid var(--primary); background: var(--primary-light);" : "background:var(--bg-gray); border:1px solid var(--border);";
        
        optionsContainer.innerHTML += `
            <div class="option-label" onclick="handleOptionToggle(${index})" style="display:flex; align-items:center; padding:12px 14px; margin-bottom:10px; border-radius:8px; cursor:pointer; user-select:none; ${borderStyle}">
                <input type="radio" name="examOption" value="${index}" ${isChecked ? 'checked' : ''} style="accent-color: var(--primary); pointer-events:none;">
                <span style="margin-left:10px; font-size:0.95rem; font-weight:600;">${opt}</span>
            </div>
        `;
    });

    if (currentSelected !== null && currentSelected !== undefined) {
        optionsContainer.innerHTML += `
            <div style="text-align: right; margin-top: 8px;">
                <button onclick="clearCurrentAnswer()" style="background:none; border:none; color:#ef4444; font-size:0.8rem; font-weight:bold; cursor:pointer; padding:4px 8px;">✕ Clear Answer</button>
            </div>`;
    }

    const flagBtn = document.getElementById('flagBtn');
    if (activeTestState.flags[qIndex]) { flagBtn.style.backgroundColor = "#fef3c7"; flagBtn.innerText = "🚩 Unflag"; } 
    else { flagBtn.style.backgroundColor = "transparent"; flagBtn.innerText = "🚩 Flag"; }

    let savedFavIds = JSON.parse(localStorage.getItem('medqFavorites')) || [];
    const favBtn = document.getElementById('favoriteBtn');
    if (savedFavIds.indexOf(qData.id) > -1) { favBtn.innerHTML = '⭐'; favBtn.style.color = '#ffd700'; } 
    else { favBtn.innerHTML = '☆'; favBtn.style.color = 'white'; }

    document.getElementById('prevBtn').style.visibility = qIndex === 0 ? 'hidden' : 'visible';
    const nextBtn = document.getElementById('nextBtn');
    if (qIndex === activeTestState.questions.length - 1) {
        nextBtn.innerText = "Submit Test";
        nextBtn.style.backgroundColor = "var(--success, #198754)";
        nextBtn.style.color = "white";
        nextBtn.onclick = submitTest;
    } else {
        nextBtn.innerText = "Next →";
        nextBtn.style.backgroundColor = "";
        nextBtn.style.color = "";
        nextBtn.onclick = nextQuestion;
    }
}

window.handleOptionToggle = function(index) {
    const qIndex = activeTestState.currentQ;
    if (activeTestState.answers[qIndex] === index) { activeTestState.answers[qIndex] = null; } 
    else { activeTestState.answers[qIndex] = index; }
    if (typeof playUISound === 'function') playUISound('tap');
    autoSaveTest();
    renderQuestion();
};

window.clearCurrentAnswer = function() {
    const qIndex = activeTestState.currentQ;
    activeTestState.answers[qIndex] = null;
    if (typeof playUISound === 'function') playUISound('tap');
    autoSaveTest();
    renderQuestion();
};

window.nextQuestion = function() {
    if (typeof playUISound === 'function') playUISound('btn');
    if (activeTestState.currentQ < activeTestState.questions.length - 1) { 
        activeTestState.currentQ++; 
        renderQuestion(); 
    }
};

window.prevQuestion = function() {
    if (typeof playUISound === 'function') playUISound('btn');
    if (activeTestState.currentQ > 0) { 
        activeTestState.currentQ--; 
        renderQuestion(); 
    }
};

function autoSaveTest() {
    if (activeTestState && activeTestState.questions.length > 0) {
        const cloneState = {
            questions: activeTestState.questions,
            answers: activeTestState.answers,
            currentQ: activeTestState.currentQ,
            visited: activeTestState.visited || {},
            flags: activeTestState.flags || {},
            testName: activeTestState.testName || document.getElementById('activeTestTitle').innerText,
            timeLeft: window.currentTestTimeLeft || (activeTestState.questions.length * 60)
        };
        localStorage.setItem('medqActiveTestBackup', JSON.stringify(cloneState));
    }
}

// ================= TEST SUBMISSION =================
function submitTest() {
    if(typeof playUISound === 'function') playUISound('btn');
    if (activeTestState.timer) { clearInterval(activeTestState.timer); activeTestState.timer = null; }
    localStorage.removeItem('medqActiveTestBackup');
    
    let correct = 0, wrong = 0, skipped = 0;
    let totalQ = activeTestState.questions.length;

    let maxTime = totalQ * 60;
    let timeLeft = window.currentTestTimeLeft !== undefined ? window.currentTestTimeLeft : maxTime;
    let timeTakenSecs = maxTime - timeLeft;
    if (timeTakenSecs < 0) timeTakenSecs = 0;
    let avgQTime = totalQ > 0 ? Math.round(timeTakenSecs / totalQ) : 0;

    activeTestState.questions.forEach(function(q, idx) {
        let userAns = activeTestState.answers[idx];
        if (userAns === null || userAns === undefined) { skipped++; } 
        else if (userAns === q.ans) { 
            correct++; 
            recordQuestionAttempt(true, q, userAns); 
            recordSubjectAttempt(q.subject, true, avgQTime); 
        } else { 
            wrong++; 
            recordQuestionAttempt(false, q, userAns); 
            recordSubjectAttempt(q.subject, false, avgQTime); 
        }
    });

    let examType = activeTestState.examPattern || 'NEET_PG';
    let totalMarks, maxMarks, patternName;
    
    if (examType === 'INI_CET') {
        maxMarks = totalQ * 1;
        totalMarks = (correct * 1) - (wrong * 0.333);
        patternName = "INI-CET Pattern (+1, -1/3)";
    } else {
        maxMarks = totalQ * 4;
        totalMarks = (correct * 4) - (wrong * 1);
        patternName = "NEET PG Pattern (+4, -1)";
    }
    
    totalMarks = Math.round(totalMarks * 100) / 100;
    if (totalMarks < 0) totalMarks = 0;

    if (timeTakenSecs > 0) {
        let currentTotalSecs = parseInt(localStorage.getItem('medqTotalSeconds') || '0') + timeTakenSecs;
        localStorage.setItem('medqTotalSeconds', currentTotalSecs);
        let currentTimedSolved = parseInt(localStorage.getItem('medqTimedSolved') || '0') + totalQ;
        localStorage.setItem('medqTimedSolved', currentTimedSolved);
    }

    let m = Math.floor(timeTakenSecs / 60);
    let s = timeTakenSecs % 60;
    let timeStr = m > 0 ? `${m}m ${s}s` : `${s}s`;

    const scoreElem = document.getElementById('scoreDisplay');
    if (scoreElem) {
        let scorePct = maxMarks > 0 ? Math.round((totalMarks / maxMarks) * 100) : 0;
        scoreElem.innerHTML = `
            <h3 style="font-size: 2rem; color: ${scorePct >= 70 ? '#28a745' : (scorePct >= 50 ? '#f59e0b' : '#dc3545')}; margin: 0;">${totalMarks} <span style="font-size: 1.2rem; color:#666;">/ ${maxMarks}</span></h3>
            <div style="background: #f8f9fa; display: inline-block; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; color: var(--primary); margin-top: 8px;">${patternName}</div>
            <div style="font-size: 0.9rem; color: #475569; font-weight: 700; margin-top: 10px; background: #f1f5f9; padding: 6px; border-radius: 8px; display: inline-block;">
                ⏱️ Time Taken: <span style="color: var(--primary);">${timeStr}</span>
            </div>
            <p style="font-weight: 600; margin: 12px 0 0 0; color: #555; font-size: 0.95rem;">
                ✅ Correct: <span style="color:#28a745">${correct}</span> | ❌ Wrong: <span style="color:#dc3545">${wrong}</span> | ⏭️ Skipped: <span style="color:#888">${skipped}</span>
            </p>
            <p style="font-weight: bold; color: var(--text-dark); margin-top: 6px;">Accuracy: ${totalQ > 0 ? Math.round((correct / totalQ) * 100) : 0}%</p>
        `;
    }

    let savedHistory = JSON.parse(localStorage.getItem('medqTestHistory')) || [];
    let todayStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    let testType = activeTestState.testName.toLowerCase().includes('custom') ? 'custom' : 'mock';
    
    let newHistoryItem = { 
        id: 'hist_' + Date.now(),
        date: todayStr, name: activeTestState.testName, score: totalMarks, maxScore: maxMarks, correct: correct, total: totalQ, type: testType,
        questions: activeTestState.questions, answers: activeTestState.answers, pattern: activeTestState.examPattern || 'NEET_PG'
    };
    
    savedHistory.unshift(newHistoryItem);
    if(savedHistory.length > 100) savedHistory.pop(); 
    localStorage.setItem('medqTestHistory', JSON.stringify(savedHistory));

    document.getElementById('activeTestScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.remove('hidden');
    document.getElementById('resultScreen').scrollTop = 0;
}

// ================= UTILITIES & HELPERS =================
function recordQuestionAttempt(isCorrect, qObj, userSelectedAns) {
    let totalSolved = parseInt(localStorage.getItem('totalQuestionsSolved') || '0') + 1;
    localStorage.setItem('totalQuestionsSolved', totalSolved);
    
    if (isCorrect) {
        let totalCorrect = parseInt(localStorage.getItem('totalCorrectAnswers') || '0') + 1;
        localStorage.setItem('totalCorrectAnswers', totalCorrect);
    } else if (qObj) {
        let mistakes = JSON.parse(localStorage.getItem('medqMistakeLog')) || [];
        let mistakeItem = Object.assign({}, qObj, { userAns: (userSelectedAns !== undefined ? userSelectedAns : null) });
        if (!mistakes.some(function(m){ return m.id === qObj.id; })) {
            mistakes.unshift(mistakeItem);
            if(mistakes.length > 100) mistakes.pop();
            localStorage.setItem('medqMistakeLog', JSON.stringify(mistakes));
        }
    }
    
    let d = new Date();
    const offset = d.getTimezoneOffset() * 60000;
    let today = (new Date(d - offset)).toISOString().split('T')[0];
    let dailySolves = JSON.parse(localStorage.getItem('medqDailySolves')) || {};
    dailySolves[today] = (dailySolves[today] || 0) + 1;
    localStorage.setItem('medqDailySolves', JSON.stringify(dailySolves));
}

function getSeededRandom(seedStr) {
    let hash = 5381;
    for (let i = 0; i < seedStr.length; i++) { hash = (hash * 33) ^ seedStr.charCodeAt(i); }
    let a = hash >>> 0;
    return function() {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function seededShuffle(array, seedStr) {
    let shuffled = array.slice(); 
    let rng = getSeededRandom(seedStr);
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(rng() * (i + 1));
        let temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}
