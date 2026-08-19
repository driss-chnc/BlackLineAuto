const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;


    // Vérification du mot de passe

    if (password !== confirmPassword) {

        alert("Les mots de passe ne correspondent pas.");

        return;
    }


    // Vérification de la longueur

    if (password.length < 8) {

        alert("Le mot de passe doit contenir au moins 8 caractères.");

        return;
    }


    // Vérification de l'email

    if (!email.includes("@")) {

        alert("Veuillez entrer une adresse email valide.");

        return;
    }


    // Pour le moment

    alert(
        `Bienvenue ${firstname} ${lastname} !\n\n` +
        "Votre formulaire est valide."
    );

});