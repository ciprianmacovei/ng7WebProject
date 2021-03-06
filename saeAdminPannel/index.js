var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var model = require('./schemas');
var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost/sae', {
  useNewUrlParser: true
});

var db = mongoose.connection;



app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type", "application/json");
  next();
});




app.get('/', function (req, res) {

  // let updateName = req.body.updateName;
  // let name = req.body.name;
  // let icon = req.body.icon;
  // let link = req.body.link;

  model.saeMenu.findOneAndUpdate({
    'name': 'About'
  }, {
      'submenu': [
        {
          name: 'Our Mission',
          link: 'mision'
        },
        {
          name: 'Our History',
          link: 'history'
        },
        {
          name: 'Student Showcase',
          link: 'student'
        },
        {
          name: 'FAQ',
          link: 'faq'
        },
        {
          name: 'Interviews',
          link: 'interviews'
        },
        {
          name: 'Jobs',
          link: 'jobs'
        },
        {
          name: 'Campus Pictures',
          link: 'campus'
        }, {
          name: 'Open Day',
          link: 'open'
        }
      ]
    }, function (err, update) {
      if (err) throw err;
      else {
        res.send(update);
      }
    })




  // res.send('Hello World');
  // var newAdmin = new model.diplomas({
  //   titleButton: 'Animatie 3D in Autodesk 3Ds Max',
  //   iconButton: 'photo_library'
  // })

  // newAdmin.save(function (err, newadmin) {
  //   if (err) console.error(err);
  //   else console.log(newAdmin.titleButton, " has been added");
  // })
})


// @@@@@@@@@@@@@@@ DIPLOMAS HOMEPAGE @@@@@@@@@@@@@@@@@


// GET DIPLOMAS

app.get('/getDiplomas', function (req, res) {
  model.diplomas.find({}, function (err, diplomasArray) {
    if (err) throw err;
    else {
      res.send(diplomasArray);
    }
  })
});

// GET DIPLOMAS


// ADD DIPLOMAS

app.post('/addDiplomas', function (req, res) {
  let newDiploma = new model.diplomas(req.body)
  newDiploma.save(function (err, diploma) {
    if (err) throw err;
    else console.log(' has beed added');
  })
});

// ADD DIPLOMAS






// @@@@@@@@@@@@@@@ DIPLOMAS HOMEPAGE @@@@@@@@@@@@@@@@@













// @@@@@@@@@@@@@@@ CARDS HOMEPAGE @@@@@@@@@@@@@@@@@



// UPDATE CARD

app.post('/updateCard', function (req, res) {
  let card = req.body;

  model.cards.findOneAndUpdate({ '_id': card._id }, card,
    function (err, update) {
      if (err) throw err;
      else res.send(update);
    })
});

// UPDATE CARD



// DELETE CARD

app.post('/deleteCard', function (req, res) {
  let card = req.body;
  model.cards.find({ 'title': card.title, 'imgUrl': card.imgUrl, 'content': card.content }, function (err, card) {
    if (err) throw err;
    else res.send(card);
  }).remove().exec();
})

// DELETE CARD



// GET CARDS 

app.get('/getCards', function (req, res) {
  model.cards.find({}, function (err, cards) {
    if (err) throw err;
    else {
      res.send(cards);
    }
  })
})

// GET CARDS 


// ADD CARD

app.post('/addCards', function (req, res) {
  let newCard = new model.cards(req.body)
  newCard.save(function (err, card) {
    if (err) throw err;
    else console.log(card.title, ' has beed added');
  })
})

// ADD CARD



// @@@@@@@@@@@@@@@ CARDS HOMEPAGE @@@@@@@@@@@@@@@@@







// @@@@@@@@@@@@@@@ BUTOONS MENU START @@@@@@@@@@@@@@@@@

//LOGIN ADMIN PANEL

app.post('/adminLogin', function (req, res) {

  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;

  model.admin.findOne({
    username,
    password
  }, function (err, person) {
    if (err) {
      console.log(err);
    } else {
      res.send(person);
    }
  });

})


//UPDATE BUTTON


app.post('/updateButton', function (req, res) {
  console.log(req.body);
  let updateName = req.body.updateName;
  let name = req.body.name;
  let icon = req.body.icon;
  let link = req.body.link;

  model.saeMenu.findOneAndUpdate({
    'name': updateName
  }, {
      'name': name,
      'icon': icon,
      'link': link
    }, function (err, update) {
      if (err) throw err;
      else {
        res.send(update);
      }
    })
})



//ADD BUTTONS

app.post('/addMenuButton', function (req, res) {
  let newB = new model.saeMenu(req.body)
  newB.save(function (err, newB) {
    if (err) console.log(err);
    else console.log(newB.name, 'has been added');

  })
})

//DELETE BUTTON

app.post('/deleteButton', function (req, res) {
  let numeButton = req.body.nume;
  model.saeMenu.find({
    name: numeButton
  }, function (err, button) {
    if (err) {
      res.send(false);
      throw err;
    } else {
      console.log('remove button selected', button.name);
      res.send(true);
    }
  }).remove().exec();

})


//GET MENU BUTTONS

app.get('/getMenuItems', function (req, res) {
  model.saeMenu.find({}, function (err, array) {
    if (err) throw err;
    else {
      res.send(array);
    }
  });
})

// @@@@@@@@@@@@@@@ BUTOONS MENU END @@@@@@@@@@@@@@@@@



var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
