const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Configuration du transporteur d'emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route pour envoyer un message de contact
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Création du contact dans la base de données
        const contact = new Contact({
            name,
            email,
            message
        });
        await contact.save();

        // Envoi de l'email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Nouveau message de contact de ${name}`,
            text: `
                Nom: ${name}
                Email: ${email}
                Message: ${message}
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'Message envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
        res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
    }
});

module.exports = router; 