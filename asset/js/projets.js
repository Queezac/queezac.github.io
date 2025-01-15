// Sélectionner tous les projets
const projects = document.querySelectorAll('.projet');

// Sélectionner les éléments de la modale
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalDynamicContent');
const closeModal = document.querySelector('.close');

// Contenu de la modale pour chaque projet
const projectDetails = {
  loquali: `
    <div id="loquali">
    <div id="explications">
        <p style="margin:1em 0;">LoQuali est un projet que j'ai réalisé <br> lors de ma deuxième année d'IUT informatique. </p>
        <p>Ce projet universitaire m'a beaucoup appris!
          Ma mission ? Créer une plateforme bretonne de location de logements qui ferait rougir AirBnB de jalousie!
        </p>
        <p style="margin:1em 0;">À partir des besoins exprimés par les clients, 
          j'ai <strong>collaboré</strong> avec mon équipe pour définir les fonctionnalités principales et m'assurer que tous les aspects du projet répondaient aux attentes. 
          Nous avons également <strong>géré</strong> la mise en place technique, en particulier la structure de la base de données et l'intégration des différentes fonctionnalités.
          J'ai par la suite réalisé le design du site web en ayant une liberté totale sur celui-ci.
          J'ai donc concocté une maquette du site, adaptée aussi bien pour les ordinateurs que les téléphones. 
          Vous pouvez accéder à cette dernière grâce au lien ci-dessous, le site a été reproduit à l'identique, cela peut vous donner une idée de ce qui a été <strong>réalisé</strong>.
        </p>
        <a href="https://www.figma.com/design/ITrB2JF8VoyhBwecxf8kIc/SAE?node-id=0-1&t=Co0FMmn6TYYJYBfF-1" target="_blank">Cliquez ici pour acceder à la maquette</a>
        <img src="asset/images/projet1/figma.png" alt="" id="img1" style="width:80%; margin:1em 0;">
        <p>Ce projet a été mené en utilisant la méthode <strong>Agile</strong> avec <strong>Scrum</strong>, organisé en sprints pour assurer une progression régulière</p>
        <p>Évidemment, comme c'est un projet scolaire, j'ai dû remplir le site avec un jeu de données fictif.</p>
      </div>
      <img src="asset/images/projet1/site.png" alt="" id="img2" style="width:80%; margin:1em 0;">
      
    </div>
  `,
  creations: `
    <h2>Créations personnelles</h2>
    <p>Dessins - Designs</p>
  `
};

// Ajouter un événement pour chaque projet
projects.forEach(project => {
  project.addEventListener('click', () => {
    // Récupérer l'identifiant du projet
    const projectId = project.querySelector('h2').textContent.toLowerCase().replace(/\s+/g, '');

    // Insérer le contenu spécifique à ce projet
    modalContent.innerHTML = 
    projectDetails[projectId] || 
    " <div style='margin:1em 0;'> " +
      "<p>Depuis Avril 2024, je travaille en alternance chez <a href='https://www.simicar.fr'  target='_blank'> Simicar,</a> </p>"+
      "<p style='margin-bottom:1em;'>une entreprise spécialisée dans les solutions ERP, plus précisement <a href='https://www.dolibarr.org'  target='_blank'>Dolibarr</a>.</p>" +
      "Mon rôle principal est de développer et personnaliser des modules sur Dolibarr pour répondre aux besoins spécifiques des différents clients.</p>" +
      "<p style='margin:1em 0;'>Ce que j’ai réalisé :</p>" +
          "<p><strong>Un ERP adapté aux tablettes :</strong> J’ai développé des modules pour que les intervenants puissent tout gérer directement depuis une tablette, sans avoir besoin d’un PC.</p>" +
          "<img src='asset/images/projet2/dolibarrInterfaceTab.png' style='height:450px; margin:1em 0;'>" +
          "<p><strong>Des formulaires intelligents :</strong> J’ai mis en place des champs qui s’autocomplètent avec les infos connues sur les clients. C’est super pratique et ça fait gagner du temps.</p>" +
          "<p style='margin-top:1em;'><strong>Un système de gestion des bons de livraison :</strong> Les intervenants peuvent scanner ou ajouter manuellement des produits à une liste pour valider les bons de livraison directement sur place.</p>" +
          "<img src='asset/images/projet2/bonLivraisonInterface.png' style='width:85%; margin:1em 0;'>" +
          "<p><strong>Des retours clients pour améliorer les modules :</strong> Je suis allée plusieurs fois sur le terrain pour discuter avec nos clients et ajuster mes développements en fonction de leurs retours.</p>" +
      "<p style='margin-top:1em;'>Cette expérience m’a permis de <strong>conduire</strong> des projets complexes, <strong>optimiser</strong> les outils pour une meilleure efficacité et <strong>administrer</strong> les retours clients de manière proactive." +
      "C’est vraiment motivant de voir que mes projets simplifient le quotidien des intervenants !</p>" +
    " </div>";

// Afficher la modale
modal.style.display = 'block';

  });
});

// Fermer la modale lorsque l'utilisateur clique sur la croix
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fermer la modale en cliquant à l'extérieur du contenu
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
