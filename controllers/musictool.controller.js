const db = require('../models'); // Assurez-vous que ce chemin est correct
const Instrument = db.instruments;

const MusicController = {
    // Ajouter un nouvel instrument
    addInstrument: async (req, res) => {
        try {
            const { name, type, price } = req.body;
            const newInstrument = await Instrument.create({ name, type, price });
            res.status(201).send(newInstrument);
        } catch (error) {
            res.status(500).send({ message: "Some error occurred while creating the Instrument." });
        }
    },

    // Obtenir la liste de tous les instruments
    getAllInstruments: async (req, res) => {
        try {
            const instruments = await Instrument.findAll();
            res.status(200).send(instruments);
        } catch (error) {
            res.status(500).send({ message: "Some error occurred while retrieving instruments." });
        }
    },

    // Obtenir un seul instrument par ID
    getInstrumentById: async (req, res) => {
        try {
            const id = req.params.id;
            const instrument = await Instrument.findByPk(id);
            if (instrument) {
                res.status(200).send(instrument);
            } else {
                res.status(404).send({ message: `Not found Instrument with id=${id}.` });
            }
        } catch (error) {
            res.status(500).send({ message: "Error retrieving Instrument with id=" + id });
        }
    },

    // Mettre à jour un instrument
    updateInstrument: async (req, res) => {
        try {
            const id = req.params.id;
            const { name, type, price } = req.body;
            const update = await Instrument.update({ name, type, price }, { where: { id: id } });
            if (update[0] === 1) {
                res.send({ message: "Instrument was updated successfully." });
            } else {
                res.send({ message: `Cannot update Instrument with id=${id}. Maybe Instrument was not found or req.body is empty!` });
            }
        } catch (error) {
            res.status(500).send({ message: "Error updating Instrument with id=" + id });
        }
    },

    // Supprimer un instrument
    deleteInstrument: async (req, res) => {
        try {
            const id = req.params.id;
            const deleteCount = await Instrument.destroy({ where: { id: id } });
            if (deleteCount === 1) {
                res.send({ message: "Instrument was deleted successfully!" });
            } else {
                res.send({ message: `Cannot delete Instrument with id=${id}. Maybe Instrument was not found!` });
            }
        } catch (error) {
            res.status(500).send({ message: "Could not delete Instrument with id=" + id });
        }
    }
};

module.exports = MusicController;
