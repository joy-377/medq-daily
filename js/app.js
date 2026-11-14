// ============================================================================
// 🌟 MEDQ - FULL APPLICATION LOGIC (WITH OUTSIDE CLICK & CUSTOM Q-BANK)
// ============================================================================

// 🗂️ ১. গ্লোবাল ভেরিয়েবল (ট্যাব এবং টেস্টের তথ্য ধরে রাখার জন্য)
var TAB_ORDER = ['tabDaily', 'tabTests', 'tabHome', 'tabCustom', 'tabInsights'];
var currentActiveTab = localStorage.getItem('medqActiveTab') || 'tabHome';

let activeTestState = { questions: [], currentQ: 0, answers: [], timer: null, visited: {}, flags: {}, testName: '' };
let dailyQuestions = [];
let currentDailyQ = 0;
let dailyAnswers = [];

// 🖱️ ২. বাইরে ক্লিক করলে মডাল ও সাইডবার বন্ধ হওয়ার লজিক (Outside Click Close)
window.addEventListener('click', function(event) {
    // যেসব মডালের বাইরে ক্লিক করলে বন্ধ হবে তাদের আইডি লিস্ট
    const modals = [
        'spProfileModal', 'yearSetupModal', 'signInWarningModal', 'weakSubjectModal', 
        'milestoneModal', 'dailyReminderModal', 'notesSrsModal', 'favoritesModal', 
        'legalModal', 'allBadgesModal'
    ];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        // যদি ক্লিক করা অংশটি ঠিক মডালের ব্যাকগ্রাউন্ড (কালো অংশ) হয়, তবে মডালটি লুকিয়ে ফেলো
        if (modal && event.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // সাইডবারের বাইরের কালো ওভারলে-তে ক্লিক করলে সাইডবার বন্ধ হবে
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (event.target === sidebarOverlay) {
        toggleSidebar();
    }
});

// 🚀 ৩. অ্যাপ চালু হওয়ার ইনিশিয়ালাইজেশন
document.addEventListener('DOMContentLoaded', function() {
    // পেজ লোড হলে হোম ট্যাব দেখাবে
    switchTab(currentActiveTab);
    loadUserProfile();
    setupSwipeEngine();
});

// 📱 ৪. ট্যাব সুইচিং ইঞ্জিন (এক পেজ থেকে অন্য পেজে যাওয়ার জন্য)
window.switchTab = function(tabId, navElement) {
    // সব মডাল ও স্ক্রিন বন্ধ করো
    hideAllActiveScreens();
    currentActiveTab = tabId;
    localStorage.setItem('medqActiveTab', tabId);

    // সব ট্যাব কনটেন্ট লুকিয়ে দাও
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    
    // শুধু যেটায় ক্লিক হয়েছে সেটা দেখাও
    let targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.remove('hidden');

    // নিচের নেভিগেশন বারের কালার আপডেট
    document.querySelectorAll('#bottomNav .nav-item, #bottomNav .nav-home-wrapper').forEach(nav => nav.classList.remove('active'));
    let matchingNav = navElement || document.getElementById('navBtn_' + tabId);
    if (matchingNav) matchingNav.classList.add('active');

    // ট্যাবের ভেতরের ডেটা লোড করো
    if (tabId === 'tabHome') renderHomeDashboard();
    if (tabId === 'tabInsights') renderInsightsHub();
    if (tabId === 'tabDaily') loadTodayMCQ();

    // পেজ একদম ওপরে নিয়ে যাও
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function hideAllActiveScreens() {
    // যেকোনো চলমান পরীক্ষা পজ করা
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
            // ডিসপ্লে none করে দেওয়া হচ্ছে যাতে ব্যাকগ্রাউন্ডে জায়গা না নেয়
            el.style.display = (id === 'instructionScreen' || id === 'reviewScreen' || id === 'loadingScreen') ? 'none' : '';
        }
    });
}

// ☰ ৫. সাইডবার খোলার ও বন্ধ করার ফাংশন
window.toggleSidebar = function() {
    if(typeof playUISound === 'function') playUISound('tap');
    const sidebar = document.getElementById('mainSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
        overlay.classList.remove('active');
    } else {
        sidebar.style.left = '0px';
        overlay.classList.add('active');
        
        // সাইডবারে ইউজারের নাম আপডেট
        document.getElementById('sidebarDoctorName').innerText = localStorage.getItem('spUserName') || 'Dr. Medical Student';
    }
};

// 👤 ৬. প্রোফাইল ও লিগ্যাল মডাল কন্ট্রোলার
window.openSPModal = function() {
    if(typeof playUISound === 'function') playUISound('tap');
    document.getElementById('spProfileModal').classList.remove('hidden');
    loadUserProfile();
};

window.closeSPModal = function() {
    if(typeof playUISound === 'function') playUISound('tap');
    document.getElementById('spProfileModal').classList.add('hidden');
};

function loadUserProfile() {
    let name = localStorage.getItem('spUserName');
    if(name) {
        document.getElementById('spUserName').value = name;
        document.getElementById('homeUserName').innerText = name;
        document.getElementById('navUserBadge').innerText = name.charAt(0).toUpperCase();
        document.getElementById('spUserInitials').innerText = name.charAt(0).toUpperCase();
    }
}

// 📝 ৭. কাস্টম কুইজ ব্যাংক স্টুডিও (Custom Q-Bank Logic)
// ইউজার ডিফিকাল্টি ও সংখ্যা সিলেক্ট করলে এই ভেরিয়েবলগুলো আপডেট হবে
let selectedCustomDifficulty = 'Moderate';
let selectedCustomCount = 20;

window.selectCustomDifficulty = function(level, btn) {
    if(typeof playUISound === 'function') playUISound('tap');
    selectedCustomDifficulty = level;
    // আগের সিলেকশন মুছুন
    document.querySelectorAll('.custom-diff-btn').forEach(el => {
        el.classList.remove('btn-primary');
        el.classList.add('btn-outline');
    });
    // নতুন সিলেকশন হাইলাইট করুন
    btn.classList.remove('btn-outline');
    btn.classList.add('btn-primary');
};

window.selectCustomCount = function(count, btn) {
    if(typeof playUISound === 'function') playUISound('tap');
    selectedCustomCount = count;
    document.querySelectorAll('.custom-count-btn').forEach(el => {
        el.classList.remove('btn-primary');
        el.classList.add('btn-outline');
    });
    btn.classList.remove('btn-outline');
    btn.classList.add('btn-primary');
};

// 'Generate Custom Test' বাটনে ক্লিক করলে টেস্ট শুরু হবে
if(document.getElementById('btnGenerateCustom')) {
    document.getElementById('btnGenerateCustom').onclick = function() {
        if(typeof playUISound === 'function') playUISound('btn');
        
        // যদি ডাটাবেস ফাঁকা থাকে
        if (!window.qBank || window.qBank.length === 0) {
            alert("Questions are loading. Please wait a moment.");
            return;
        }

        // প্যাটার্ন ও PYQ চেক
        const pattern = document.getElementById('customExamPattern').value;
        const includePYQ = document.getElementById('includePYQ').checked;

        // প্রশ্ন ফিল্টার করা (যেহেতু এখানে সাবজেক্ট চেকবক্স ডাইনামিক, আমরা আপাতত ডিফিকাল্টি দিয়ে ফিল্টার করছি)
        let customPool = window.qBank.filter(q => {
            let matchLevel = q.level === selectedCustomDifficulty;
            let matchPYQ = includePYQ ? (q.isPYQ || q.tags?.includes('PYQ')) : true;
            return matchLevel && matchPYQ;
        });

        // যদি পর্যাপ্ত প্রশ্ন না থাকে
        if (customPool.length === 0) {
            alert("No questions found for this combination! Trying with all questions.");
            customPool = window.qBank;
        }

        // প্রশ্নগুলোকে রেন্ডমাইজ (Shuffling) করা
        customPool = customPool.sort(() => 0.5 - Math.random()).slice(0, selectedCustomCount);

        // ইনস্ট্রাকশন স্ক্রিন পপআপ দেখানো
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

// 🚀 ৮. মূল টেস্ট ইঞ্জিন শুরু করা (Begin Exam)
window.proceedToActualTest = function() {
    if (!window.pendingTestParams) return;
    if(typeof playUISound === 'function') playUISound('btn');
    
    document.getElementById('instructionScreen').style.display = 'none';

    var customPool = window.pendingTestParams.customPool;
    var testName = window.pendingTestParams.testName;

    // টেস্টের স্টেট সেটআপ
    activeTestState = { 
        questions: customPool, 
        answers: new Array(customPool.length).fill(null), 
        currentQ: 0, 
        timer: null, 
        visited: {}, 
        flags: {}, 
        testName: testName 
    };

    document.getElementById('activeTestTitle').innerText = testName;
    document.getElementById('totalQNum').innerText = customPool.length;
    
    // সব ট্যাব বন্ধ করে অ্যাকটিভ টেস্ট স্ক্রিন খোলা
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    const actScreen = document.getElementById('activeTestScreen');
    actScreen.classList.remove('hidden');
    actScreen.style.display = 'flex';
    
    // প্রথম প্রশ্ন রেন্ডার করা
    renderQuestion();
    startTestTimer(customPool.length * 60); // প্রতি প্রশ্নের জন্য ১ মিনিট
};

function renderQuestion() {
    const qIndex = activeTestState.currentQ;
    const qData = activeTestState.questions[qIndex];
    document.getElementById('currentQNum').innerText = qIndex + 1;
    
    // প্রশ্ন টেক্সট
    document.getElementById('questionText').innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
            <div>${qData.q}</div>
        </div>
    `;

    // অপশনগুলো
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

    // Next ও Prev বাটন কন্ট্রোল
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
    if(typeof playUISound === 'function') playUISound('tap');
    activeTestState.answers[activeTestState.currentQ] = index;
    renderQuestion();
};

window.nextQuestion = function() {
    if(typeof playUISound === 'function') playUISound('btn');
    if (activeTestState.currentQ < activeTestState.questions.length - 1) { 
        activeTestState.currentQ++; 
        renderQuestion(); 
    }
};

window.prevQuestion = function() {
    if(typeof playUISound === 'function') playUISound('btn');
    if (activeTestState.currentQ > 0) { 
        activeTestState.currentQ--; 
        renderQuestion(); 
    }
};

// 🏁 ৯. সাবমিট টেস্ট লজিক
window.submitTest = function() {
    if(typeof playUISound === 'function') playUISound('btn');
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

// 🏠 ১০. রেজাল্ট স্ক্রিন থেকে হোমে ফেরা
window.backToHomeFromResults = function() {
    if(typeof playUISound === 'function') playUISound('btn');
    document.getElementById('resultScreen').classList.add('hidden');
    switchTab('tabHome');
};

// 🖐️ ১১. সোয়াইপ ইঞ্জিন (Swipe Left/Right to change tabs)
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
        if (Math.abs(diffX) > 80) { // ৮০ পিক্সেলের বেশি সোয়াইপ করলে ট্যাব পাল্টাবে
            let currIdx = TAB_ORDER.indexOf(currentActiveTab);
            if (diffX < 0 && currIdx < TAB_ORDER.length - 1) switchTab(TAB_ORDER[currIdx + 1]); // Swipe Left
            else if (diffX > 0 && currIdx > 0) switchTab(TAB_ORDER[currIdx - 1]); // Swipe Right
        }
        touchStartX = null;
    }, { passive: true });
}

// ============================================================================
// END OF APP.JS
// ============================================================================
