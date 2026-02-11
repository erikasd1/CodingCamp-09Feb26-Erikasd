// Poin 4: Greeting Nama menggunakan prompt
window.onload = function() {
    let name = prompt("Masukkan nama Anda untuk menyapa:");
    if (name === null || name === "") {
        name = "Harfi"; // Default seperti di mockup jika kosong
    }
    document.getElementById("username").innerText = name;
};

// Poin 5: Validasi & Tampilkan Nilai Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil data
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;
    const message = document.getElementById("messageTextInput").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const currentTime = new Date();

    // Tampilkan hasil di HTML (Poin 5)
    document.getElementById("result").innerHTML = `
        <p><strong>Current time :</strong> ${currentTime}</p>
        <br>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>No. Telp :</strong> ${phone}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender}</p>
        <p><strong>Pesan :</strong> ${message}</p>
    `;
    
    alert("Formulir berhasil dikirim!");
});