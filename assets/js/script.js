const openBtn = document.getElementById('open-btn');
const bgMusic = document.getElementById('bg-music');
const landingPage = document.getElementById('landing-page');
const mainSlider = document.getElementById('main-slider');

// Ganti GIF ke PNG setelah 5 detik di Page 1
setTimeout(function() {
    landingPage.classList.add('stopped');
}, 5000);

// Logika ketika tombol Open Invitation diklik
openBtn.addEventListener('click', function() {
    // Jalankan musik latar belakang
    bgMusic.play().catch(error => {
        console.log("Musik diblokir otomatis oleh sistem browser:", error);
    });
    
    // Geser slider utama ke kiri sebesar 100vw untuk menampilkan Page 2
    mainSlider.style.transform = 'translateX(-100vw)';
});