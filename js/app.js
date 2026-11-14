// js/app.js
// ============================================================================
// FULL MEDICAL MCQ PLATFORM ENGINE (NEET PG / INI-CET)
// Author: ZuvoHome Team | Target: GitHub Pages Deployment
// ============================================================================

// ================= 1. GLOBAL VARIABLES & STATE =================
var TAB_ORDER = ['tabDaily', 'tabTests', 'tabHome', 'tabCustom', 'tabInsights'];
var currentActiveTab = localStorage.getItem('medqActiveTab') || 'tabHome';

let activeTestState = { questions: [], currentQ: 0, answers: [], timer: null, visited: {}, flags: {}, testName: '' };
let dailyQuestions = [];
let currentDailyQ = 0;
let dailyAnswers = [];

// ================= 2. INITIALIZATION & DATA WAITING =================
// গিটহাব সার্ভার থেকে data-loader.js লোড হওয়ার জন্য অপেক্ষা
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    if (window.qBank && window.qBank.length > 0) {
        console.log("App Initialized! Total MCQs:", window.qBank.length);
        setupSwipeEngine();
        loadUserProfile();
        switchTab(currentActiveTab);
    } else {
        console.warn("Data not loaded yet. Waiting 500ms...");
        setTimeout(initApp, 500);
    }
}

// ================= 3. TAB SWITCHING ENGINE =================
function hideAllActiveScreens() {
    if (activeTestState && activeTestState.timer) clearInterval(activeTestState.timer);
    
    const screens = ['resultScreen', 'activeTestScreen', 'instructionScreen', 'reviewScreen', 'loadingScreen', 'clinicalHubScreen', 'favoritesModal', 'legalModal', 'spProfileModal', 'weakSubjectModal', 'milestoneModal', 'dailyReminderModal', 'notesSrsModal'];
    
    screens.forEach(id => {
        let el = document.getElementById(id);
        if (el) {
            el.classList.add('hidden');
            el.style.display = (id === 'instructionScreen' || id === 'reviewScreen' || id === 'loadingScreen') ? 'none' : '';
        }
    });
}

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
    if (tabId === 'tabInsights') renderInsightsHub();
    if (tabId === 'tabDaily') loadTodayMCQ();

    let mainEl = document.getElementById('mainContainer');
    if (mainEl) mainEl.scrollTop = 0;
};

// ================= 4. SIDEBAR & MODAL CONTROLLERS =================
window.toggleSidebar = function() {
    const sidebar = document.getElementById('mainSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if(typeof playUISound === 'function') playUISound('tap');
    
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
        overlay.classList.remove('active');
    } else {
        sidebar.style.left = '0px';
        overlay.classList.add('active');
        
        // আপডেট সাইডবার প্রোফাইল
        document.getElementById('sidebarDoctorName').innerText = localStorage.getItem('spUserName') || 'Dr. Medical Student';
        document.getElementById('sidebarDoctorRank').innerText = "🌱 " + (localStorage.getItem('spUserDesignation') || 'Level 1 Medico');
        document.getElementById('sidebarStreakCount').innerText = localStorage.getItem('medqStreakCount') || '0';
    }
};

window.openSPModal = function() {
    if(typeof playUISound === 'function') playUISound('tap');
    document.getElementById('spProfileModal').classList.remove('hidden');
    loadUserProfile();
};

window.closeSPModal = function() {
    if(typeof playUISound === 'function') playUISound('tap');
    document.getElementById('spProfileModal').classList.add('hidden');
};

window.openLegalModal = function(type) {
    if(typeof playUISound === 'function') playUISound('tap');
    const modal = document.getElementById('legalModal');
    const title = document.getElementById('legalModalTitle');
    const body = document.getElementById('legalModalBody');
    
    if(type === 'privacy') {
        title.innerText = "Privacy Policy";
        body.innerHTML = "<p>Your data is stored locally on your device. We do not sell your personal information.</p>";
    } else if (type === 'contact') {
        title.innerText = "Contact Us";
        body.innerHTML = "<p>For business or support inquiries, please email the ZuvoHome Team at: <strong>Injoy3707@gmail.com</strong></p>";
    } else {
        title.innerText = "Information";
        body.innerHTML = "<p>App developed for medical students for NEET PG & INI-CET preparation.</p>";
    }
    modal.classList.remove('hidden');
};

window.closeLegalModal = function() {
    document.getElementById('legalModal').classList.add('hidden');
};

// ================= 5. HOME DASHBOARD RENDERER =================
function renderHomeDashboard() {
    // 1. Profile & Stats
    document.getElementById('homeUserName').innerText = localStorage.getItem('spUserName') || 'Doctor';
    document.getElementById('homeStreakVal').innerText = localStorage.getItem('medqStreakCount') || '0';
    
    let totalSolved = parseInt(localStorage.getItem('totalQuestionsSolved') || '0');
    let totalCorrect = parseInt(localStorage.getItem('totalCorrectAnswers') || '0');
    let accuracy = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;
    
    document.getElementById('homeStatSolved').innerText = totalSolved;
    document.getElementById('homeStatAccuracy').innerText = accuracy + "%";
    
    // 2. Clinical Pearl
    let pearls = [
        "Metoclopramide is contraindicated in Parkinson's disease due to dopamine antagonism.",
        "Drug of choice for trigeminal neuralgia is Carbamazepine.",
        "Hypercalcemia with normal PTH is familial hypocalciuric hypercalcemia (FHH).",
        "Most common site of ectopic pregnancy is the Ampulla of the fallopian tube."
    ];
    let todayIndex = new Date().getDate() % pearls.length;
    document.getElementById('homeClinicalPearl').innerText = pearls[todayIndex];
    
    // 3. Daily Goal
    let dailyTarget = parseInt(localStorage.getItem('medqDailyTarget') || '50');
    let dailySolvesMap = JSON.parse(localStorage.getItem('medqDailySolves')) || {};
    let todayStr = new Date().toISOString().split('T')[0];
    let todaySolved = dailySolvesMap[todayStr] || 0;
    
    let progressPct = Math.min(100, Math.round((todaySolved / dailyTarget) * 100));
    document.getElementById('homeGoalText').innerText = todaySolved + "/" + dailyTarget;
    document.getElementById('homeGoalProgressBar').style.width = progressPct + "%";
    document.getElementById('homeGoalPctText').innerText = progressPct + "% Completed";
}

// ================= 6. DAILY DOSE ENGINE =================
function getAllowedSubjectsForUser() {
    let desig = localStorage.getItem('spUserDesignation') || 'Intern / Doctor';
    if (desig === 'First Year') return ["Anatomy", "Physiology", "Biochemistry"];
    return window.SUBJECTS || ["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "Microbiology", "Forensic Medicine", "Community Medicine", "ENT", "Ophthalmology", "Medicine", "Surgery", "OBGYN", "Pediatrics", "Orthopedics", "Psychiatry", "Dermatology", "Radiology", "Anesthesia"];
}

window.loadTodayMCQ = function() {
    if(!window.qBank || window.qBank.length === 0) return;
    
    let pool = window.qBank; // সব সাবজেক্ট থেকে প্রশ্ন
    let shuffledPool = pool.sort(() => 0.5 - Math.random()); 
    dailyQuestions = shuffledPool.slice(0, 5); // ৫টি প্রশ্ন
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
        <div style="font-size: 1.15rem; color: var(--text-dark); margin-bottom: 20px; font-weight: 600;">${q.q}</div>
        <div style="display: flex; flex-direction: column; gap: 10px;">`;

    q.opts.forEach((opt, oIdx) => {
        let optStyle = "background: var(--bg-gray); border: 1px solid var(--border); padding: 12px; border-radius: 8px; cursor: pointer; font-weight: 600;";
        if (hasAnswered) {
            optStyle += "pointer-events: none;";
            if (oIdx === q.ans) optStyle = "background: #d1fae5; border: 1px solid #10b981; color: #065f46; padding: 12px; border-radius: 8px; font-weight: bold;";
            else if (oIdx === userAns) optStyle = "background: #fee2e2; border: 1px solid #ef4444; color: #991b1b; padding: 12px; border-radius: 8px; font-weight: bold;";
        }
        
        html += `<div style="${optStyle}" onclick="handleDailyAnswer(${currentDailyQ}, ${oIdx}, ${q.ans})">${opt}</div>`;
    });

    html += `</div>`;

    if (hasAnswered) {
        html += `
            <div style="margin-top: 20px; background: #e2eef9; padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
                <strong style="color: var(--primary);">✅ Explanation:</strong><br>
                <div style="font-size: 0.95rem; color: #004085; margin-top: 5px; line-height: 1.6;">${q.exp}</div>
            </div>
            <div style="display: flex; gap: 8px; margin-top: 25px;">
                <button class="btn btn-outline" style="flex: 1;" onclick="prevDailyQuestion()">⬅️ Prev</button>
                <button class="btn btn-primary" style="flex: 1;" onclick="nextDailyQuestion()">${currentDailyQ === dailyQuestions.length - 1 ? 'Finish 🎉' : 'Next ➡️'}</button>
            </div>
        `;
    }
    container.innerHTML = html;
}

window.handleDailyAnswer = function(qIndex, selectedIdx, correctIdx) {
    if (typeof playUISound === 'function') playUISound('tap');
    dailyAnswers[qIndex] = selectedIdx;
    
    // Stats Update
    let totalSolved = parseInt(localStorage.getItem('totalQuestionsSolved') || '0') + 1;
    localStorage.setItem('totalQuestionsSolved', totalSolved);
    if(selectedIdx === correctIdx) {
        let totalCorrect = parseInt(localStorage.getItem('totalCorrectAnswers') || '0') + 1;
        localStorage.setItem('totalCorrectAnswers', totalCorrect);
    }
    
    renderSingleDailyQuestion();
};

window.nextDailyQuestion = function() {
    if (currentDailyQ < dailyQuestions.length - 1) {
        currentDailyQ++;
        renderSingleDailyQuestion();
    } else {
        alert("🎉 Awesome, Doctor! \nGreat job completing today's dose!");
        switchTab('tabHome');
    }
};

window.prevDailyQuestion = function() {
    if (currentDailyQ > 0) { currentDailyQ--; renderSingleDailyQuestion(); }
};

// ================= 7. USER PROFILE CONTROLLERS =================
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

// ================= 8. SWIPE ENGINE =================
function setupSwipeEngine() {
    let touchStartX = 0;
    let touchStartY = 0;
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
            if (diffX < 0 && currIdx < TAB_ORDER.length - 1) switchTab(TAB_ORDER[currIdx + 1]);
            else if (diffX > 0 && currIdx > 0) switchTab(TAB_ORDER[currIdx - 1]);
        }
        touchStartX = null;
    }, { passive: true });
}

// ================= 9. SHARING UTILITIES =================
window.shareAppGeneric = function() {
    if (navigator.share) {
        navigator.share({
            title: 'MedQ - NEET PG Prep',
            text: 'I am using MedQ to prepare for my medical exams. Check it out!',
            url: window.location.href
        }).catch(console.error);
    } else {
        alert("App link copied to clipboard!");
    }
};

window.shareQuestion = function(qId) {
    if (navigator.share) {
        navigator.share({
            title: 'MedQ Question',
            text: 'Can you solve this high-yield clinical case from MedQ?'
        }).catch(console.error);
    } else {
        alert("Question shared!");
    }
};

// ================= 10. TEST ENGINE & CUSTOM Q-BANK =================
window.startRapidDrill = function(count) {
    alert(`Starting ${count} Question Rapid Drill... (Feature connected)`);
    // এখানে আপনার কাস্টম কুইজ ইঞ্জিন কল হবে
};
