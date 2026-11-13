// js/firebase-setup.js
const firebaseConfig = {
    apiKey: "AIzaSyC_a4lWu2TZRa2vc8m2Hy2g8Ww4fV5twA8",
    authDomain: "medq-daily.firebaseapp.com",
    projectId: "medq-daily",
    storageBucket: "medq-daily.firebasestorage.app",
    messagingSenderId: "23847093259",
    appId: "1:23847093259:web:53bfa37687dc69b936330e",
    measurementId: "G-RT29DSDRMQ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function loginWithGoogle() {
    if (typeof playUISound === 'function') playUISound('tap');
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(function(result) {
            const user = result.user;
            alert(`Welcome, ${user.displayName}! Successfully logged in.`);
            localStorage.setItem('spUserName', user.displayName);
            localStorage.setItem('spUserAvatar', user.photoURL);
            localStorage.setItem('userEmail', user.email);
            if (typeof closeSPModal === 'function') closeSPModal();
            if (typeof calculateAndUpdateStats === 'function') calculateAndUpdateStats();
            syncDataToCloud(user.uid);
        })
        .catch(function(error) {
            console.error("Login Error: ", error.message);
            alert("Google Login Failed: " + error.message);
        });
}

function syncDataToCloud(userId) {
    let userData = {
        name: localStorage.getItem('spUserName'),
        avatar: localStorage.getItem('spUserAvatar'),
        totalSolved: localStorage.getItem('totalQuestionsSolved') || 0,
        totalCorrect: localStorage.getItem('totalCorrectAnswers') || 0,
        favorites: JSON.parse(localStorage.getItem('medqFavorites')) || [],
        streak: localStorage.getItem('currentStreak') || 0,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection("users").doc(userId).set(userData, { merge: true })
        .then(function() { console.log("Data successfully synced to cloud!"); })
        .catch(function(error) { console.error("Error syncing data: ", error); });
}
