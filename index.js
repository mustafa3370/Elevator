const translations = {
    ar: {
        title: "شركة المصاعد [اسم الشركة] - حلول مصاعد آمنة ومبتكرة",
        welcome: "حلول مصاعد متكاملة لبيئة آمنة ومريحة",
        description: "نقدم أحدث التقنيات في تركيب وصيانة وتحديث المصاعد لضمان تجربة لا مثيل لها.",
        btn: "اكتشف خدماتنا",
        flag: "usa.png"
    },
    en: {
        title: "Elevator Company [Your Name] - Innovative & Safe Elevator Solutions",
        welcome: "Integrated Elevator Solutions for a Safe and Comfortable Environment",
        description: "We provide the latest technologies in elevator installation, maintenance, and modernization to ensure unmatched experience.",
        btn: "Discover Our Services",
        flag: "ksa.png"
    }
};

let currentLang = "ar";

function setLanguage(lang) {
    currentLang = lang;
    const data = translations[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = data.title;
    document.querySelector(".hero-content h1").textContent = data.welcome;
    document.querySelector(".hero-content p").textContent = data.description;
    document.querySelector(".hero-content a").textContent = data.btn;
    document.getElementById("language-toggle").src = data.flag;
}

document.getElementById("language-toggle").addEventListener("click", () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    setLanguage(newLang);
});

// عند تحميل الصفحة، اجعلها بالعربية
setLanguage("ar");
