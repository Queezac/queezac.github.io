const textElement = document.getElementById('textanimation');
    const text = "Étudiante en BUT informatique";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Répète l'opération toutes les 100 millisecondes
        }
    }

    typeWriter();