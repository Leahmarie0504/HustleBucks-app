import { auth } from './firebase-init.js';
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

function updateVisibility(user) {
  document.querySelectorAll(".auth-only").forEach(el =>
    el.style.display = user ? "inline-block" : "none"
  );
  document.querySelectorAll(".guest-only").forEach(el =>
    el.style.display = user ? "none" : "inline-block"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  // First try immediately with current user
  updateVisibility(auth.currentUser);

  // Then listen for real-time changes
  onAuthStateChanged(auth, (user) => {
    console.log("Auth check:", user);
    updateVisibility(user);

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
          alert("Logged out!");
          window.location.href = "index.html";
        });
      });
    }
  });
});