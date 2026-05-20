// Fungsi untuk memunculkan pesan selamat datang
function showAlert(message) {
    alert(message);
}

// Fungsi Modal (Pop-up Detail)
function openModal(title) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-title').innerText = title;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Menutup modal jika user klik di luar kotak modal
window.onclick = function(event) {
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Animasi Scroll Halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
