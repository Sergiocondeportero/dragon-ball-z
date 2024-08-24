const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name:{type:String, requiere:true},
    planet:{type:String, requiere:true},
    ki:{type:Number}
}, 
{
    collection:"characters",
    timestamps: true
}
)
const Characters = mongoose.model("characters",characterSchema);
module.exports = Characters;