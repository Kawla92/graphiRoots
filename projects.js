const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Récupérer tous les projets
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des projets' });
    }
});

// Récupérer un projet par son ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Projet non trouvé' });
        }
        res.json(project);
    } catch (error) {
        console.error('Erreur lors de la récupération du projet:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération du projet' });
    }
});

// Récupérer les projets par catégorie
router.get('/category/:category', async (req, res) => {
    try {
        const projects = await Project.find({ category: req.params.category })
            .sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        console.error('Erreur lors de la récupération des projets par catégorie:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des projets' });
    }
});

module.exports = router; 