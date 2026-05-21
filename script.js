// Pastikan script jalan setelah HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    console.log("PSDM Unggul script loaded!");

    // Fitur 1: Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if(menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active'); // Kamu bisa tambahkan CSS .nav-links.active di style.css
            alert("Menu Mobile akan terbuka! (Tambahkan CSS untuk animasi)");
        });
    }

    // Fitur 2: Menutup Modal saat klik di luar kotak
    const overlay = document.getElementById('modalOverlay');
    overlay.addEventListener('click', function(e) {
        if(e.target === overlay) {
            closeDetail();
        }
    });
});

// Fitur 3: Fungsi Modal Detail (Dipanggil dari HTML)
function showDetail(title, description) {
    const overlay = document.getElementById('modalOverlay');
    const mTitle = document.getElementById('modalTitle');
    const mDesc = document.getElementById('modalDesc');

    mTitle.innerText = title;
    mDesc.innerText = description;
    overlay.style.display = 'flex';
}

function closeDetail() {
    document.getElementById('modalOverlay').style.display = 'none';
}

// Fitur 4: Navbar transparan menjadi solid saat scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.padding = '10px 0';
        nav.style.background = '#ffffff';
    } else {
        nav.style.padding = '15px 0';
    }
});
