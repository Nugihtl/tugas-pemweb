//soal a1
const btnPesan = document.querySelector('.banner-btn');

btnPesan.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Promo aktif! Ongkir gratis untuk pesanan pertama Anda.');
});

//soala2
const judulBanner = document.querySelector('.banner-text h2');

judulBanner.innerText = '🎉 Promo Spesial Hari Ini!';

//soal a3
const cards = document.querySelectorAll('.restaurant-card');

let total = 0;
for (let i = 0; i < cards.length; i++) {
  total++;
}

console.log('Jumlah restoran: ' + total);

// Soal b1
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
    item.addEventListener('click', function() {
        categoryItems.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

//soal b2
const searchInput = document.querySelector('.search-input');
const restaurantCards = document.querySelectorAll('.restaurant-card');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const keyword = e.target.value.toLowerCase();
        restaurantCards.forEach(card => {
            const namaRestoran = card.querySelector('h3').innerText.toLowerCase();
            if (namaRestoran.includes(keyword)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

//soal b3
const btnKirim = document.getElementById('btn-kirim-ulasan');
const inputNama = document.getElementById('nama-reviewer');
const inputUlasan = document.getElementById('isi-ulasan');
const pesanUlasan = document.getElementById('pesan-ulasan');

if (btnKirim && inputNama && inputUlasan && pesanUlasan) {
    btnKirim.addEventListener('click', function() {
        const nama = inputNama.value.trim();
        const ulasan = inputUlasan.value.trim();

        if (nama === '') {
            pesanUlasan.textContent = 'Nama tidak boleh kosong!';
            pesanUlasan.style.color = '#ef4444';
        } else if (ulasan === '') {
            pesanUlasan.textContent = 'Ulasan tidak boleh kosong!';
            pesanUlasan.style.color = '#ef4444';
        } else if (ulasan.length < 10) {
            pesanUlasan.textContent = 'Ulasan terlalu singkat. Minimal 10 karakter';
            pesanUlasan.style.color = '#f97316';
        } else {
            pesanUlasan.textContent = `Terima kasih, ${nama}! Ulasanmu telah dikirim.`;
            pesanUlasan.style.color = '#22c55e';
            inputNama.value = '';
            inputUlasan.value = '';
        }
    });
}