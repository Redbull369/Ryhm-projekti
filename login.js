document.addEventListener("DOMContentLoaded", () => {
    const currentPage = document.body.getAttribute("data-page");

    // Kirjautuminen
    if (currentPage === "login") {
        const loginButton = document.getElementById("login-button");
        const errorMessage = document.getElementById("error-message");

        loginButton.addEventListener("click", () => {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "taitaja2024") {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "intranet.html";
            } else {
                errorMessage.textContent = "Väärä käyttäjätunnus tai salasana!";
            }
        });
    }});