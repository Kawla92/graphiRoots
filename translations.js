const express = require('express');
const router = express.Router();
const Translation = require('../models/Translation');
const fs = require('fs').promises;
const path = require('path');

// Récupérer les traductions pour une langue
router.get('/:lang', async (req, res) => {
    try {
        const { lang } = req.params;
        
        // Vérifier si la langue est valide
        if (!['fr', 'en'].includes(lang)) {
            return res.status(400).json({ error: 'Langue non supportée' });
        }

        // Essayer d'abord de récupérer depuis la base de données
        let translation = await Translation.findOne({ language: lang });
        
        // Si pas dans la base de données, charger depuis le fichier JSON
        if (!translation) {
            const filePath = path.join(__dirname, '..', '..', `${lang}.json`);
            try {
                const fileContent = await fs.readFile(filePath, 'utf8');
                const translations = JSON.parse(fileContent);
                
                // Sauvegarder dans la base de données
                translation = new Translation({
                    language: lang,
                    translations: translations
                });
                await translation.save();
            } catch (error) {
                console.error(`Erreur lors de la lecture du fichier ${lang}.json:`, error);
                return res.status(500).json({ error: 'Erreur lors du chargement des traductions' });
            }
        }

        res.json(translation.translations);
    } catch (error) {
        console.error('Erreur lors de la récupération des traductions:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des traductions' });
    }
});

// Mettre à jour les traductions pour une langue
router.put('/:lang', async (req, res) => {
    try {
        const { lang } = req.params;
        const { translations } = req.body;

        // Vérifier si la langue est valide
        if (!['fr', 'en'].includes(lang)) {
            return res.status(400).json({ error: 'Langue non supportée' });
        }

        // Mettre à jour ou créer les traductions
        const translation = await Translation.findOneAndUpdate(
            { language: lang },
            { 
                translations,
                lastUpdated: new Date()
            },
            { new: true, upsert: true }
        );

        res.json(translation);
    } catch (error) {
        console.error('Erreur lors de la mise à jour des traductions:', error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour des traductions' });
    }
});

module.exports = router; 