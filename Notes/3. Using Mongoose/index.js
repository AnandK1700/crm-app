const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/examples", () => {
    console.log("Connected to MongoDB")
}, err => { console.log("Error : ", err.message) })


let engineSchema = mongoose.Schema({
    horsePower : Number,
    CC : Number
});

let carSchema = mongoose.Schema({
    brand : String,
    model : String,
    engine : engineSchema
});


let cars = mongoose.model('Cars', carSchema)

cars.create({ brand : "Maruti", model : "Swift", engine : {horsePower : 700, CC : 1500} })
                      .then(console.log)
                      .catch(console.log)


let id = mongoose.Types.ObjectId("63a09305a998beb05b54ca83")

cars.updateOne({_id : id}, { $inc : {__v: 1}}, {brand : "Audi2"})
               .then(console.log)
               .catch(console.log)