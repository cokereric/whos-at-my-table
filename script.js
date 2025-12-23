const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.hidden = isOpen;
  });

  // Close on link click
  mobileNav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  });
}

// Fake subscribe confirmation (replace with real provider later)
const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById("email");
const subscribeMsg = document.getElementById("subscribeMsg");

if (subscribeBtn && emailInput && subscribeMsg) {
  subscribeBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    if (!email || !email.includes("@")) {
      subscribeMsg.textContent = "Enter a valid email to subscribe.";
      return;
    }
    subscribeMsg.textContent = "You’re in. Pull up a chair — updates coming soon.";
    emailInput.value = "";
  });
}
