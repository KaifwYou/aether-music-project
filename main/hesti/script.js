// 1. FUNCTION (Fungsi Utama yang dijalankan saat halaman web selesai dimuat)
window.onload = function() {
    tampilkanNama();
    setupFiturKlik();
};

// Fungsi untuk mendeteksi waktu dan memberikan perkondisian
function tampilkanNama() {
    // Mengambil data jam saat ini dari laptop/HP pengunjung
    const jam = new Date().getHours();
    let teksNama= "";

    // 2. PERKONDISIAN (Conditional: if, else if, else)
    if (jam >= 5 && jam < 11) {
        teksNama = "My Portofolio";
    } else if (jam >= 11 && jam < 15) {
        teksNama = "My Portofolio";
    } else if (jam >= 15 && jam < 18) {
        teksNama = "My Portofolio";
    } else {
        teksNama = "My Portofolio";
    }

    // Menampilkan hasil perkondisian ke elemen HTML dengan id="nama"
    document.getElementById("sapaan").innerText = teksNama;
}

// Fungsi yang berisi Looping ketika tombol diklik
function setupFiturKlik() {
    const tombol = document.getElementById("btn-portfolio");

    tombol.addEventListener("click", function() {
        // Anggap saja kita punya daftar nama tipe project di galeri
        const kategoriProject = ["HTML Dasar", "CSS Styling", "Web Portofolio"];
        
        console.log("--- Memuat Daftar Project Winda ---");
        
        // 3. LOOPING (Perulangan: for loop)
        // Menampilkan isi array ke dalam console browser sebagai log data
        for (let i = 0; i < kategoriProject.length; i++) {
            let nomor = i + 1;
            console.log("Project ke-" + nomor + " adalah: " + kategoriProject[i]);
        }
        
        alert("Kamu akan diarahkan ke Galeri Project Winda! ✨");
    });
}