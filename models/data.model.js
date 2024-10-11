import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    end_year: {
        type: String,
        default: "",  // since it's an empty string in the example
    },
    intensity: {
        type: Number,
        required: true,  // since "intensity" is present in the data
    },
    sector: {
        type: String,
        required: true,  // "sector" is present in the data
    },
    topic: {
        type: String,
        required: true,  // "topic" is present in the data
    },
    insight: {
        type: String,
        required: true,  // "insight" is present in the data
    },
    url: {
        type: String,
        required: true,  // "url" is present in the data
    },
    region: {
        type: String,
        required: true,  // "region" is present in the data
    },
    start_year: {
        type: String,
        default: "",  // since it's an empty string in the example
    },
    impact: {
        type: String,
        default: "",  // since it's an empty string in the example
    },
    added: {
        type: Date,  // using Date for proper handling of date strings
        required: true,  // "added" is present in the data
    },
    published: {
        type: Date,  // using Date for proper handling of date strings
        required: true,  // "published" is present in the data
    },
    country: {
        type: String,
        required: true,  // "country" is present in the data
    },
    relevance: {
        type: Number,
        required: true,  // "relevance" is present in the data
    },
    pestle: {
        type: String,
        required: true,  // "pestle" is present in the data
    },
    source: {
        type: String,
        required: true,  // "source" is present in the data
    },
    title: {
        type: String,
        required: true,  // "title" is present in the data
    },
    likelihood: {
        type: Number,
        required: true,  // "likelihood" is present in the data
    }
});

// Exporting the model
const DataModel = mongoose.model('Data', DataSchema);
export default DataModel;
