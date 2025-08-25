
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  if (window.netlifyIdentity) {
    const setState = (user) => {
      const loggedIn = !!user;
      if (loginBtn) loginBtn.style.display = loggedIn ? "none" : "inline-block";
      if (logoutBtn) logoutBtn.style.display = loggedIn ? "inline-block" : "none";
    };
    netlifyIdentity.on("init", setState);
    netlifyIdentity.on("login", user => { setState(user); window.location.href="/members/"; });
    netlifyIdentity.on("logout", () => { setState(null); window.location.href="/"; });
    if (logoutBtn) logoutBtn.addEventListener("click", () => netlifyIdentity.logout());
  }
});
