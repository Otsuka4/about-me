// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.drawer-toggle');
    const closeButton = document.querySelector('.drawer-close');
    const drawerMenu = document.querySelector('.drawer-menu');


    function openMenu() {
        drawerMenu.classList.add('open');
    }


    function closeMenu() {
        drawerMenu.classList.remove('open');
    }


    toggleButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);


    // ドロワーメニュー外をクリックしてメニューを閉じる機能も追加できます（オプション）
    document.addEventListener('click', function(event) {
        if (!drawerMenu.contains(event.target) && !toggleButton.contains(event.target)) {
            closeMenu();
        }
    });
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides(); // Initial call

