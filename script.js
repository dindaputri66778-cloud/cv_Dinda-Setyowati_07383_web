console.log("JavaScript berhasil terhubung!");

const pesan = document.querySelector('#pesan-interaktif');
const tombol = document.querySelector('#tombol-interaktif');

tombol.addEventListener('click', function() {
    pesan.textContent = 'Halo! Terima kasih sudah mengunjungi profil saya.';
});

const tombolTema = document.querySelector('#tombol-tema');

tombolTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        tombolTema.textContent = 'Mode Terang';
    } else {
        tombolTema.textContent = 'Mode Gelap';
    }
});

