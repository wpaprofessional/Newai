function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('responsive');
    document.body.classList.toggle('menu-open');
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const vlibra = document.querySelector('.vlibra');

    menu.classList.toggle('responsive');

    if (menu.classList.contains('responsive')) {
        vlibra.style.display = 'none';
    } else {
        vlibra.style.display = 'block';
    }
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const vlibra = document.querySelector('.vlibra');
    
    if (menu.classList.contains('responsive')) {
        menu.classList.add('hide');
        setTimeout(() => {
            menu.classList.remove('responsive', 'hide');
        }, 300); // Tempo do efeito de animação de fechamento
    } else {
        menu.classList.add('responsive');
        vlibra.style.display = 'none';
    }

    if (!menu.classList.contains('responsive')) {
        vlibra.style.display = 'block';
    }
}
