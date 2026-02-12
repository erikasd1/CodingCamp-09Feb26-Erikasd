window.onload = function() {
    let name = prompt("Your name, please:");
    if (!name) name = "Guest";

    let hour = new Date().getHours();
    let greeting = (hour < 12) ? "Good Morning" : (hour < 17) ? "Good Afternoon" : (hour < 21) ? "Good Evening" : "Good Night";

    const nameDisplays = document.querySelectorAll(".user-name-display");
    if (nameDisplays.length >= 2) {
        nameDisplays[0].innerText = greeting + ", " + name;
        nameDisplays[1].innerText = name;
    }
};


document.getElementById("contactForm").addEventListener("submit", function(event) {
    if (!this.checkValidity()) {
        return; 
    }

    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const dob = document.getElementById("dobInput").value;
    const phone = document.getElementById("phoneInput").value;
    const message = document.getElementById("messageTextInput").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const currentTime = new Date();

    document.getElementById("result").innerHTML = `
        <div style="padding: 10px; border-left: 4px solid #f4b400;">
            <p><strong>Current time :</strong> ${currentTime.toLocaleString()}</p>
            <hr style="margin: 10px 0;">
            <p><strong>Name :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Date of Birth :</strong> ${dob}</p>
            <p><strong>Phone :</strong> ${phone}</p>
            <p><strong>Gender :</strong> ${gender}</p>
            <p><strong>Message :</strong> ${message}</p>
        </div>
    `;

    alert("Your message has been sent!");
});


const darkModeToggle = document.getElementById('darkModeToggle');
const themeIcon = document.getElementById('theme-icon');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeIcon.innerText = document.body.classList.contains('dark-theme') ? '☀' : '☾';
});


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});