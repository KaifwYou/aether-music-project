const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(
                counter.dataset.target
            );

            let current = 0;

            const increment =
                target / 120;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.floor(current);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                        target;

                }

            };

            updateCounter();

            counterObserver.unobserve(
                counter
            );

        });
    },
    {
        threshold: 0.4
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.dataset.filter;

        portfolioItems.forEach(item => {

            const category =
                item.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {

                item.classList.remove(
                    "hidden"
                );

            } else {

                item.classList.add(
                    "hidden"
                );

            }

        });

    });

});

const teamMembers = [

    {
        name: "Muqiit Khoerulloh",
        role: "Founder & CEO",
        image: "main/images/muqiit.jpg",
        link: "main/muqiit/index.html"
    },

    {
        name: "Winda",
        role: "Lead Producer",
        image: "main/images/winda.jpg",
        link: "main/winda/index.html"
    },

    {
        name: "Hesti Nurhasanah",
        role: "Creative Director",
        image: "main/images/hesti.jpg",
        link: "main/hesti/index.html"
    },

    {
        name: "Rafi",
        role: "Marketing Manager",
        image: "main/images/rafi.jpg",
        link: "main/rafi/index.html"
    }

];

const teamContainer =
    document.getElementById(
        "teamContainer"
    );

teamMembers.forEach(member => {

    const card =
        document.createElement("article");

    card.className =
        "team-card reveal";

    card.innerHTML = `
      <a href="${member.link}">
         <img
            src="${member.image}"
            alt="${member.name}"
            class="team-image"
         >

         <div class="team-content">

            <h3>${member.name}</h3>

            <p>${member.role}</p>

            <div class="team-socials">

                <a href="https://www.instagram.com/ka1fwyou">
                    <i class="fa-brands fa-instagram"></i>
                </a>

                <a href="https://open.spotify.com/user/31yhjyh63p27pzqvfceaj7glurle">
                    <i class="fa-brands fa-spotify"></i>
                </a>

                <a href="https://github.com/kaifwyou">
                    <i class="fa-brands fa-github"></i>
                </a>

            </div>

         </div>

        </a>

    `;

    teamContainer.appendChild(card);

    revealObserver.observe(card);

});

const spotifyPlaylist =
    "https://open.spotify.com/embed/playlist/3ZNkaoH4d9Fho9elw5OhIF";

const spotifyContainer =
    document.getElementById(
        "spotifyContainer"
    );

spotifyContainer.innerHTML = `

    <iframe
        src="${spotifyPlaylist}"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
    </iframe>

`;

const testimonials =
    document.querySelectorAll(
        ".testimonial"
    );

const prevButton =
    document.querySelector(".prev");

const nextButton =
    document.querySelector(".next");

let currentSlide = 0;
let autoSlider;

function showSlide(index) {

    testimonials.forEach(slide => {
        slide.classList.remove("active");
    });

    testimonials[index].classList.add(
        "active"
    );

}

function nextSlide() {

    currentSlide++;

    if (
        currentSlide >=
        testimonials.length
    ) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide =
            testimonials.length - 1;
    }

    showSlide(currentSlide);

}

function startSlider() {

    autoSlider = setInterval(() => {

        nextSlide();

    }, 5000);

}

function restartSlider() {

    clearInterval(autoSlider);

    startSlider();

}

nextButton.addEventListener(
    "click",
    () => {

        nextSlide();

        restartSlider();

    }
);

prevButton.addEventListener(
    "click",
    () => {

        previousSlide();

        restartSlider();

    }
);

showSlide(currentSlide);
startSlider();

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );

contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const message =
            document
                .getElementById("message")
                .value
                .trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !name ||
            !email ||
            !message
        ) {

            formMessage.textContent =
                "Please complete all fields.";

            formMessage.style.color =
                "#ff4d4d";

            return;

        }

        if (
            !emailPattern.test(email)
        ) {

            formMessage.textContent =
                "Please enter a valid email.";

            formMessage.style.color =
                "#ff4d4d";

            return;

        }

        formMessage.textContent =
            "Message sent successfully.";

        formMessage.style.color =
            "#1db954";

        contactForm.reset();

    }
);

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop - 120;

            const height =
                section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY <
                    top + height
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });

        navItems.forEach(link => {

            link.classList.remove(
                "current"
            );

            if (
                link.getAttribute(
                    "href"
                ) === `#${current}`
            ) {

                link.classList.add(
                    "current"
                );

            }

        });

    }
);
