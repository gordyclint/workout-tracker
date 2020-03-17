const db = require("../models");

function apiRoutes(app) {
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    app.post("/api/workouts", function(req, res) {
        db.Workout.create(req.body).then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    app.put("/api/workouts/:id", function(req, res) {
        var id = req.params.id;
        db.Workout.findOneAndUpdate(
            { _id: id },
            { $push: { exercises: req.body } },
            function(error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                }
                res.json(success);
            }
        );
    });

    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts);
        })
    })
}

module.exports = apiRoutes;
