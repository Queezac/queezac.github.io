function envoyerFormulaire() {
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xkndpgyk", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Votre message a été envoyé avec succès.");
        // Réinitialiser le formulaire si nécessaire
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }
    };
    var data = JSON.stringify({
      nom: nom,
      email: email,
      message: message
    });
    xhr.send(data);
  }