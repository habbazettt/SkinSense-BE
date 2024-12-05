const { findProductByLabel } = require('../models/Product');
const response = require('../response');
const predictedClassification = require('../services/inferenceService');
const loadModel = require('../services/loadModel');

let model;

(async () => {
    try {
        model = await loadModel();
    } catch (error) {
        console.error('Error loading model:', error);
        process.exit(1)
    }
})();

const postPredictData = async (req, res) => {
    const image = req.file.buffer;

    try {
        if (!image) {
            return response(400, 'error', 'Image is required', res);
        }

        if (image.mimetype !== 'image/jpeg' && image.mimetype !== 'image/png') {
            return response(400, 'error', 'Invalid image format', res);
        }

        if (!model) {
            return response(500, 'error', 'Model not loaded', res);
        }

        const { confidenceScore, label, result, suggestion } = await predictedClassification(image, model);

        response(200, { confidenceScore, label, result, suggestion }, 'Success', res);

    } catch (error) {
        console.log(error.message);
        response(500, 'error', 'Internal Server Error', res);
    }
}

module.exports = {
    postPredictData
}