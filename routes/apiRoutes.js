const router = require("express").Router();
const Workout = require("../models/workout.js");

router.put('/api/workouts/:id', (req, res) =>{
  console.log(req.body);
  console.log(req.params.id)
  Workout.findByIdAndUpdate(
    req.params.id, 
    {$push: {exercises: req.body}})

  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    console.log(err)
  })
  
})


router.get('/api/workouts', (req, res) => {
  Workout.find()
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    console.log(err)
  });
});


router.post('/api/workouts', (req, res) => {
  Workout.create(req.body)
  .then(dbWorkout =>{
    res.json(dbWorkout)
  })
})

// Get workout
router.get('/api/workouts/range', (req, res) =>{
  Workout.find({})
  .then(dbWorkout =>{
    res.json(dbWorkout)
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router;