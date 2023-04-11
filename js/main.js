AOS.init();
const more = document.getElementById('more-information');
const textAktif = document.getElementById('aktifkan-text');
const textAktif2 = document.getElementById('aktifkan-text2');
const more2 = document.getElementById('more-information2');
const weldone = document.getElementById('weldone'); // informasi penting dari anime tsb
const lagilagi = document.getElementById('lagilagi'); //tombol di gambar anime saat di tekan
const weloff = document.getElementById('weloff'); // gambar anime
const weldone2 = document.getElementById('weldone2'); // informasi penting dari anime tsb
const lagilagi2 = document.getElementById('lagilagi2'); //tombol di gambar anime saat di tekan
const weloff2 = document.getElementById('weloff2'); // gambar anime
const weldone3 = document.getElementById('weldone3'); // informasi penting dari anime tsb
const lagilagi3 = document.getElementById('lagilagi3'); //tombol di gambar anime saat di tekan
const weloff3 = document.getElementById('weloff3'); // gambar anime
const back = document.getElementById('back');
const back2 = document.getElementById('back2');
const back3 = document.getElementById('back3');

more.addEventListener('click', function () {
  if (textAktif.style.display === 'none') {
    // ini berpengaruh
    textAktif.style.display = 'block';
    more.textContent = 'Less Information'; //saat sudah di pencet
  } else {
    textAktif.style.display = 'none';
    more.textContent = 'More Information'; // saat belum di pencet
  }
});

textAktif2.style.display = 'none';
more2.addEventListener('click', function () {
  if (textAktif2.style.display === 'none') {
    textAktif2.style.display = 'block';
    more2.textContent = 'Less Information';
  } else {
    textAktif2.style.display = 'none';
    more2.textContent = 'More Information';
  }
});

// tombol khusus back di gambar dll

// gambar 1
lagilagi.addEventListener('click', function () {
  weldone.style.display = 'block';
  weloff.style.display = 'none';
});

back.addEventListener('click', function () {
  weldone.style.display = 'none';
  weloff.style.display = 'block';
});

// gambar 2

lagilagi2.addEventListener('click', function () {
  weldone2.style.display = 'block';
  weloff2.style.display = 'none';
});

back2.addEventListener('click', function () {
  weldone2.style.display = 'none';
  weloff2.style.display = 'block';
});

// gambar 3

lagilagi3.addEventListener('click', function () {
  weldone3.style.display = 'block';
  weloff3.style.display = 'none';
});

back3.addEventListener('click', function () {
  weldone3.style.display = 'none';
  weloff3.style.display = 'block';
});



// Ambil elemen tombol nav link
var navLinks = document.querySelectorAll('.nav-link');

// Loop melalui setiap tombol nav link
for (var i = 0; i < navLinks.length; i++) {
  // Tambahkan event listener untuk saat tombol nav link ditekan
  navLinks[i].addEventListener('click', function (event) {
    // Hapus kelas "active" dari tombol nav link yang lain
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
    }
    // Tambahkan kelas "active" pada tombol nav link yang sedang ditekan
    this.classList.add('active');
  });
}


