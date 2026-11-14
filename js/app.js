// ============================================================================
// 🌟 MEDQ - FULL APPLICATION LOGIC (APP.JS) - 100% RESTORED
// ============================================================================

// 🗂️ 1. LEGAL, POLICY & ABOUT US CONTENT DATA
window.legalContentData = {
    privacy: {
        title: "Privacy Policy",
        body: `
            <h4>1. Information We Collect & Storage</h4>
            <p>MedQ is built as a dedicated clinical preparation platform for medical students and interns. We respect your personal privacy. All your quiz history, test attempts, bookmarks, and analytics metrics are securely stored locally on your device via browser localStorage to ensure lightning-fast performance.</p>
            <br>
            <h4>2. Firebase Authentication & Cloud Sync</h4>
            <p>If you choose to sign in using Google, we only access and store your basic profile credentials strictly for account identification and cross-device progress synchronization. We never sell or distribute your personal data.</p>
            <br>
            <h4>3. Advertisements</h4>
            <p>We utilize Google AdSense to display relevant non-intrusive advertisements on our platform. Google may utilize cookies to serve ads based on your prior browsing history.</p>
        `
    },
    terms: {
        title: "Terms & Conditions",
        body: `
            <h4>1. Acceptance of Terms</h4>
            <p>By accessing the MedQ platform, you agree to comply with and be bound by these Terms and Conditions.</p>
            <br>
            <h4>2. Educational Disclaimer</h4>
            <p>MedQ is strictly designed as an educational aid for NEET PG and INI-CET. It must <strong>not</strong> be used as a primary clinical reference for direct patient diagnosis or therapeutic decisions.</p>
            <br>
            <h4>3. Intellectual Property Rights</h4>
            <p>All high-yield clinical MCQs and UI layouts curated within MedQ are protected under intellectual property guidelines.</p>
        `
    },
    about: {
        title: "About Us",
        body: `
            <h4>Mission MD/MS 🚀</h4>
            <p>MedQ is conceptualized and developed by medical students and interns, tailored specifically for NEET PG and INI-CET aspirants. Our core mission is to deliver high-yield clinical scenario-based questions and deep analytical insights.</p>
            <br>
            <h4>Key Platform Features</h4>
            <p>• Daily Clinical Doses & Rapid Revision Archives<br>• Custom Q-Bank with Year-Wise, Subject, & PYQ Filters<br>• Advanced Analytics Hub & Mistake Vault</p>
        `
    },
    contact: {
        title: "Contact Us & Support",
        body: `
            <h4>Get in Touch</h4>
            <p>If you encounter any erroneous clinical explanations, technical bugs, or have constructive suggestions, we would love to hear from you.</p>
            <br>
            <h4>Official Support Email</h4>
            <p>Email: <strong>Injoy3707@gmail.com</strong></p>
            <p>Our editorial team reviews all reported feedback promptly.</p>
        `
    }
};

// 🗂️ 2. GLOBAL VARIABLES
var TAB_ORDER = ['tabDaily', 'tabTests', 'tabHome', 'tabCustom', 'tabInsights'];
var currentActiveTab = localStorage.getItem('medqActiveTab') || 'tabHome';

let activeTestState = { questions: [], currentQ: 0, answers: [], timer: null, visited: {}, flags: {}, testName: '' };
let dailyQuestions = [];
let currentDailyQ = 0;
let dailyAnswers = [];
let isSoundEnabled = (localStorage.getItem('soundEnabled') === 'true');

// 🚀 3. INITIALIZATION & OUTSIDE CLICK LISTENER
document.addEventListener('DOMContentLoaded', function() {
    loadUserProfile();
    switchTab(currentActiveTab);
    setupSwipeEngine();
    applySavedTheme();
});

// 🖱️ OUTSIDE CLICK TO CLOSE MODALS
window.addEventListener('click', function(event) {
    const modals = [
        'spProfileModal', 'yearSetupModal', 'signInWarningModal', 'weakSubjectModal', 
        'milestoneModal', 'dailyReminderModal', 'notesSrsModal', 'favoritesModal', 
        'legalModal', 'allBadgesModal'
    ];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal && event.target === modal) modal.classList.add('hidden');
    });

    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (event.target === sidebarOverlay) toggleSidebar();
});

// 📱 4. TAB SWITCHING ENGINE
window.switchTab = function(tabId, navElement) {
    hideAllActiveScreens();
    currentActiveTab = tabId;
    localStorage.setItem('medqActiveTab', tabId);

    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    let targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.remove('hidden');

    document.querySelectorAll('#bottomNav .nav-item, #bottomNav .nav-home-wrapper').forEach(nav => nav.classList.remove('active'));
    let matchingNav = navElement || document.getElementById('navBtn_' + tabId);
    if (matchingNav) matchingNav.classList.add('active');

    if (tabId === 'tabHome') renderHomeDashboard();
    if (tabId === 'tabInsights' && typeof renderInsightsHub === 'function') renderInsightsHub();
    if (tabId === 'tabDaily') loadTodayMCQ();

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function hideAllActiveScreens() {
    if (activeTestState && activeTestState.timer) clearInterval(activeTestState.timer);
    const screens = [
        'resultScreen', 'activeTestScreen', 'instructionScreen', 'reviewScreen', 
        'loadingScreen', 'clinicalHubScreen', 'favoritesModal', 'legalModal', 
        'spProfileModal', 'weakSubjectModal', 'milestoneModal', 'dailyReminderModal'
    ];
    screens.forEach(id => {
        let el = document.getElementById(id);
        if (el) {
            el.classList.add('hidden');
            el.style.display = (id === 'instructionScreen' || id === 'reviewScreen' || id === 'loadingScreen') ? 'none' : '';
        }
    });
}

// ☰ 5. SIDEBAR & MODAL CONTROLLERS
window.toggleSidebar = function() {
    playUISound('tap');
    const sidebar = document.getElementById('mainSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
        overlay.classList.remove('active');
    } else {
        sidebar.style.left = '0px';
        overlay.classList.add('active');
        document.getElementById('sidebarDoctorName').innerText = localStorage.getItem('spUserName') || 'Dr. Medical Student';
    }
};

window.openSPModal = function() {
    playUISound('tap');
    document.getElementById('spProfileModal').classList.remove('hidden');
    loadUserProfile();
};

window.closeSPModal = function() {
    playUISound('tap');
    document.getElementById('spProfileModal').classList.add('hidden');
};

window.openLegalModal = function(type) {
    playUISound('tap');
    const modal = document.getElementById('legalModal');
    const titleElem = document.getElementById('legalModalTitle');
    const bodyElem = document.getElementById('legalModalBody');
    
    if (window.legalContentData && window.legalContentData[type]) {
        titleElem.innerText = window.legalContentData[type].title;
        bodyElem.innerHTML = window.legalContentData[type].body;
    }
    modal.classList.remove('hidden');
};

window.closeLegalModal = function() {
    playUISound('tap');
    document.getElementById('legalModal').classList.add('hidden');
};

// 👤 6. USER PROFILE & THEME LOGIC
function loadUserProfile() {
    let name = localStorage.getItem('spUserName');
    if(name) {
        let nameInputs = document.querySelectorAll('#spUserName, #homeUserName');
        nameInputs.forEach(el => {
            if(el.tagName === 'INPUT') el.value = name;
            else el.innerText = name;
        });
        document.getElementById('navUserBadge').innerText = name.charAt(0).toUpperCase();
        document.getElementById('spUserInitials').innerText = name.charAt(0).toUpperCase();
    }
}

window.saveUserProfile = function() {
    let nameInput = document.getElementById('spUserName');
    if(nameInput) {
        localStorage.setItem('spUserName', nameInput.value);
        loadUserProfile();
    }
};

function applySavedTheme() {
    let theme = localStorage.getItem('medqTheme') || 'light';
    if (theme === 'dark') document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
}

window.toggleThemeFromSidebar = function() {
    playUISound('tap');
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('medqTheme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    toggleSidebar();
};

window.toggleSoundFromSidebar = function() {
    isSoundEnabled = !isSoundEnabled;
    localStorage.setItem('soundEnabled', isSoundEnabled);
    document.getElementById('sidebarSoundStatus').innerText = isSoundEnabled ? "ON" : "OFF";
    playUISound('tap');
};

// 📊 7. HOME DASHBOARD RENDERER
function renderHomeDashboard() {
    document.getElementById('homeUserName').innerText = localStorage.getItem('spUserName') || 'Doctor';
    document.getElementById('homeStreakVal').innerText = localStorage.getItem('medqStreakCount') || '0';
    
    let totalSolved = parseInt(localStorage.getItem('totalQuestionsSolved') || '0');
    let totalCorrect = parseInt(localStorage.getItem('totalCorrectAnswers') || '0');
    let accuracy = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;
    
    document.getElementById('homeStatSolved').innerText = totalSolved;
    document.getElementById('homeStatAccuracy').innerText = accuracy + "%";
    
    let pearls = [
        "Metoclopramide is contraindicated in Parkinson's disease due to dopamine antagonism.",
        "Drug of choice for trigeminal neuralgia is Carbamazepine.",
        "Hypercalcemia with normal PTH is familial hypocalciuric hypercalcemia (FHH).",
        "Most common site of ectopic pregnancy is the Ampulla of the fallopian tube."
    ];
    let todayIndex = new Date().getDate() % pearls.length;
    document.getElementById('homeClinicalPearl').innerText = pearls[todayIndex];
}

// 📚 8. DAILY DOSE ENGINE
window.loadTodayMCQ = function() {
    if(!window.qBank || window.qBank.length === 0) return;
    
    let pool = window.qBank; 
    let shuffledPool = pool.sort(() => 0.5 - Math.random()); 
    dailyQuestions = shuffledPool.slice(0, 5); 
    dailyAnswers = new Array(5).fill(null);
    currentDailyQ = 0;
    
    document.getElementById('dailyDateTitle').innerText = `Daily Dose`;
    renderSingleDailyQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function renderSingleDailyQuestion() {
    const container = document.getElementById('dailyMcqContainer');
    if (!container || dailyQuestions.length === 0) return;

    const q = dailyQuestions[currentDailyQ];
    const hasAnswered = dailyAnswers[currentDailyQ] !== null;
    const userAns = dailyAnswers[currentDailyQ];

    document.getElementById('dailyProgress').innerText = (currentDailyQ + 1) + ' of ' + dailyQuestions.length;

    let html = `<div class="card" style="box-shadow: none; border: 1px solid var(--border); padding: 16px; border-radius: 12px;">
        <div style="font-size:0.82rem; color:var(--primary); font-weight:800; text-transform: uppercase; margin-bottom:12px;">
            ${q.subject}
        </div>
        <div class="mcq-q">${q.q}</div>
        <div style="display: flex; flex-direction: column; gap: 10px;">`;

    q.opts.forEach((opt, oIdx) => {
        let optClass = "mcq-option";
        let optStyle = "cursor: pointer;";
        if (hasAnswered) {
            optStyle = "pointer-events: none;";
            if (oIdx === q.ans) optClass += " correct";
            else if (oIdx === userAns) optClass += " incorrect";
        }
        html += `<div class="${optClass}" style="${optStyle}" onclick="handleDailyAnswer(${currentDailyQ}, ${oIdx}, ${q.ans})">${opt}</div>`;
    });

    html += `</div>`;

    if (hasAnswered) {
        html += `
            <div style="margin-top: 20px; background: #e2eef9; padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
                <strong style="color: var(--primary);">✅ Explanation:</strong><br>
                <div style="font-size: 0.95rem; color: #004085; margin-top: 5px; line-height: 1.6;">${q.exp}</div>
                ${q.wrongExp ? `<div style="margin-top:10px; color:#7f1d1d; border-top:1px dashed #93c5fd; padding-top:10px;">${q.wrongExp}</div>` : ''}
            </div>
            <div style="display: flex; gap: 8px; margin-top: 25px;">
                <button class="btn btn-outline" style="flex: 1; visibility: ${currentDailyQ === 0 ? 'hidden' : 'visible'};" onclick="prevDailyQuestion()">⬅️ Prev</button>
                <button class="btn btn-primary" style="flex: 1;" onclick="nextDailyQuestion()">${currentDailyQ === dailyQuestions.length - 1 ? 'Finish 🎉' : 'Next ➡️'}</button>
            </div>
        `;
    }
    container.innerHTML = html;
}

window.handleDailyAnswer = function(qIndex, selectedIdx, correctIdx) {
    playUISound('tap');
    dailyAnswers[qIndex] = selectedIdx;
    
    let totalSolved = parseInt(localStorage.getItem('totalQuestionsSolved') || '0') + 1;
    localStorage.setItem('totalQuestionsSolved', totalSolved);
    if(selectedIdx === correctIdx) {
        let totalCorrect = parseInt(localStorage.getItem('totalCorrectAnswers') || '0') + 1;
        localStorage.setItem('totalCorrectAnswers', totalCorrect);
    }
    
    renderSingleDailyQuestion();
};

window.nextDailyQuestion = function() {
    playUISound('btn');
    if (currentDailyQ < dailyQuestions.length - 1) {
        currentDailyQ++;
        renderSingleDailyQuestion();
    } else {
        alert("🎉 Awesome, Doctor! \nGreat job completing today's dose!");
        switchTab('tabHome');
    }
};

window.prevDailyQuestion = function() {
    playUISound('btn');
    if (currentDailyQ > 0) { currentDailyQ--; renderSingleDailyQuestion(); }
};

// 📝 9. CUSTOM Q-BANK STUDIO
let selectedCustomDifficulty = 'Moderate';
let selectedCustomCount = 20;

window.selectCustomDifficulty = function(level, btn) {
    playUISound('tap');
    selectedCustomDifficulty = level;
    document.querySelectorAll('.custom-diff-btn').forEach(el => {
        el.classList.remove('btn-primary');
        el.classList.add('btn-outline');
    });
    btn.classList.remove('btn-outline');
    btn.classList.add('btn-primary');
};

window.selectCustomCount = function(count, btn) {
    playUISound('tap');
    selectedCustomCount = count;
    document.querySelectorAll('.custom-count-btn').forEach(el => {
        el.classList.remove('btn-primary');
        el.classList.add('btn-outline');
    });
    btn.classList.remove('btn-outline');
    btn.classList.add('btn-primary');
};

if(document.getElementById('btnGenerateCustom')) {
    document.getElementById('btnGenerateCustom').onclick = function() {
        playUISound('btn');
        if (!window.qBank || window.qBank.length === 0) {
            alert("Questions are loading. Please wait a moment.");
            return;
        }

        const pattern = document.getElementById('customExamPattern').value;
        const includePYQ = document.getElementById('includePYQ').checked;

        let customPool = window.qBank.filter(q => {
            let matchLevel = q.level === selectedCustomDifficulty;
            let matchPYQ = includePYQ ? (q.isPYQ || q.tags?.includes('PYQ')) : true;
            return matchLevel && matchPYQ;
        });

        if (customPool.length === 0) customPool = window.qBank;
        customPool = customPool.sort(() => 0.5 - Math.random()).slice(0, selectedCustomCount);

        window.pendingTestParams = {
            testName: `Custom Test (${selectedCustomDifficulty})`,
            examPattern: pattern,
            customPool: customPool
        };

        document.getElementById('instTestTitle').innerText = window.pendingTestParams.testName;
        document.getElementById('instQCount').innerText = customPool.length;
        document.getElementById('instTime').innerText = customPool.length + " Mins";
        document.getElementById('instructionScreen').style.display = 'flex';
    };
}

window.cancelInstructions = function() {
    playUISound('tap');
    document.getElementById('instructionScreen').style.display = 'none';
};

// 🚀 10. ACTIVE TEST ENGINE
window.proceedToActualTest = function() {
    if (!window.pendingTestParams) return;
    playUISound('btn');
    document.getElementById('instructionScreen').style.display = 'none';

    var customPool = window.pendingTestParams.customPool;
    activeTestState = { 
        questions: customPool, 
        answers: new Array(customPool.length).fill(null), 
        currentQ: 0, 
        timer: null, 
        testName: window.pendingTestParams.testName 
    };

    document.getElementById('activeTestTitle').innerText = activeTestState.testName;
    document.getElementById('totalQNum').innerText = customPool.length;
    
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    const actScreen = document.getElementById('activeTestScreen');
    actScreen.classList.remove('hidden');
    actScreen.style.display = 'flex';
    
    renderQuestion();
    startTestTimer(customPool.length * 60);
};

function renderQuestion() {
    const qIndex = activeTestState.currentQ;
    const qData = activeTestState.questions[qIndex];
    document.getElementById('currentQNum').innerText = qIndex + 1;
    
    document.getElementById('questionText').innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
            <div>${qData.q}</div>
        </div>
    `;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    const currentSelected = activeTestState.answers[qIndex];

    qData.opts.forEach((opt, index) => {
        const isChecked = currentSelected === index;
        const borderStyle = isChecked ? "border: 2px solid var(--primary); background: var(--primary-light);" : "background:var(--bg-gray); border:1px solid var(--border);";
        
        optionsContainer.innerHTML += `
            <div class="option-label" onclick="handleOptionToggle(${index})" style="display:flex; align-items:center; padding:14px 18px; margin-bottom:12px; border-radius:10px; cursor:pointer; user-select:none; ${borderStyle}">
                <span style="font-size:1.02rem; font-weight:600;">${opt}</span>
            </div>
        `;
    });

    document.getElementById('prevBtn').style.visibility = qIndex === 0 ? 'hidden' : 'visible';
    const nextBtn = document.getElementById('nextBtn');
    
    if (qIndex === activeTestState.questions.length - 1) {
        nextBtn.innerText = "Submit Test";
        nextBtn.style.backgroundColor = "#198754";
        nextBtn.style.color = "white";
        nextBtn.onclick = submitTest;
    } else {
        nextBtn.innerText = "Next →";
        nextBtn.style.backgroundColor = "var(--primary)";
        nextBtn.onclick = nextQuestion;
    }
}

window.handleOptionToggle = function(index) {
    playUISound('tap');
    activeTestState.answers[activeTestState.currentQ] = index;
    renderQuestion();
};

window.nextQuestion = function() {
    playUISound('btn');
    if (activeTestState.currentQ < activeTestState.questions.length - 1) { 
        activeTestState.currentQ++; 
        renderQuestion(); 
    }
};

window.prevQuestion = function() {
    playUISound('btn');
    if (activeTestState.currentQ > 0) { 
        activeTestState.currentQ--; 
        renderQuestion(); 
    }
};

window.submitTest = function() {
    playUISound('btn');
    if (activeTestState.timer) clearInterval(activeTestState.timer);
    
    let correct = 0, wrong = 0, skipped = 0;
    activeTestState.questions.forEach((q, idx) => {
        let userAns = activeTestState.answers[idx];
        if (userAns === null || userAns === undefined) skipped++;
        else if (userAns === q.ans) correct++;
        else wrong++;
    });

    let totalMarks = (correct * 4) - (wrong * 1);
    let maxMarks = activeTestState.questions.length * 4;

    const scoreElem = document.getElementById('scoreDisplay');
    if (scoreElem) {
        let scorePct = maxMarks > 0 ? Math.round((totalMarks / maxMarks) * 100) : 0;
        scoreElem.innerHTML = `
            <h3 style="font-size: 2.2rem; color: ${scorePct >= 70 ? '#10b981' : (scorePct >= 50 ? '#f59e0b' : '#ef4444')}; margin: 0;">${totalMarks} <span style="font-size: 1.2rem; color:#666;">/ ${maxMarks}</span></h3>
            <p style="font-weight: 600; margin: 12px 0 0 0; color: #555; font-size: 0.95rem;">
                ✅ Correct: <span style="color:#10b981">${correct}</span> | ❌ Wrong: <span style="color:#ef4444">${wrong}</span> | ⏭️ Skipped: <span style="color:#888">${skipped}</span>
            </p>
        `;
    }

    document.getElementById('activeTestScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.remove('hidden');
};

function startTestTimer(seconds) {
    let timeLeft = seconds;
    const timerDisplay = document.getElementById('testTimer');
    activeTestState.timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(activeTestState.timer);
            alert("Time is up! Auto-submitting your test.");
            submitTest();
            return;
        }
        timeLeft--;
        let m = Math.floor((timeLeft % 3600) / 60);
        let s = timeLeft % 60;
        if (timerDisplay) timerDisplay.innerText = m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');
    }, 1000);
}

window.backToHomeFromResults = function() {
    playUISound('btn');
    document.getElementById('resultScreen').classList.add('hidden');
    switchTab('tabHome');
};

// 🖐️ 11. SWIPE ENGINE
function setupSwipeEngine() {
    let touchStartX = 0;
    const mainArea = document.getElementById('mainContainer');
    if (!mainArea) return;
    
    mainArea.addEventListener('touchstart', e => {
        if (e.target.closest('.no-swipe') || e.target.closest('.card')) { touchStartX = null; return; }
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    mainArea.addEventListener('touchend', e => {
        if (touchStartX === null) return;
        let diffX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diffX) > 80) { 
            let currIdx = TAB_ORDER.indexOf(currentActiveTab);
            if (diffX < 0 && currIdx < TAB_ORDER.length - 1) switchTab(TAB_ORDER[currIdx + 1]); 
            else if (diffX > 0 && currIdx > 0) switchTab(TAB_ORDER[currIdx - 1]); 
        }
        touchStartX = null;
    }, { passive: true });
}

// 🔊 12. AUDIO SYSTEM
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playUISound(type) {
    if (!isSoundEnabled) return; 
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = 'sine'; 
    if (type === 'tap') {
        oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'btn') {
        oscillator.frequency.setValueAtTime(250, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.08);
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.08);
    }
}
