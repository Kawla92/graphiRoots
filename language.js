// Configuration de l'API
const API_URL = 'http://localhost:3000/api';

// Objet contenant les traductions
const translations = {
    fr: {
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
        hero_title: "Développeur web et designer créatif !",
        hero_subtitle: "Des idées créatives à la réalité numérique !",
        cta_projects: "Découvrez mes réalisations",
        about_title: "Qui suis-je ?",
        designer_title: "Designer polyvalente,",
        designer_subtitle: "entre créativité & technique",
        expertise_title: "Expertises clés :",
        design_graphic_title: "Design Graphique",
        design_graphic_desc: "Logos, réseaux sociaux et supports imprimés",
        design_graphic_tools: "Outils : Photoshop, Illustrator, InDesign",
        web_design_title: "Web Design",
        web_design_desc: "Maquettes interactives et développement front-end",
        web_design_tools: "Outils : Figma, Adobe XD, HTML/CSS",
        motion_design_title: "Motion Design",
        motion_design_desc: "Animations de logos et séquences vidéo",
        motion_design_tools: "Techniques : After Effects, Premiere Pro",
        challenge_text: "Prête à relever de nouveaux défis créatifs ?",
        contact_me: "Contactez-moi",
        certifications_title: "Mes Certifications",
        uiux_cert_title: "UI/UX Design",
        uiux_cert_desc: "CalArts via Coursera",
        uiux_cert_date: "Février 2024",
        responsive_cert_title: "Responsive Web Design",
        responsive_cert_desc: "freeCodeCamp",
        responsive_cert_date: "Décembre 2023",
        view_certificate: "Voir le certificat",
        projects_title: "Mes Projets",
        logo_design_title: "Conception de logos",
        logo_design_desc: "Création de logos uniques et professionnels adaptés aux besoins des entreprises et des marques. Chaque design est pensé pour refléter l'identité et les valeurs du client.",
        social_design_title: "Socialmedia design",
        social_design_desc: "Conception de visuels percutants pour les réseaux sociaux (Instagram, Facebook, LinkedIn…). L'objectif est de capter l'attention et d'optimiser l'engagement grâce à des designs attractifs et modernes.",
        print_design_title: "Conception des imprimés",
        print_design_desc: "Création de supports imprimés tels que cartes de visite, flyers, affiches et brochures. Chaque design est optimisé pour un rendu professionnel et une impression de haute qualité, tout en respectant l'identité visuelle du client.",
        web_app_design_title: "Conception des sites web et des applications",
        web_app_design_desc: "Conception de sites web modernes et responsives et des applications, adaptés aux besoins des entreprises et des particuliers. De la conception UX/UI à l'intégration en appliquant les technologies suivantes (html, css et javascript), chaque projet est optimisé pour offrir une expérience utilisateur fluide et un design attractif.",
        previous: "Précédent",
        next: "Suivant",
        contact_title: "Contact",
        email_label: "Email:",
        phone_label: "Téléphone:",
        behance_label: "Behance:",
        facebook_label: "Facebook:",
        linkedin_label: "LinkedIn:",
        name_label: "Nom:",
        name_placeholder: "ex: John Smith",
        email_placeholder: "ex: abc@gmail.com",
        message_label: "Message:",
        message_placeholder: "Entrez votre message ici...",
        send_button: "Envoyer",
        follow_us: "Suivez-Nous:",
        copyright: "© 2025 GraphiRoots Studio - Tous droits réservés",
        about_text: `Créative, curieuse et passionnée, j'ai fait mes premiers pas dans le graphisme en tant qu'autodidacte. 
            Grâce à des ressources accessibles comme YouTube, j'ai nourri ma sensibilité visuelle et acquis une solide base en design. 
            Mon envie d'apprendre m'a naturellement menée vers des plateformes telles qu'OpenClassrooms, où j'ai renforcé mes compétences en conception web (HTML & CSS).

            Poussée par le désir d'approfondir mes connaissances, j'ai suivi la spécialisation UI/UX Design de CalArts sur Coursera, 
            une formation complète qui m'a initiée aux méthodologies de design centrées utilisateur, à la création de maquettes web et mobiles, aux wireframes, et à la réflexion stratégique derrière une bonne expérience utilisateur.

            En parallèle, j'ai complété une certification de 300 heures en Responsive Web Design sur freeCodeCamp, ce qui m'a permis de maîtriser l'intégration responsive et les bonnes pratiques du développement front-end moderne.

            Toujours à l'affût des innovations, j'intègre également l'intelligence artificielle dans mes processus de création. 
            J'utilise des outils comme Cursor AI pour optimiser l'écriture de code, automatiser certaines tâches et tester plus rapidement mes idées, rendant mes projets plus fluides et performants.`
    },
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        hero_title: "Web Developer and Creative Designer!",
        hero_subtitle: "From creative ideas to digital reality!",
        cta_projects: "Discover my work",
        about_title: "Who am I?",
        designer_title: "Versatile Designer,",
        designer_subtitle: "between creativity & technical",
        expertise_title: "Key Expertise:",
        design_graphic_title: "Graphic Design",
        design_graphic_desc: "Logos, social media and print materials",
        design_graphic_tools: "Tools: Photoshop, Illustrator, InDesign",
        web_design_title: "Web Design",
        web_design_desc: "Interactive mockups and front-end development",
        web_design_tools: "Tools: Figma, Adobe XD, HTML/CSS",
        motion_design_title: "Motion Design",
        motion_design_desc: "Logo animations and video sequences",
        motion_design_tools: "Techniques: After Effects, Premiere Pro",
        challenge_text: "Ready to take on new creative challenges?",
        contact_me: "Contact me",
        certifications_title: "My Certifications",
        uiux_cert_title: "UI/UX Design",
        uiux_cert_desc: "CalArts via Coursera",
        uiux_cert_date: "February 2024",
        responsive_cert_title: "Responsive Web Design",
        responsive_cert_desc: "freeCodeCamp",
        responsive_cert_date: "December 2023",
        view_certificate: "View certificate",
        projects_title: "My Projects",
        logo_design_title: "Logo Design",
        logo_design_desc: "Creation of unique and professional logos adapted to the needs of companies and brands. Each design is thought to reflect the client's identity and values.",
        social_design_title: "Social Media Design",
        social_design_desc: "Design of impactful visuals for social networks (Instagram, Facebook, LinkedIn...). The goal is to capture attention and optimize engagement through attractive and modern designs.",
        print_design_title: "Print Design",
        print_design_desc: "Creation of printed materials such as business cards, flyers, posters and brochures. Each design is optimized for professional rendering and high-quality printing, while respecting the client's visual identity.",
        web_app_design_title: "Web and App Design",
        web_app_design_desc: "Design of modern and responsive websites and applications, adapted to the needs of businesses and individuals. From UX/UI design to integration using the following technologies (html, css and javascript), each project is optimized to provide a smooth user experience and attractive design.",
        previous: "Previous",
        next: "Next",
        contact_title: "Contact",
        email_label: "Email:",
        phone_label: "Phone:",
        behance_label: "Behance:",
        facebook_label: "Facebook:",
        linkedin_label: "LinkedIn:",
        name_label: "Name:",
        name_placeholder: "ex: John Smith",
        email_placeholder: "ex: abc@gmail.com",
        message_label: "Message:",
        message_placeholder: "Enter your message here...",
        send_button: "Send",
        follow_us: "Follow Us:",
        copyright: "© 2025 GraphiRoots Studio - All rights reserved",
        about_text: `Creative, curious, and passionate, I took my first steps in graphic design as a self-taught artist. 
            Through accessible resources like YouTube, I nurtured my visual sensitivity and built a solid foundation in design. 
            My desire to learn naturally led me to platforms like OpenClassrooms, where I strengthened my web design skills (HTML & CSS).

            Driven by the desire to deepen my knowledge, I completed the UI/UX Design specialization from CalArts on Coursera, 
            a comprehensive training that introduced me to user-centered design methodologies, web and mobile mockup creation, wireframes, and the strategic thinking behind good user experience.

            In parallel, I completed a 300-hour Responsive Web Design certification on freeCodeCamp, which allowed me to master responsive integration and modern front-end development best practices.

            Always on the lookout for innovations, I also integrate artificial intelligence into my creative processes. 
            I use tools like Cursor AI to optimize code writing, automate certain tasks, and test my ideas more quickly, making my projects more fluid and efficient.`
    }
};

// Fonction pour charger les traductions depuis l'API
async function loadTranslations(lang) {
    try {
        const response = await fetch(`${API_URL}/translations/${lang}`);
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des traductions');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
        // Fallback sur les traductions par défaut
        return loadDefaultTranslations(lang);
    }
}

// Fonction pour charger les traductions par défaut
async function loadDefaultTranslations(lang) {
    try {
        console.log(`Chargement des traductions pour ${lang}...`);
        const response = await fetch(`/${lang}.json`);
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des traductions par défaut');
        }
        const translations = await response.json();
        console.log(`Traductions chargées pour ${lang}:`, translations);
        return translations;
    } catch (error) {
        console.error('Erreur:', error);
        return {};
    }
}

// Fonction pour mettre à jour les textes
function updateTexts(translations) {
    // Mettre à jour les textes avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    // Mettre à jour les placeholders
    document.querySelectorAll('[data-i18n-attr="placeholder"]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.placeholder = translations[key];
        }
    });

    // Mettre à jour les attributs title
    document.querySelectorAll('[data-i18n-attr="title"]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.title = translations[key];
        }
    });
}

// Fonction pour changer la langue
async function changeLanguage(lang) {
    try {
        // Sauvegarder la langue dans localStorage
        localStorage.setItem('preferredLanguage', lang);

        // Charger les traductions
        const translations = await loadTranslations(lang);
        
        // Mettre à jour les textes
        updateTexts(translations);

        // Mettre à jour l'attribut lang du document
        document.documentElement.lang = lang;

        // Mettre à jour les boutons de langue
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        console.log(`Langue changée avec succès vers ${lang}`);
    } catch (error) {
        console.error('Erreur lors du changement de langue:', error);
    }
}

// Initialisation de la langue au chargement de la page
document.addEventListener('DOMContentLoaded', async () => {
    // Récupérer la langue préférée depuis localStorage ou utiliser le français par défaut
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
    
    // Charger la langue
    await changeLanguage(preferredLanguage);

    // Ajouter les écouteurs d'événements pour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});

// Exporter les fonctions nécessaires
export { changeLanguage }; 