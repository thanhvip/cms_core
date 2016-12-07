//rulesDeclarationSchema
var mongoose = require('mongoose');

var rule_declaration_Schema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    ruleKey: {type: Number, required: true}
});
module.exports = rule_declaration_Schema;
