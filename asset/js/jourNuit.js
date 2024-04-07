const toggleSwitch = document.querySelector('#theme-checkbox');

const imageElements = {
    'image1': document.querySelector('#img_user'),
    'image2': document.querySelector('#img_formation'),
    'image3': document.querySelector('#img_passion')
};

function switchTheme(darkMode) {
    if (darkMode === 'enabled') {
        document.body.classList.remove('light-mode');
        if (imageElements['image1']) imageElements['image1'].src = 'asset/images/user_white.png';
        if (imageElements['image2']) imageElements['image2'].src = 'asset/images/formation_white.png';
        if (imageElements['image3']) imageElements['image3'].src = 'asset/images/passion_white.png';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.add('light-mode');
        if (imageElements['image1']) imageElements['image1'].src = 'asset/images/user.png';
        if (imageElements['image2']) imageElements['image2'].src = 'asset/images/formation.png';
        if (imageElements['image3']) imageElements['image3'].src = 'asset/images/passion.png';
        localStorage.setItem('darkMode', 'disabled');
    }
}

function updateTheme() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        toggleSwitch.checked = true;
    } else {
        toggleSwitch.checked = false;
    }
    switchTheme(darkMode);
}

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        switchTheme('enabled');
    } else {
        switchTheme('disabled');
    }
});

window.onload = function() {
    updateTheme();
};

// Écouter l'événement storage pour détecter les modifications dans le stockage local
window.addEventListener('storage', function(event) {
    if (event.key === 'darkMode') {
        updateTheme();
    }
});
