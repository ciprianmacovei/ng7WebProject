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
    link: String,
    submenu: {
        type:[{
            name:{
                type:String,
                required:true
            },
            link:{
                type:String,
                required:true
            }
        }]
    }
});

var saeMenu = mongoose.model('saeMenu',saeMenuSchema);


var cardsSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    imgUrl: {
        type:String,
    },
    content: {
        type:String,
        required: true
    }
   
})

var cards = mongoose.model('cards',cardsSchema);

var diplomasSchema = new Schema({
    titleButton: {
        type:String,
        required:true,
        unique:true,
        dropDups:true
    },
    iconButton: {
        type:String,
        required:true
    }
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
