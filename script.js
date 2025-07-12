import { api } from './api-config.js';

// Script modifié pour intégrer Google reCAPTCHA
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');

    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorDiv = formGroup.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            formGroup.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
        input.classList.add('error');
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const errorDiv = formGroup.querySelector('.error-message');
        if (errorDiv) {
            formGroup.removeChild(errorDiv);
        }
        input.classList.remove('error');
    }

    // Fonction pour obtenir le message d'erreur traduit
    function getErrorMessage(key) {
        // Si le système de traduction est disponible
        if (window.translations && window.currentLanguage) {
            return window.translations[window.currentLanguage][key] || key;
        }
        // Fallback pour les messages en français
        const errorMessages = {
            'error_name': 'Nom invalide : 2 à 50 lettres, accents et tirets autorisés',
            'error_email': 'Veuillez entrer un email valide',
            'error_message': 'Le message doit contenir entre 10 et 1000 caractères',
            'error_captcha': 'Veuillez valider le captcha',
            'success_message': 'Message envoyé avec succès !'
        };
        return errorMessages[key] || key;
    }

    nameInput.addEventListener('input', function() {
        clearError(nameInput);
        if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\- ]{2,50}$/.test(this.value)) {
            showError(this, getErrorMessage('error_name'));
        }
    });

    emailInput.addEventListener('input', function() {
        clearError(emailInput);
        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(this.value)) {
            showError(this, getErrorMessage('error_email'));
        }
    });

    messageInput.addEventListener('input', function() {
        clearError(messageInput);
        if (this.value.length < 10 || this.value.length > 1000) {
            showError(this, getErrorMessage('error_message'));
        }
    });

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        let hasError = false;
        clearError(nameInput);
        clearError(emailInput);
        clearError(messageInput);

        // Vérification du nom
        if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\- ]{2,50}$/.test(nameInput.value)) {
            showError(nameInput, getErrorMessage('error_name'));
            hasError = true;
        }

        // Vérification de l'email
        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(emailInput.value)) {
            showError(emailInput, getErrorMessage('error_email'));
            hasError = true;
        }

        // Vérification du message
        if (messageInput.value.length < 10 || messageInput.value.length > 1000) {
            showError(messageInput, getErrorMessage('error_message'));
            hasError = true;
        }

        // Vérification du captcha
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            const captchaContainer = document.querySelector('.captcha-container');
            let captchaErrorDiv = captchaContainer.querySelector('.error-message');
            
            if (!captchaErrorDiv) {
                captchaErrorDiv = document.createElement('div');
                captchaErrorDiv.className = 'error-message';
                captchaContainer.appendChild(captchaErrorDiv);
            }
            
            captchaErrorDiv.textContent = getErrorMessage('error_captcha');
            hasError = true;
        }

        if (hasError) {
            return;
        }

        try {
            // Envoi des données à l'API
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'envoi du message');
            }

            // Réinitialisation du formulaire
            form.reset();
            grecaptcha.reset();

            // Affichage du message de succès
            alert(getErrorMessage('success_message'));
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
        }
    });

    // Fonctions de callback pour reCAPTCHA
    function onRecaptchaSuccess(token) {
        console.log('reCAPTCHA validé avec succès');
        document.getElementById('contactForm').querySelector('button[type="submit"]').disabled = false;
    }

    function onRecaptchaExpired() {
        console.log('reCAPTCHA expiré');
        document.getElementById('contactForm').querySelector('button[type="submit"]').disabled = true;
    }

    // Désactiver le bouton d'envoi au chargement de la page
    const submitButton = document.getElementById('contactForm').querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = true;
    }
});

// Gestion du bouton "Retour en haut"
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Initialisation du carousel Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    new bootstrap.Carousel(document.getElementById('projetCarousel'), {
        interval: 5000,
        wrap: true
    });
}); 