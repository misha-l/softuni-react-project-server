const seeder = require('mongoose-seed');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

// Connect to MongoDB via Mongoose
seeder.connect("mongodb://127.0.0.1:27017/competition", function() {
 
  // Load Mongoose models
  seeder.loadModels([
    'models/submission.js',
    'models/user.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['submission', 'user'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'user',
        'documents': [
          {
            "_id" : ObjectId("605f262bcca6bb3598ddb6de"),
            "email" : "mkrusharska@gmail.com",
            "password" : "$2a$10$Ch3OYENyFlP/zrbuCkP/vuGpSKQudYLeN/32DmzJpLm7aeHR1d6OK",
            "__v" : 0
        },
        {
            "_id" : ObjectId("606499670af6930fdc20f438"),
            "email" : "misha@ebusiness.bg",
            "password" : "$2a$10$X2AQNqmmiaOHnWjjiaR/M.PVzsGdaEuLFj49Bo6J7G3qfFvXQ58iW",
            "__v" : 0
        },
        {
            "_id" : ObjectId("606499d20af6930fdc20f439"),
            "email" : "iva@gmail.com",
            "password" : "$2a$10$QPd/fuaSWA5gQlTNCDwMp..PcATZiJLsSQPtfDpwSJ3UlYVt6JLcm",
            "__v" : 0
        }
        ]
    }, 
    {
      'model': 'submission',
      'documents': [
        {
            "_id" : ObjectId("605f16eda76a6242fcd7117d"),
            "likes" : [ 
                ObjectId("605e07749f62e02008d58866"), 
                ObjectId("605e07749f62e02008d58866"), 
                ObjectId("605e07749f62e02008d58866"), 
                ObjectId("606499d20af6930fdc20f439"), 
                ObjectId("605f262bcca6bb3598ddb6de")
            ],
            "authorName" : "Стоян",
            "authorAge" : 40,
            "authorPlace" : "София",
            "image" : "https://ikeaplay.bg/uf/gallery/4593/i_3c6e3786-783d-437a-a8b7-341fa4165900.jpeg",
            "description" : "Super Aple",
            "creator" : ObjectId("605e07749f62e02008d58866"),
            "__v" : 0
        },
        {
            "_id" : ObjectId("605f4265a69eaa2d34f808f1"),
            "likes" : [ 
                ObjectId("605f262bcca6bb3598ddb6de")
            ],
            "authorName" : "Илияната",
            "authorAge" : 112,
            "authorPlace" : "София",
            "image" : "https://ikeaplay.bg/uf/gallery/4298/i_20201122-142523.jpg",
            "description" : "Грифон паун",
            "creator" : ObjectId("605f262bcca6bb3598ddb6de"),
            "__v" : 0
        },
        {
            "_id" : ObjectId("605f42ada69eaa2d34f808f2"),
            "likes" : [ 
                ObjectId("605f262bcca6bb3598ddb6de")
            ],
            "authorName" : "Пипитоу",
            "authorAge" : 8,
            "authorPlace" : "Враца",
            "image" : "https://ikeaplay.bg/uf/gallery/4225/i_img-20201122-120412.jpg",
            "description" : "Кончето на Пипи",
            "creator" : ObjectId("605f262bcca6bb3598ddb6de"),
            "__v" : 0
        }, 
        {
            "_id" : ObjectId("605f432ca69eaa2d34f808f3"),
            "likes" : [],
            "authorName" : "Марийка",
            "authorAge" : 7,
            "authorPlace" : "Търговище",
            "image" : "https://ikeaplay.bg//uf/gallery/3685/i_img-20201121-111441.jpg",
            "description" : "Пипи дългото чорапче.",
            "creator" : ObjectId("605f262bcca6bb3598ddb6de"),
            "__v" : 0
        }, 
        {
            "_id" : ObjectId("605f576a02d3b618cc013087"),
            "likes" : [ 
                ObjectId("605f262bcca6bb3598ddb6de")
            ],
            "authorName" : "Радо",
            "authorAge" : 5,
            "authorPlace" : "Враца",
            "image" : "https://ikeaplay.bg/uf/gallery/3683/i_20201121-111041.jpg",
            "description" : "Крокодила Гена",
            "creator" : ObjectId("605f262bcca6bb3598ddb6de"),
            "__v" : 0
        }, 
        {
            "_id" : ObjectId("60618df747614d3458fbef59"),
            "likes" : [ 
                ObjectId("605f262bcca6bb3598ddb6de")
            ],
            "authorName" : "Самоковски картоф",
            "authorAge" : 39,
            "authorPlace" : "Говедарци",
            "image" : "https://ikeaplay.bg/uf/gallery/4593/i_3c6e3786-783d-437a-a8b7-341fa4165900.jpeg",
            "description" : "проба проба",
            "creator" : ObjectId("60618cdd4dab59310468ba39"),
            "__v" : 0
        },
        {
            "_id" : ObjectId("6061bf50d525cc187c54cd35"),
            "likes" : [ 
                ObjectId("605f262bcca6bb3598ddb6de"), 
                ObjectId("60618cdd4dab59310468ba39")
            ],
            "authorName" : "Кънчо",
            "authorAge" : 44,
            "authorPlace" : "София",
            "image" : "https://media.npr.org/assets/img/2013/05/01/hires1_sq-279ebd18a38e055bcbe1e310cf85e61e142614ab-s600-c85.jpg",
            "description" : "Летящо прасе",
            "creator" : ObjectId("60618cdd4dab59310468ba39"),
            "__v" : 0
        }
      ]
  }
];