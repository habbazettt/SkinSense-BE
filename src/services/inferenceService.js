const tfjs = require('@tensorflow/tfjs-node');

const predict = async () => {
    const tensor = tfjs.node
        .decodeJpeg(imageBuffer)
        .resizeNearestNeighbor([150, 150])
        .expandDims()
        .toFloat();

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const label = confidenceScore <= 50 ? 'Non-cancer' : 'Cancer';
    let result;
    let suggestion;

    if (label === 'Cancer') {
        result = "Melanoma";
        suggestion = "Segera periksa ke dokter!"
    }

    if (label === 'Non-cancer') {
        result = "Normal";
        suggestion = "Anda sehat!"
    }

    return { confidenceScore, label, result, suggestion };
}

module.exports = predict;