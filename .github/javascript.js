function toggleMenu() {
    const menu = document.querySelector(".menu-div");
    const btn = document.querySelector(".menu-btn");

    // Only work on mobile and tablet
    if (window.innerWidth > 834) return;

    if (menu.style.display === "block") {
        menu.style.display = "none";
        btn.innerHTML = "&#9776;";
    } else {
        menu.style.display = "block";
        btn.innerHTML = "&times;";
    }
}

// Close menu only on mobile/tablet
const menuLinks = document.querySelectorAll(".menu-div a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {

        if (window.innerWidth <= 834) {
            const menu = document.querySelector(".menu-div");
            const btn = document.querySelector(".menu-btn");

            menu.style.display = "none";
            btn.innerHTML = "&#9776;";
        }

    });
});

// Keep desktop menu visible when resizing
window.addEventListener("resize", () => {
    const menu = document.querySelector(".menu-div");
    const btn = document.querySelector(".menu-btn");

    if (window.innerWidth > 834) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
        btn.innerHTML = "&#9776;";
    }
});

// Scroll-to-top button
const scrolltopbtn = document.getElementById("scrolltopbtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
        scrolltopbtn.style.display = "block";
    } else {
        scrolltopbtn.style.display = "none";
    }
});

scrolltopbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Hire Me button
document.getElementById("hireBtn").addEventListener("click", () => {
    Swal.fire({
        title: "👋 Welcome!",
        html: `
            <h3 style="margin-bottom:10px;">
                Thank you for visiting my portfolio
            </h3>
            <p>
                I am available for freelance projects, web development,
                UI/UX design, and creative solutions.
            </p>
            <p>
                Feel free to contact me and let's build something amazing together.
            </p>
        `,
        icon: "success",
        confirmButtonText: "Contact Me",
        showCancelButton: true,
        cancelButtonText: "Close",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#a40af1",
        cancelButtonColor: "#444",
        backdrop: "rgba(0,0,0,0.8)"
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Contact form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    Swal.fire({
        title: "Thank You!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "OK"
    });

    form.reset();
});