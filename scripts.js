// Language
const aboutText = {
    en: "Hi! I’m Saya, a certified Pilates instructor passionate about helping people improve their posture, strength, and overall well-being through mindful movement. I offer personalized sessions tailored to your needs, whether you're a beginner or experienced.",
    jp: "こんにちは！明夏です。認定ピラティスインストラクターとして、姿勢や体力、全体的な健康を向上させるためのサポートをしています。初心者から経験者まで、ニーズに合わせたセッションをご提供します。",
    nl: "Hallo! Ik ben Saya, een gecertificeerde Pilates-instructeur die mensen helpt hun houding, kracht en welzijn te verbeteren door bewuste beweging. Ik bied persoonlijke sessies voor beginners en gevorderden."
};
const headerText = {
    en: "Pilates with Saya",
    jp: "ピラティス with Saya",
    nl: "Pilates met Saya"
};
function setLanguage(lang) {
    document.getElementById("about-text").innerText = aboutText[lang];
    document.getElementById("header-text").innerText = headerText[lang];
    document.title = headerText[lang];
    document.getElementById("footer-text").innerText = `© 2025 ${headerText[lang]}. All Rights Reserved.`;
}
setLanguage("en");

// Social Icons
const socialLinks = [
    { href: "mailto:your.email@example.com", class: "email", icon: "fas fa-envelope", label: "Email" },
    { href: "https://instagram.com/yourprofile", class: "instagram", icon: "fab fa-instagram", label: "Instagram" },
    { href: "https://facebook.com/yourprofile", class: "facebook", icon: "fab fa-facebook", label: "Facebook" }
];
function createSocialIcons() {
    const container = document.createElement("div");
    container.className = "social-icons";
    socialLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.className = link.class;
        a.setAttribute("aria-label", link.label);
        a.target = link.href.startsWith("http") ? "_blank" : "_self";
        const i = document.createElement("i");
        i.className = link.icon;
        a.appendChild(i);
        container.appendChild(a);
    });
    return container;
}

// Append social icons inside header and footer properly
document.querySelector("#header .language-switch").insertAdjacentElement("afterend", createSocialIcons());
document.getElementById("footer").appendChild(createSocialIcons());

// Gallery slider
const gallery = document.querySelector("#gallery .gallery");
const images = Array.from(gallery.querySelectorAll('img'));
const prevBtn = document.querySelector("#gallery .prev");
const nextBtn = document.querySelector("#gallery .next");

let visibleCount = 7;
let total = images.length;
let galleryIndex = 0;

function updateGallery() {
    // calculate shift in %
    const shift = (100 / visibleCount) * galleryIndex;
    gallery.style.transform = `translateX(-${shift}%)`;
}

prevBtn.addEventListener('click', () => {
    if (galleryIndex > 0) {
        galleryIndex--;
        updateGallery();
    }
});

nextBtn.addEventListener('click', () => {
    if (galleryIndex < total - visibleCount) {
        galleryIndex++;
        updateGallery();
    }
});

// Auto slide every 3s
setInterval(() => {
    if (galleryIndex < total - visibleCount) {
        galleryIndex++;
    } else {
        galleryIndex = 0;
    }
    updateGallery();
}, 3000);
