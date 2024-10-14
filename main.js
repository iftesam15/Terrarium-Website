const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove("left-[0]")
        hamburger.classList.remove("ri-close-large-line")
    })  // Close the nav menu on link click  - end of forEach loop  // end of navLink event listener  // end of hamburger event listener  // end of JavaScript code  // end of HTML document  // end of HTML code  // end of index.html  // end of file
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



// show scroll up 
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");
    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");

    }
    else {
        scrollUpBtn.classList.remove("bottom-4");
        scrollUpBtn.classList.add("-bottom-1/2");
    }
}
const scrollHeader = () => {
    const header = document.getElementById("navbar");
    if (this.scrollY >= 250) {
        header.classList.add("border-b", "border-yellow-600");
    }
    else {
        header.classList.remove("border-b", "border-yellow-300");
    }

}

window.addEventListener("scroll", scrollUp);
window.addEventListener("scroll", scrollHeader);

// scroll section active link
const activeTab = () => {
    const sections = document.querySelectorAll('section');
    // console.log("🚀 ~ activeTab ~ sections:", sections)
    const navLinks = document.querySelectorAll(".nav-link");
    let current = "home";
    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        if (this.scrollY >= sectionTop - 60) {
            console.log("🚀 ~ activeTab ~ scrollY:", this.scrollY)

            current = section.getAttribute("id")

        }
    })

    navLinks.forEach(item => {
        item.classList.remove("active");
        if (item.href.includes(current)) {
            item.classList.add("active")
        }
    })
}

window.addEventListener("scroll", activeTab);