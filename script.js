/* ==================================================
   LOWA — BASE DE DONNÉES & INTERACTION
   ================================================== */

// 1. CONFIGURATION DES COORDONNÉES OFFICIELLES
const LOWA_CONFIG = {
    whatsappNumber: "243972031790",
    orangeMoneyNumber: "+243 893 246 210",
    email: "gmail.artinantera@gmail.com"
};

// 2. BASE DE DONNÉES DE PRODUITS (Facile à modifier)
const cosmeticsData = [
    {
        id: "creme-mapinda",
        category: "cremes-beurres",
        title: "Crème Mapinda",
        desc: "Soin nourrissant et protecteur de qualité supérieure.",
        price: "15 USD",
        icon: "fa-jar",
        image: "" // Laissez vide ou mettez le nom du fichier ex: "images/mapinda.jpg"
    },
    {
        id: "beurre-karite",
        category: "cremes-beurres",
        title: "Beurre de Karité Pure",
        desc: "Formats : Petit (5 USD) | Moyen (10 USD) | Grand (20 USD)",
        price: "À partir de 5 USD",
        icon: "fa-pump-soap",
        image: ""
    },
    {
        id: "beurre-cacao",
        category: "cremes-beurres",
        title: "Beurre de Cacao",
        desc: "Soin hydratant gourmand (Format moyen).",
        price: "5 USD",
        icon: "fa-seedling",
        image: ""
    },
    {
        id: "savon-noir",
        category: "savons",
        title: "Savon Noir Traditionnel",
        desc: "Nettoyage purifiant (Petit format).",
        price: "5 USD",
        icon: "fa-soap",
        image: ""
    },
    {
        id: "savons-lowa",
        category: "savons",
        title: "Savons LOWA Artisanaux",
        desc: "Divers types et formats selon votre type de peau.",
        price: "À partir de 5 USD",
        icon: "fa-bath",
        image: ""
    },
    {
        id: "huile-avocat",
        category: "huiles",
        title: "Huile d'Avocat",
        desc: "Régénérante pour peau et cheveux (Format 50 ml).",
        price: "15 USD / 50 ml",
        icon: "fa-oil-can",
        image: ""
    },
    {
        id: "huile-coco",
        category: "huiles",
        title: "Huile de Coco",
        desc: "Soin multi-usage nourrissant.",
        price: "5 USD",
        icon: "fa-prescription-bottle",
        image: ""
    },
    {
        id: "huile-basilic",
        category: "huiles",
        title: "Huile de Basilic",
        desc: "Préparation artisanale spéciale.",
        price: "10 USD",
        icon: "fa-mortar-pestle",
        image: ""
    },
    {
        id: "huiles-corporelles",
        category: "huiles",
        title: "Huiles Corporelles Personnalisées",
        desc: "Préparées selon vos besoins spécifiques.",
        price: "Environ 10 USD",
        icon: "fa-spa",
        image: ""
    },
    {
        id: "huiles-capillaires",
        category: "huiles",
        title: "Huiles Capillaires Fortifiantes",
        desc: "Stimule la pousse et nourrit le cuir chevelu.",
        price: "10 000 à 15 000 FC",
        icon: "fa-feather",
        image: ""
    },
    {
        id: "autres-huiles",
        category: "huiles",
        title: "Autres Huiles (Olive, Ail, Oignon, Menthe...)",
        desc: "Disponibles sur commande spéciale.",
        price: "Prix sur demande",
        icon: "fa-flask",
        image: ""
    },
    {
        id: "parfum-menthe",
        category: "parfums-cosmo",
        title: "Parfum LOWA à la Menthe",
        desc: "Sensation de fraîcheur vive (50 ml).",
        price: "5 USD / 50 ml",
        icon: "fa-wind",
        image: ""
    },
    {
        id: "parfum-orange",
        category: "parfums-cosmo",
        title: "Parfum à l'Orange",
        desc: "Notes d'agrumes douces (Sur commande).",
        price: "Environ 5 USD",
        icon: "fa-sun",
        image: ""
    },
    {
        id: "divine-grace",
        category: "parfums-spirit",
        title: "Parfum Divine Grâce",
        desc: "Préparation aromatique traditionnelle (50 ml).",
        price: "6 000 FC",
        icon: "fa-star",
        image: ""
    },
    {
        id: "saint-michel",
        category: "parfums-spirit",
        title: "Parfum Saint Michel",
        desc: "Soin aromatique (Dès 50 ml).",
        price: "À partir de 6 000 FC",
        icon: "fa-shield-alt",
        image: ""
    },
    {
        id: "bintou",
        category: "parfums-spirit",
        title: "Parfum Bintou",
        desc: "Référence traditionnelle selon les arrivages.",
        price: "Prix sur demande",
        icon: "fa-moon",
        image: ""
    }
];

// 3. BASE DE DONNÉES SERVICES TECHNIQUES
const techServicesData = [
    { title: "Réparation de machines à laver", desc: "Diagnostic et remise en état.", icon: "fa-soap" },
    { title: "Dépannage & Réparations électriques", desc: "Recherche de pannes et corrections.", icon: "fa-wrench" },
    { title: "Installations Bâtiment", desc: "Montage de circuits et éclairages.", icon: "fa-building" },
    { title: "Installations Solaires", desc: "Montage et cablage de panneaux.", icon: "fa-sun" }
];

// 4. BASE DE DONNÉES LITTÉRATURE
const booksData = [
    {
        title: "Œuvres & Réflexions LOWA",
        author: "Par LOWA Éditions",
        desc: "Recueil de textes, philosophie et réflexions sur la conscience et la nature.",
        price: "Prix sur demande"
    },
    {
        title: "Publications à Venir",
        author: "Projets d'écriture",
        desc: "Prochaines parutions philosophiques et écrits créatifs en préparation.",
        price: "Disponibilité à venir"
    }
];

// FUNCTION : OUVERTURE WHATSAPP
function openWhatsApp(customMessage) {
    const encoded = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${LOWA_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
}

// RENDU DYNAMIQUE DES PRODUITS
function renderCosmetics(filter = 'all') {
    const container = document.getElementById('cosmetics-container');
    if (!container) return;

    container.innerHTML = '';
    const filtered = filter === 'all' ? cosmeticsData : cosmeticsData.filter(p => p.category === filter);

    filtered.forEach(p => {
        const imageContent = p.image 
            ? `<img src="${p.image}" alt="${p.title}">`
            : `<i class="fas ${p.icon}"></i>`;

        const cardHtml = `
            <div class="product-card">
                <div>
                    <div class="product-img-holder">${imageContent}</div>
                    <h3 class="product-title">${p.title}</h3>
                    <p class="product-desc" style="font-size:0.85rem; color:#666;">${p.desc}</p>
                </div>
                <div>
                    <div class="product-price">${p.price}</div>
                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-sm btn-primary" onclick="openWhatsApp('Bonjour LOWA, je souhaite commander : ${p.title} (${p.price}). Est-ce disponible ?')">Commander</button>
                        <button class="btn btn-sm btn-outline" onclick="openWhatsApp('Bonjour LOWA, j\\'ai une question concernant : ${p.title}')">Question</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}

function filterCosmetics(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderCosmetics(category);
}

// RENDU DES SERVICES & LIVRES
function renderOtherSections() {
    // Services Tech
    const techContainer = document.getElementById('tech-container');
    if (techContainer) {
        techServicesData.forEach(s => {
            techContainer.innerHTML += `
                <div class="tech-card">
                    <i class="fas ${s.icon}" style="font-size:1.8rem; color:var(--primary-color); margin-bottom:10px;"></i>
                    <h4>${s.title}</h4>
                    <p style="font-size:0.85rem; color:#666;">${s.desc}</p>
                </div>
            `;
        });
    }

    // Livres
    const booksContainer = document.getElementById('books-container');
    if (booksContainer) {
        booksData.forEach(b => {
            booksContainer.innerHTML += `
                <div class="book-card">
                    <div class="book-cover-mock"><i class="fas fa-book"></i></div>
                    <div>
                        <h3>${b.title}</h3>
                        <small style="color:var(--accent-color); font-weight:600;">${b.author}</small>
                        <p style="font-size:0.85rem; color:#666; margin:8px 0;">${b.desc}</p>
                        <div style="font-weight:700; color:var(--primary-color); margin-bottom:10px;">${b.price}</div>
                        <button class="btn btn-sm btn-primary" onclick="openWhatsApp('Bonjour LOWA Littérature, je souhaite me renseigner sur : ${b.title}')">Se renseigner / Commander</button>
                    </div>
                </div>
            `;
        });
    }
}

// NAVIGATION MOBILE
document.addEventListener('DOMContentLoaded', () => {
    renderCosmetics('all');
    renderOtherSections();

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('active'));
        });
    }
});
          
