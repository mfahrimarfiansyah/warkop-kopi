// Mengambil elemen navbar-nav dari dokumen
const navbarNav = document.querySelector('.navbar-nav');

// Klik pada hamburger menu untuk toggle kelas 'active'
document.querySelector('#hamburger-menu').onclick = () => {       
    navbarNav.classList.toggle('active');
};

// Menambahkan event listener untuk setiap kali dokumen diklik
document.addEventListener('click', function(e) {
    // Memeriksa apakah yang diklik bukan bagian dari hamburger menu dan bukan bagian dari navbarNav
    if (!document.querySelector('#hamburger-menu').contains(e.target) && !navbarNav.contains(e.target)) {
        // Jika tidak, maka menghapus kelas 'active' dari navbarNav
        navbarNav.classList.remove('active');
    }
});

