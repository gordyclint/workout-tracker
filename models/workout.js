const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [
        {
            type: { type: String, require: true },
            name: { type: String, require: true },
            duration: { type: Number, require: true },
            weight: { type: Number, require: true },
            reps: { type: Number, require: true },
            sets: { type: Number, require: true }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;

// {
//     day: new Date().setDate(new Date().getDate()-10),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
