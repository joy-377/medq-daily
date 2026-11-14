// ============================================================================
// 🌟 MEDQ - ULTIMATE JAVASCRIPT ENGINE (APP.JS)
// ============================================================================

// ==========================================
// 1. FIREBASE SETUP & CLOUD SYNC
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyC_a4lWu2TZRa2vc8m2Hy2g8Ww4fV5twA8",
    authDomain: "medq-daily.firebaseapp.com",
    projectId: "medq-daily",
    storageBucket: "medq-daily.firebasestorage.app",
    messagingSenderId: "23847093259",
    appId: "1:23847093259:web:53bfa37687dc69b936330e",
    measurementId: "G-RT29DSDRMQ"
};

// Initialize Firebase (Assuming script is loaded in HTML)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

window.loginWithGoogle = function() {
    playUISound('tap');
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function(result) {
        const user = result.user;
        alert(`Welcome, ${user.displayName}! Successfully logged in.`);
        localStorage.setItem('spUserName', user.displayName);
        localStorage.setItem('spUserAvatar', user.photoURL);
        localStorage.setItem('userEmail', user.email);
        closeSPModal();
        syncDataToCloud(user.uid);
        loadUserProfile();
    }).catch(function(error) {
        alert("Google Login Failed: " + error.message);
    });
};

window.syncDataToCloud = function(userId) {
    let userData = {
        name: localStorage.getItem('spUserName'),
        totalSolved: localStorage.getItem('totalQuestionsSolved') || 0,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    db.collection("users").doc(userId).set(userData, { merge: true });
};

window.logoutApp = function() {
    playUISound('btn');
    auth.signOut().then(() => {
        alert("Logged out successfully.");
        localStorage.removeItem('spUserName');
        loadUserProfile();
    });
};

// ==========================================
// 2. AUDIO ENGINE
// ==========================================
let isSoundEnabled = (localStorage.getItem('soundEnabled') === 'true');
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

window.playUISound = function(type) {
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
};

window.toggleSoundFromSidebar = function() {
    isSoundEnabled = !isSoundEnabled;
    localStorage.setItem('soundEnabled', isSoundEnabled);
    let soundStatus = document.getElementById('sidebarSoundStatus');
    if(soundStatus) soundStatus.innerText = isSoundEnabled ? "ON" : "OFF";
    playUISound('tap');
};

// ==========================================
// 3. LEGAL & POLICY DATA
// ==========================================
window.legalContentData = {
    privacy: { title: "Privacy Policy", body: "<h4>1. Local Storage</h4><p>Your quiz history and metrics are securely stored locally on your device.</p><h4>2. Cloud Sync</h4><p>If signed in via Google, basic profile data is synced. We do not sell your data.</p>" },
    terms: { title: "Terms & Conditions", body: "<h4>1. Educational Purpose</h4><p>MedQ is designed as an educational aid for NEET PG and INI-CET and should not be used as clinical reference.</p>" },
    about: { title: "About Us", body: "<h4>Mission MD/MS 🚀</h4><p>Built by medicos, for medicos to provide high-yield clinical MCQs and rapid revision tools.</p>" },
    contact: { title: "Contact Us", body: "<h4>Support</h4><p>Email: <strong>Injoy3707@gmail.com</strong></p><p>We review feedback promptly to maintain high academic standards.</p>" }
};

// ==========================================
// 4. GLOBAL STATE & INITIALIZATION
// ==========================================
var TAB_ORDER = ['tabDaily', 'tabTests', 'tabHome', 'tabCustom', 'tabInsights'];
var currentActiveTab = localStorage.getItem('medqActiveTab') || 'tabHome';

let activeTestState = { questions: [], currentQ: 0, answers: [], timer: null, testName: '' };
let dailyQuestions = [];
let currentDailyQ = 0;
let dailyAnswers = [];

document.addEventListener('DOMContentLoaded', function() {
    loadUserProfile();
    applyThemeOnLoad();
    switchTab(currentActiveTab);
    setupSwipeEngine();
    
    // Set sound status text on load
    let soundStatus = document.getElementById('sidebarSoundStatus');
    if(soundStatus) soundStatus.innerText = isSoundEnabled ? "ON" : "OFF";
});

// OUTSIDE CLICK LISTENER FOR ALL MODALS
window.addEventListener('click', function(event) {
    const modals = [
        'spProfileModal', 'yearSetupModal', 'signInWarningModal', 'weakSubjectModal', 
        'milestoneModal', 'dailyReminderModal', 'notesSrsModal', 'favoritesModal', 
        'legalModal', 'allBadgesModal', 'instructionScreen'
    ];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal && event.target === modal) modal.classList.add('hidden');
    });

    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (event.target === sidebarOverlay) toggleSidebar();
});

// ==========================================
// 5. TAB SWITCHING & SWIPE ENGINE
// ==========================================
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
    if (tabId === 'tabDaily') loadTodayMCQ();

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function hideAllActiveScreens() {
    if (activeTestState && activeTestState.timer) clearInterval(activeTestState.timer);
    const screens = ['resultScreen', 'activeTestScreen', 'instructionScreen', 'reviewScreen', 'loadingScreen', 'clinicalHubScreen', 'favoritesModal', 'legalModal', 'spProfileModal'];
    screens.forEach(id => {
        let el = document.getElementById(id);
        if (el) { el.classList.add('hidden'); el.style.display = ''; }
    });
    let instScreen = document.getElementById('instructionScreen');
    if(instScreen) instScreen.style.display = 'none';
}

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

// ==========================================
// 6. MODALS, SIDEBAR & PROFILE CONTROLS
// ==========================================
window.toggleSidebar = function() {
    playUISound('tap');
    const sidebar = document.getElementById('mainSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
        if(overlay) overlay.classList.remove('active');
    } else {
        sidebar.style.left = '0px';
        if(overlay) overlay.classList.add('active');
        let dName = document.getElementById('sidebarDoctorName');
        if(dName) dName.innerText = localStorage.getItem('spUserName') || 'Dr. Medical Student';
    }
};

window.openSPModal = function() {
    playUISound('tap');
    let pModal = document.getElementById('spProfileModal');
    if(pModal) pModal.classList.remove('hidden');
    loadUserProfile();
};

window.closeSPModal = function() {
    playUISound('tap');
    let pModal = document.getElementById('spProfileModal');
    if(pModal) pModal.classList.add('hidden');
};

window.openLegalModal = function(type) {
    playUISound('tap');
    const modal = document.getElementById('legalModal');
    const titleElem = document.getElementById('legalModalTitle');
    const bodyElem = document.getElementById('legalModalBody');
    if (window.legalContentData && window.legalContentData[type]) {
        if(titleElem) titleElem.innerText = window.legalContentData[type].title;
        if(bodyElem) bodyElem.innerHTML = window.legalContentData[type].body;
    }
    if(modal) modal.classList.remove('hidden');
};

window.closeLegalModal = function() {
    playUISound('tap');
    let modal = document.getElementById('legalModal');
    if(modal) modal.classList.add('hidden');
};

function loadUserProfile() {
    let name = localStorage.getItem('spUserName') || 'Medical Student';
    let nameInput = document.getElementById('spUserName');
    let homeName = document.getElementById('homeUserName');
    let avatar = document.getElementById('navUserBadge');
    
    if(nameInput) nameInput.value = name;
    if(homeName) homeName.innerText = name;
    if(avatar) avatar.innerText = name.charAt(0).toUpperCase();
}

window.saveUserProfile = function() {
    let nameInput = document.getElementById('spUserName');
    if(nameInput && nameInput.value.trim() !== '') {
        localStorage.setItem('spUserName', nameInput.value);
        loadUserProfile();
    }
};

// Theme Controller
function applyThemeOnLoad() {
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

// ==========================================
// 7. HOME DASHBOARD RENDERER
// ==========================================
window.renderHomeDashboard = function() {
    let totalSolved = parseInt(localStorage.getItem('totalQuestionsSolved') || '0');
    let totalCorrect = parseInt(localStorage.getItem('totalCorrectAnswers') || '0');
    let accuracy = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;
    
    let elSolved = document.getElementById('homeStatSolved');
    let elAcc = document.getElementById('homeStatAccuracy');
    
    if(elSolved) elSolved.innerText = totalSolved;
    if(elAcc) elAcc.innerText = accuracy + "%";
    
    // Clinical Pearl
    let pearls = [
        "Metoclopramide is contraindicated in Parkinson's disease due to dopamine antagonism.",
        "Drug of choice for trigeminal neuralgia is Carbamazepine.",
        "Hypercalcemia with normal PTH is familial hypocalciuric hypercalcemia (FHH)."
    ];
    let pearlEl = document.getElementById('homeClinicalPearl');
    if(pearlEl) pearlEl.innerText = pearls[new Date().getDate() % pearls.length];
};

// ==========================================
// 8. DAILY DOSE ENGINE
// ==========================================
window.loadTodayMCQ = function() {
    if(!window.qBank || window.qBank.length === 0) {
        let container = document.getElementById('dailyMcqContainer');
        if(container) container.innerHTML = `<p style="padding:20px; text-align:center;">Loading questions...</p>`;
        return;
    }
    
    // Randomly select 5 questions for daily dose
    let shuffledPool = window.qBank.sort(() => 0.5 - Math.random()); 
    dailyQuestions = shuffledPool.slice(0, 5); 
    dailyAnswers = new Array(5).fill(null);
    currentDailyQ = 0;
    
    let dateTitle = document.getElementById('dailyDateTitle');
    if(dateTitle) dateTitle.innerText = `Daily Dose`;
    
    renderSingleDailyQuestion();
};

function renderSingleDailyQuestion() {
    const container = document.getElementById('dailyMcqContainer');
    if (!container || dailyQuestions.length === 0) return;

    const q = dailyQuestions[currentDailyQ];
    const hasAnswered = dailyAnswers[currentDailyQ] !== null;
    const userAns = dailyAnswers[currentDailyQ];

    let prog = document.getElementById('dailyProgress');
    if(prog) prog.innerText = (currentDailyQ + 1) + ' of ' + dailyQuestions.length;

    let html = `<div class="card" style="box-shadow:none; border:1px solid var(--border); padding:16px; border-radius:12px;">
        <div style="font-size:0.82rem; color:var(--primary); font-weight:800; text-transform:uppercase; margin-bottom:12px;">
            ${q.subject || 'General'}
        </div>
        <div class="mcq-q">${q.q}</div>
        <div style="display:flex; flex-direction:column; gap:10px;">`;

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
            <div style="margin-top:20px; background:#e2eef9; padding:15px; border-radius:8px; border-left:4px solid var(--primary);">
                <strong style="color:var(--primary);">✅ Explanation:</strong><br>
                <div style="font-size:0.95rem; color:#004085; margin-top:5px; line-height:1.6;">${q.exp}</div>
            </div>
            <div style="display:flex; gap:8px; margin-top:25px;">
                <button class="btn btn-outline" style="flex:1; visibility:${currentDailyQ === 0 ? 'hidden' : 'visible'};" onclick="prevDailyQuestion()">⬅️ Prev</button>
                <button class="btn btn-primary" style="flex:1;" onclick="nextDailyQuestion()">${currentDailyQ === dailyQuestions.length - 1 ? 'Finish 🎉' : 'Next ➡️'}</button>
            </div>
        `;
    }
    container.innerHTML = html;
}

window.handleDailyAnswer = function(qIndex, selectedIdx, correctIdx) {
    playUISound('tap');
    dailyAnswers[qIndex] = selectedIdx;
    
    // Update Stats
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

// ==========================================
// 9. CUSTOM Q-BANK STUDIO
// ==========================================
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

        let customPool = window.qBank.filter(q => q.level === selectedCustomDifficulty);
        if (customPool.length === 0) customPool = window.qBank; 
        
        customPool = customPool.sort(() => 0.5 - Math.random()).slice(0, selectedCustomCount);

        window.pendingTestParams = {
            testName: `Custom Test (${selectedCustomDifficulty})`,
            customPool: customPool
        };

        let titleEl = document.getElementById('instTestTitle');
        let countEl = document.getElementById('instQCount');
        let timeEl = document.getElementById('instTime');
        
        if(titleEl) titleEl.innerText = window.pendingTestParams.testName;
        if(countEl) countEl.innerText = customPool.length;
        if(timeEl) timeEl.innerText = customPool.length + " Mins";
        
        let instScreen = document.getElementById('instructionScreen');
        if(instScreen) instScreen.style.display = 'flex';
    };
}

window.cancelInstructions = function() {
    playUISound('tap');
    let instScreen = document.getElementById('instructionScreen');
    if(instScreen) instScreen.style.display = 'none';
};

// ==========================================
// 10. ACTIVE TEST ENGINE
// ==========================================
window.proceedToActualTest = function() {
    if (!window.pendingTestParams) return;
    playUISound('btn');
    
    let instScreen = document.getElementById('instructionScreen');
    if(instScreen) instScreen.style.display = 'none';

    var customPool = window.pendingTestParams.customPool;
    activeTestState = { 
        questions: customPool, 
        answers: new Array(customPool.length).fill(null), 
        currentQ: 0, 
        timer: null, 
        testName: window.pendingTestParams.testName 
    };

    let actTitle = document.getElementById('activeTestTitle');
    let actTotal = document.getElementById('totalQNum');
    if(actTitle) actTitle.innerText = activeTestState.testName;
    if(actTotal) actTotal.innerText = customPool.length;
    
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    const actScreen = document.getElementById('activeTestScreen');
    if(actScreen) actScreen.classList.remove('hidden');
    
    renderQuestion();
    startTestTimer(customPool.length * 60);
};

function renderQuestion() {
    const qIndex = activeTestState.currentQ;
    const qData = activeTestState.questions[qIndex];
    let qNum = document.getElementById('currentQNum');
    if(qNum) qNum.innerText = qIndex + 1;
    
    let qText = document.getElementById('questionText');
    if(qText) qText.innerHTML = `<div>${qData.q}</div>`;
    
    const optionsContainer = document.getElementById('optionsContainer');
    if(optionsContainer) {
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
    }

    let prevBtn = document.getElementById('prevBtn');
    if(prevBtn) prevBtn.style.visibility = qIndex === 0 ? 'hidden' : 'visible';
    
    const nextBtn = document.getElementById('nextBtn');
    if(nextBtn) {
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

    let actScreen = document.getElementById('activeTestScreen');
    if(actScreen) actScreen.classList.add('hidden');
    let resScreen = document.getElementById('resultScreen');
    if(resScreen) resScreen.classList.remove('hidden');
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
    let resScreen = document.getElementById('resultScreen');
    if(resScreen) resScreen.classList.add('hidden');
    switchTab('tabHome');
};

// ==========================================
// 11. EXTRA UI PLACEHOLDERS (To prevent errors)
// ==========================================
window.openFavoritesModal = () => { alert("Favorites Vault is currently empty."); };
window.openMistakeStudio = () => { alert("Mistake Vault will be available after you take more tests."); };
window.openTestHistoryFromSidebar = () => { alert("Test History is empty."); };
window.openBlogModal = () => { alert("Blogs coming soon!"); };
window.shareAppGeneric = () => { alert("App link copied to clipboard!"); };
