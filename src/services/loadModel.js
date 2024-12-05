const tfjs = require('@tensorflow/tfjs-node');
const loadModel = async () => {
    try {
        const modelUrl = "file://models/melanoma_detector_model.json";
        const model = await tfjs.loadLayersModel(modelUrl);
        console.log('Model loaded successfully');
        return model;
    } catch (error) {
        console.error('Error loading model:', error);
        throw error;
    }
}

module.exports = loadModel;