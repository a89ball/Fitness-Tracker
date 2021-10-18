const mongoose = require('mongoose');
const Schema = mongoose.Schema

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type:{
                type: String,
                trim: true,
                required: "Required Field"
            },
            name: {
                type: String,
                trim: true,
                required: "Required field"
            },
            duration: {
                type: Number,
                required: "Required field"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
        
            distance: {
                type: Number
            }
        }
    ]
},