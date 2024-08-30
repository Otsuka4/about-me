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




