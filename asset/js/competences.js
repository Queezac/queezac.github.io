// Gestionnaire d'événements de clic pour le conteneur principal
document.addEventListener("click", function(event) {
    var target = event.target;

    // Si l'image de la flèche originale est cliquée
    if (target.matches(".arrow img")) {
        var compElement = document.getElementById("competences");
        compElement.innerHTML = `
        <div id="compbis">
            <div id="outils">
                <div id="langage-back">
                    <p>LANGAGES</p>
                </div>
                <div id="outil">
                    <div class="petitsepare">
                        <h2>Logiciel de gestion</h2>
                        <p>J'utilise <span>SQLWorkbench</span> pour gérer efficacement les bases de données ainsi que <span>Git</span> pour partager mon code avec mon équipe de travail.</p>
                    </div>
                    <div class="petitsepare">
                        <h2>Editeur de code</h2>
                        <p>Je travaille régulièrement avec <span>Visual Studio Code</span>, ainsi qu'avec <span>Eclipse</span> pour des projets Java plus complexes.</p>
                    </div>
                    <div class="petitsepare">
                        <h2>Editeur graphique</h2>
                        <p>Je suis aussi compétente dans l'utilisation de <span>Figma</span> et d'<span>Adobe XD</span> pour la création de prototypes interactifs et la conception de maquettes graphiques.</p>
                    </div>
                </div>
                <div class="arrowbis" id="arrowbis"><img src="asset/images/flechegauche.png" alt=""></div>
            </div>
            <div id="elem10bis"></div>
            <div id="elem11bis"></div>
            <div id="elem12bis"></div>
            <div id="elem13bis"></div>
            <div id="elem14bis"><p>OUTILS</p></div>
        </div>
        `;
    }

    // Si l'image de la flèche alternative est cliquée
    if (target.matches(".arrowbis img")) {
        var compElement = document.getElementById("competences");
        compElement.innerHTML = `
        <div id="comp">
            <div id="langages">
                <div id="outils-back">
                    <p>OUTILS</p>
                </div>
                <div id="lang">
                    <div class="petitsepare">
                        <h2>Programmation web</h2>
                        <p>Je maîtrise les langages <span>HTML/CSS</span>, <span>PHP</span>, <span>JavaScript</span> pour la création de sites web responsives et dynamiques.</p>
                    </div>
                    <div class="petitsepare">
                        <h2>Langages d'applications</h2>
                        <p>Je possède également, des compétences en développement de logiciels grâce à ma petite maîtrise des langages <span>C</span> et <span>Java</span>.</p>
                    </div>
                    <div class="petitsepare">
                        <h2>Base de données</h2>
                        <p>Je suis aussi en mesure de concevoir et de gérer des bases de données relationnelles grâce au <span>SQL</span>.</p>
                    </div>
                </div>
                <div class="arrow" id="arrow"><img src="asset/images/flechedroite.png" alt=""></div>
            </div>
            <div id="elem10"></div>
            <div id="elem11"></div>
            <div id="elem12"></div>
            <div id="elem13"></div>
            <div id="elem14"><p>LANGAGES</p></div>
        </div>
        `;
    }
});
