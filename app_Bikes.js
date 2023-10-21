const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Mydatabase', {useNewUrlParser: true});

const bikeSchema = new mongoose.Schema({
    "brand": String,
    "model": String,
    "engine": String,
    "topSpeed": Number,
    "mileage": Number,
    "price": Number,
    "type": String
  });
  
  const Player = mongoose.model('Bike', playerSchema);

  app.post('/Bikedb', (req, res) => {
    let newPlayer = new Bike(req.body);

  newPlayer.save()
  .then((savedBike) => {
    res.status(201).send(savedBike._id);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
  });
  

  app.put('/Bike/:id', (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((Bikes) => {
        res.send(Bikes);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  


  // Delete a Bike
  app.delete('/Bikes/:id', (req, res) => {
    Player.findByIdAndRemove(req.params.id).then((Bikes) => {
        res.send("Biker deleted");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
  
  app.get('/Bikedb/bymodel/:model', (req, res) => {
    Player.find({ position: req.params.model })
      .then((model) => {
        res.send(bikes);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  app.get('/bikes', (req, res) => {
    Player.find()
      .then((bikes) => {
        res.send(bikes);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
  


  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });