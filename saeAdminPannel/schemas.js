var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var adminSchema = new Schema({
    username:  {
        type:String,
        required: true,
        unique:true,
        dropDups: true,
    },
    password: {
        type:String,
        required:true,
    }
});

var admin = mongoose.model('admin',adminSchema);

var saeMenuSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:true,
        dropDups:true
    },
    icon: String,
    link: String
});

var saeMenu = mongoose.model('saeMenu',saeMenuSchema);


var cardsSchema = new Schema({
    title: String,
    imgUrl: String,
    content: String
})

var cards = mongoose.model('cards',cardsSchema);

var diplomasSchema = new Schema({
    titleButton: String,
    iconButton: String,
    content: String
})

var diplomas = mongoose.model('diplomas',diplomasSchema);

var shortCoursesSchema = new Schema({
    titleButton: String,
    iconButton: String,
    content: String
})	

var shortCourses = mongoose.model('shortCourses',shortCoursesSchema);


module.exports = {
    admin:admin,
    saeMenu:saeMenu,
    cards:cards,
    diplomas:diplomas
}
