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

{
    toJSON: {
        // Include virtual propeties when data is requested.
        virtuals: true
      }
    }
  );
  
  // Adds a dynamically-created property to schema
  workoutSchema.virtual("totalDuration").get(function() {
    // "Reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;