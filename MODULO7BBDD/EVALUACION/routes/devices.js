const router = require("express").Router();
const Device = require('../models/device');
router.get('/', async (req, res) => {
    try {
        const devices = await Device.find({});
        res.json(devices);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los dispositivos' });
    }
});
router.post('/', async (req, res) => {
    try {
        const { _id, name } = req.body;
        const newDevice = new Device({ _id, name });
        const device = await newDevice.save();
        res.status(201).json(device);
    } catch (err) {
        res.status(500).json({ error: 'Error al guardar el dispositivo' });
    }
});
router.put('/', async (req, res) => {
    try {
        const { _id } = req.body;
        const deviceUpdated = await Device.findByIdAndUpdate( _id, req.body, { new: true });
        if (!deviceUpdated) {
            return res.status(404).json({
                message: 'Dispositivo no encontrado'
            });
        }
        res.status(200).json({
            message: 'Dispositivo actualizado correctamente',
            device: deviceUpdated
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error al actualizar el dispositivo'
        });
    }
});
router.delete('/', async (req, res) => {
    try {
        const { _id } = req.body;
        const deviceDeleted = await Device.findByIdAndDelete(_id);
        if (!deviceDeleted) {
            return res.status(404).json({
                message: 'Dispositivo no encontrado'
            });
        }
        res.status(200).json({
            message: 'Dispositivo eliminado correctamente',
            device: deviceDeleted
        });

    } catch (err) {
        res.status(500).json({
            message: 'Error al eliminar el dispositivo'
        });
    }
});
module.exports = router;