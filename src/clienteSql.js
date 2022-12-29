const mongoose = require('mongoose');
const createKnexClient = require('knex');
const mysqlConfig  = require('./config.js');

const schema = mongoose.Schema

const msgSchema = new schema(
    {
        author: {
        email: {type : String},
        nombre:  {type : String},
        apellido:  {type : String},
        edad:  {type : String},
        alias:  {type : String},
        avatar:  {type : String},
        },
        text:  {type : String}
        }
)

module.exports = mongoose.model(mensajes,msgSchema);
module.exports = clienteSql = createKnexClient(mysqlConfig);