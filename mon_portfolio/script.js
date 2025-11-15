document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const message = document.getElementById("message").value.trim();

    if(nom === "" || prenom === "" || message === ""){
        alert("Veuillez remplir tous les champs !");
    }else{
        alert("Message envoyé avec succès !");
        this.reset();
    }
});
