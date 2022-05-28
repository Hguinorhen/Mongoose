//require express & router
const express = require("express");
const router = express.Router();


//import the person prototype model
const Person = require("../models/personSchema");


//access public
router.post("/", (req, res) => {
  const newPerson = new Person({ ...req.body });
  newPerson
    .save()
    .then((person) => res.status(200).json(person))
    .catch((err) => res.status(400).json(err));
});

//create and save a record of a model
const firstPerson = new Person({
  name: "Leanne Graham",
  age: 30,
  favouriteFoods: ["grapes", "cake", "burritos"],
});


//create many records
const otherPeople = [
  {
    name: "Ervin Howell",
    age: 45,
    favouriteFoods: ["rasin", "humberger", "chocolate"],
  },
  {
    name: "Clementine Bauch",
    age: 18,
    favouriteFoods: ["couscous", "cheese-cake", "ice-cream"],
  },
  {
    name: "Patricia Lebsack",
    age: 60,
    favouriteFoods: ["pasta", "choclate-cake", "pupcorn"],
  },
];
Person.create(otherPeople);
console.log("otherPeople =>" + otherPeople);


//get
router.get("/", (req, res) => {
  Person.find()
    .then((people) => res.status(200).json(people))
    .catch((err) => res.status(400).json(err));
});


router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  Person.findOne({ _id })
    .then((person) => res.send(person))
    .catch((err) => res.send(err));
}); 
   router.put("/update/:id", (req, res) => {
     Person.findByIdAndUpdate(
       { _id: req.params.id },
       { ...req.body },
       (err, data) => {
         if (err) throw err;
         else res.json(req.body);
       }
     );
   });

   router.delete("/delete/:id", (req, res) => {
     Person.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
       if (err) throw err;
       else res.json({ msg: "deleted" });
     });
   }); 
   var queryChain = function (done) {
     var foodToSearch = "burrito";
     Person.find({ favoriteFoods: foodToSearch })
       .sort({ name: "asc" })
       .limit(2)
       .select("-age")
       .exec((err, data) => {
         if (err) done(err);
         done(null, data);
       });
   };
   queryChain((err, data) => (err ? console.log(err) : console.log(data)));
module.exports = router;
