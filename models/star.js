let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Star'

let schema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    color:{
        type: String,
       enum:[
           'red',
           'yellow',
           'blue',
           'orange',
           'white'
       ],
       required: true
    },
    galaxyId: {
        type: ObjectId,
        ref:'Galaxy',
        required: true
    }
})

module.exports = mongoose.model(schemaName, schema)