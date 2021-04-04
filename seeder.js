const seeder = require("mongoose-seed");
const mongoose = require("mongoose");
const Types = mongoose.Types;
const { ObjectId } = Types;

/**
 * the seeder is currently set for local backend only
 * images domain is hardcoded to http://localhost:3090/
 */

// Connect to MongoDB via Mongoose
seeder.connect("mongodb://127.0.0.1:27017/competition_app", function () {
  // Load Mongoose models
  seeder.loadModels(["models/submission.js", "models/user.js"]);

  // Clear specified collections
  seeder.clearModels(["submission", "user"], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: "user",
    documents: [
      {
        _id: ObjectId("605f262bcca6bb3598ddb6de"),
        email: "mkrusharska@gmail.com",
        password:
          "$2a$10$Ch3OYENyFlP/zrbuCkP/vuGpSKQudYLeN/32DmzJpLm7aeHR1d6OK",
        __v: 0,
      },
      {
        _id: ObjectId("60618cdd4dab59310468ba39"),
        email: "stoyan@krusharski.com",
        password:
          "$2a$10$cSERohj78t9LVUNKs6tdmeoDfSwl.55wnQ1o69NphZtFOQSCyP5Ou",
        __v: 0,
      },
      {
        _id: ObjectId("606499670af6930fdc20f438"),
        email: "misha@ebusiness.bg",
        password:
          "$2a$10$X2AQNqmmiaOHnWjjiaR/M.PVzsGdaEuLFj49Bo6J7G3qfFvXQ58iW",
        __v: 0,
      },
      {
        _id: ObjectId("606499d20af6930fdc20f439"),
        email: "iva@gmail.com",
        password:
          "$2a$10$QPd/fuaSWA5gQlTNCDwMp..PcATZiJLsSQPtfDpwSJ3UlYVt6JLcm",
        __v: 0,
      },
      {
        _id: ObjectId("606822c0ef29d81b3092f4d2"),
        email: "alabala@alabala.com",
        password:
          "$2a$10$lCy.vIIkvr2yvxH3C9tibOwpyElh57vbpQOdqaCVlyfYUBpI8l9hS",
        __v: 0,
      },
      {
        _id: ObjectId("6068c3e34b5de740a4000a46"),
        email: "kalina-angelova@gmail.com",
        password:
          "$2a$10$IdF3wf0UkX47EBbYauEuMuV4BsFLrvhOB.08iFZddYu0nGpCXAWT2",
        __v: 0,
      },
      {
        _id: ObjectId("6068c45f4b5de740a4000a48"),
        email: "tdamyanov@gmail.com",
        password:
          "$2a$10$uyOIdx/.Oz/5JYrEclabCegXiU0MVY5OTrWLTeRp1rjYWZeOmYdcC",
        __v: 0,
      },
      {
        _id: ObjectId("6068c5364b5de740a4000a4b"),
        email: "ptodorov@gmail.com",
        password:
          "$2a$10$pT.mgSDeY0mYJt1pJ3lu1.zM0aeQA2S0P6gy7JvfQCR3aI6KGdaeS",
        __v: 0,
      },
      {
        _id: ObjectId("6068c5fc4b5de740a4000a4d"),
        email: "milenakrasimirova@gmail.com",
        password:
          "$2a$10$OLL1KdZvEB8489a9kACqhOCE6pYP.G8xuKEKcmZVIVSOsCWyqdR7e",
        __v: 0,
      },
      {
        _id: ObjectId("6068c6894b5de740a4000a4f"),
        email: "aigov@gmail.com",
        password:
          "$2a$10$iU.Z1/C6rLvVCy02odNxAeLVo0Gp4AuDY.QgcDZCbjJQkhS2K7QTO",
        __v: 0,
      },
      {
        _id: ObjectId("6068c6ed4b5de740a4000a51"),
        email: "uchitelka54sou@gmail.com",
        password:
          "$2a$10$8NNJQ6FjkgAIeG8g9cureuVHj90HhcC5QP5BWiYKlDdQIxHwT3N6e",
        __v: 0,
      },
      {
        _id: ObjectId("6068c9094b5de740a4000a59"),
        email: "kamenvodenicharov@gmail.com",
        password:
          "$2a$10$1Q9CbAv0WtIG0NzlNlw5G.omY16Fz4EtCPakX8ruf59eB20IzD6TG",
        __v: 0,
      },
      {
        _id: ObjectId("6068ca084b5de740a4000a5b"),
        email: "blagopopchev@gmail.com",
        password:
          "$2a$10$A0bRZtrk3A0ZCFrbPQRm7eXSUTf1xyR0wE/pFSP1nL8hth2DpYOV2",
        __v: 0,
      },
      {
        _id: ObjectId("6068cabf4b5de740a4000a5e"),
        email: "galinakrusteva@gmail.com",
        password:
          "$2a$10$JRX4BjVldPkvq64hYzNsXO33d4OptbtwCSgX2.XNKFT0tcxDQK5hW",
        __v: 0,
      },
      {
        _id: ObjectId("6068cb9b4b5de740a4000a61"),
        email: "anamartinova@gmail.com",
        password:
          "$2a$10$ev7mPllbBfTFW/Lxcp5KvuZtuJPLfYIxBi7SGmkJlJlIZ4FNb608i",
        __v: 0,
      },
      {
        _id: ObjectId("6068cc4a4b5de740a4000a63"),
        email: "kalinakrasimirova@gmail.com",
        password:
          "$2a$10$3r7afJ.uIUEl2nVVlB3T1OXTEX24hVxS6FTAhOjX1k3.HUQ511J/i",
        __v: 0,
      },
      {
        _id: ObjectId("6068cc794b5de740a4000a64"),
        email: "nikoletalilova@gmail.com",
        password:
          "$2a$10$B2jAVQJTrM6NfBKljkz6QuPWnWyBdxBonz.Gr6HpulcXP/m4elxoO",
        __v: 0,
      },
      {
        _id: ObjectId("6068ccec4b5de740a4000a66"),
        email: "polinabelcheva@gmail.com",
        password:
          "$2a$10$2ExaQi9t9plSNM8OYCI.Y.iPfel9SpFJzSpjDchFLQi7TiHc.qT4y",
        __v: 0,
      },
      {
        _id: ObjectId("6068cd9d4b5de740a4000a69"),
        email: "galinamihailova@gmail.com",
        password:
          "$2a$10$bClGocDvl1WZ0LlzWft8ru3h13QPqtLaujiggAcqA5xHlxKLu4en.",
        __v: 0,
      },
      {
        _id: ObjectId("6068ce364b5de740a4000a6c"),
        email: "petarpetrov@gmail.com",
        password:
          "$2a$10$o/TyhGQ7mREBGy63FfYspeAJ9dsGyIHRtntOjujemPTxGNQ7DxEJu",
        __v: 0,
      },
      {
        _id: ObjectId("6068e54e7d55f2312cfe20b4"),
        email: "proba@gmail.com",
        password:
          "$2a$10$KHSOhVyCc31ck7L23UY7BecfiX0ClMu2KJBCpoGJwgYOt1Kg.u0lW",
        __v: 0,
      },
      {
        _id: ObjectId("6068e5b07d55f2312cfe20b5"),
        email: "proba2@gmail.com",
        password:
          "$2a$10$tSlZRpeozU5aKS5La5aNBOwhHCRujLVVIbeomOVvHKCbMeI8CPkpu",
        __v: 0,
      },
    ],
  },
  {
    model: "submission",
    documents: [
      {
        _id: ObjectId("6068c2bf4b5de740a4000a42"),
        likes: [
          ObjectId("6068c5fc4b5de740a4000a4d"),
          ObjectId("6068c6894b5de740a4000a4f"),
          ObjectId("6068c6ed4b5de740a4000a51"),
          ObjectId("6068ca084b5de740a4000a5b"),
          ObjectId("6068ce364b5de740a4000a6c"),
          ObjectId("605f262bcca6bb3598ddb6de"),
        ],
        authorName: "Мария Стефанова",
        authorAge: 11,
        authorPlace: "София",
        image:
          "http://localhost:3090/images/1617478297329-BeautyandBeastDancingLea.jpg",
        description: "Илюстрация по приказката Красавицата и звяра.",
        creator: ObjectId("605f262bcca6bb3598ddb6de"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c3674b5de740a4000a44"),
        likes: [ObjectId("6068ce364b5de740a4000a6c")],
        authorName: "Мария Стефанова",
        authorAge: 11,
        authorPlace: "София",
        image:
          "http://localhost:3090/images/1617478484604-children-s-drawings-three-little-pigs-40425486.jpg",
        description: "Илюстрация по приказката за трите прасенца.",
        creator: ObjectId("605f262bcca6bb3598ddb6de"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c38a4b5de740a4000a45"),
        likes: [
          ObjectId("6068c3e34b5de740a4000a46"),
          ObjectId("6068c45f4b5de740a4000a48"),
          ObjectId("6068c5fc4b5de740a4000a4d"),
          ObjectId("6068c6894b5de740a4000a4f"),
          ObjectId("6068c6ed4b5de740a4000a51"),
          ObjectId("6068ca084b5de740a4000a5b"),
          ObjectId("6068cabf4b5de740a4000a5e"),
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("6068cc794b5de740a4000a64"),
          ObjectId("6068ccec4b5de740a4000a66"),
          ObjectId("6068cd9d4b5de740a4000a69"),
          ObjectId("6068ce364b5de740a4000a6c"),
          ObjectId("605f262bcca6bb3598ddb6de"),
        ],
        authorName: "Пламена Стефанова",
        authorAge: 9,
        authorPlace: "София",
        image:
          "http://localhost:3090/images/1617478525533-i_img-20201121-111441.jpg",
        description: "Пипи дългото чорапче.",
        creator: ObjectId("605f262bcca6bb3598ddb6de"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c4084b5de740a4000a47"),
        likes: [
          ObjectId("6068c3e34b5de740a4000a46"),
          ObjectId("6068c45f4b5de740a4000a48"),
          ObjectId("6068c5fc4b5de740a4000a4d"),
          ObjectId("6068c6894b5de740a4000a4f"),
          ObjectId("6068c6ed4b5de740a4000a51"),
          ObjectId("6068ca084b5de740a4000a5b"),
          ObjectId("6068cabf4b5de740a4000a5e"),
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("6068cc794b5de740a4000a64"),
          ObjectId("6068ccec4b5de740a4000a66"),
          ObjectId("6068cd9d4b5de740a4000a69"),
          ObjectId("6068ce364b5de740a4000a6c"),
        ],
        authorName: "Мирослава Ангелова",
        authorAge: 7,
        authorPlace: "Враца",
        image:
          "http://localhost:3090/images/1617478657146-24405e8f8ef280d6f4c19645bc177488.jpg",
        description: "Рапунцел",
        creator: ObjectId("6068c3e34b5de740a4000a46"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c50a4b5de740a4000a4a"),
        likes: [
          ObjectId("6068c45f4b5de740a4000a48"),
          ObjectId("6068c5fc4b5de740a4000a4d"),
          ObjectId("6068c6894b5de740a4000a4f"),
          ObjectId("6068c6ed4b5de740a4000a51"),
          ObjectId("6068ca084b5de740a4000a5b"),
          ObjectId("6068cabf4b5de740a4000a5e"),
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("6068cc794b5de740a4000a64"),
          ObjectId("6068ccec4b5de740a4000a66"),
          ObjectId("6068cd9d4b5de740a4000a69"),
          ObjectId("6068ce364b5de740a4000a6c"),
        ],
        authorName: "Калоян Дамянов",
        authorAge: 8,
        authorPlace: "Горна Оряховица",
        image:
          "http://localhost:3090/images/1617478912312-illustration-story-tale-antoine-de-saint-exupéry-little-prince-children-s-drawing-191812539.jpg",
        description: "Малкият принц",
        creator: ObjectId("6068c45f4b5de740a4000a48"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c5b34b5de740a4000a4c"),
        likes: [ObjectId("6068cabf4b5de740a4000a5e")],
        authorName: "Теодор Тодоров",
        authorAge: 13,
        authorPlace: "София",
        image:
          "http://localhost:3090/images/1617479005432-23856002-kid-drawing-landscape-house-trees-from-fairytale-illustration.jpg",
        description: "Приказка за селото",
        creator: ObjectId("6068c5364b5de740a4000a4b"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c6354b5de740a4000a4e"),
        likes: [
          ObjectId("6068c5fc4b5de740a4000a4d"),
          ObjectId("6068c6ed4b5de740a4000a51"),
        ],
        authorName: "Таня Красимирова",
        authorAge: 7,
        authorPlace: "Търговище",
        image:
          "http://localhost:3090/images/1617479204584-c76553ec4200814d84e9547db6acf663.jpg",
        description: "Принцесата и граховото зърно.",
        creator: ObjectId("6068c5fc4b5de740a4000a4d"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c6ae4b5de740a4000a50"),
        likes: [
          ObjectId("6068c6894b5de740a4000a4f"),
          ObjectId("6068c6ed4b5de740a4000a51"),
          ObjectId("6068ca084b5de740a4000a5b"),
          ObjectId("6068cabf4b5de740a4000a5e"),
          ObjectId("6068cc794b5de740a4000a64"),
          ObjectId("6068ccec4b5de740a4000a66"),
          ObjectId("6068ce364b5de740a4000a6c"),
          ObjectId("605f262bcca6bb3598ddb6de"),
        ],
        authorName: "Боян Игов",
        authorAge: 10,
        authorPlace: "София",
        image:
          "http://localhost:3090/images/1617479332269-611vsPCCpHL._AC_SL1200_.jpg",
        description: "Котаракът в чизми",
        creator: ObjectId("6068c6894b5de740a4000a4f"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c79d4b5de740a4000a53"),
        likes: [
          ObjectId("6068c6ed4b5de740a4000a51"),
          ObjectId("6068ca084b5de740a4000a5b"),
          ObjectId("6068cabf4b5de740a4000a5e"),
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("6068ce364b5de740a4000a6c"),
          ObjectId("605f262bcca6bb3598ddb6de"),
        ],
        authorName: "Илияна",
        authorAge: 11,
        authorPlace: "Пловдив",
        image:
          "http://localhost:3090/images/1617479575004-1cf74481b631505c6b79ca0ae66832fb.jpg",
        description: "Питър Пан",
        creator: ObjectId("6068c6ed4b5de740a4000a51"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c7ce4b5de740a4000a54"),
        likes: [ObjectId("605f262bcca6bb3598ddb6de")],
        authorName: "Николай Христов",
        authorAge: 11,
        authorPlace: "Пловдив",
        image:
          "http://localhost:3090/images/1617479618537-78613113-vector-sketches-with-characters-of-little-red-riding-hood-fairy-tale-wolf-grandmother-girl-and-woodc copy.jpg",
        description: "Червената Шапчица",
        creator: ObjectId("6068c6ed4b5de740a4000a51"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c8a84b5de740a4000a57"),
        likes: [
          ObjectId("6068cabf4b5de740a4000a5e"),
          ObjectId("6068cb9b4b5de740a4000a61"),
        ],
        authorName: "Никол Иванова",
        authorAge: 11,
        authorPlace: "Пловдив",
        image:
          "http://localhost:3090/images/1617479839316-d439b8-20191009-classical-kids-storytime-hansel-and-gretel-09 copy.jpg",
        description: "Хензел и Гретел",
        creator: ObjectId("6068c6ed4b5de740a4000a51"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c8d24b5de740a4000a58"),
        likes: [
          ObjectId("6068ca084b5de740a4000a5b"),
          ObjectId("6068cabf4b5de740a4000a5e"),
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("6068ce364b5de740a4000a6c"),
          ObjectId("605f262bcca6bb3598ddb6de"),
        ],
        authorName: "Марияна Трифонова",
        authorAge: 11,
        authorPlace: "Пловдив",
        image:
          "http://localhost:3090/images/1617479884610-KidsArtContestRapunzel.jpg",
        description: "Рапунцел",
        creator: ObjectId("6068c6ed4b5de740a4000a51"),
        __v: 0,
      },
      {
        _id: ObjectId("6068c9334b5de740a4000a5a"),
        likes: [
          ObjectId("6068ca084b5de740a4000a5b"),
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("6068cd9d4b5de740a4000a69"),
          ObjectId("6068ce364b5de740a4000a6c"),
        ],
        authorName: "Тея Воденичарова",
        authorAge: 11,
        authorPlace: "Добрич",
        image:
          "http://localhost:3090/images/1617479975120-47544a-20190201-the-mouse-and-the-lion-06.jpg",
        description: "Лъвът и мишката",
        creator: ObjectId("6068c9094b5de740a4000a59"),
        __v: 0,
      },
      {
        _id: ObjectId("6068ca404b5de740a4000a5c"),
        likes: [
          ObjectId("6068ca084b5de740a4000a5b"),
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("605f262bcca6bb3598ddb6de"),
        ],
        authorName: "Боян Попчев",
        authorAge: 11,
        authorPlace: "Харманли",
        image:
          "http://localhost:3090/images/1617480243073-illustration-tale-h-k-anderesena-snow-queen-child-s-drawing-175726674.jpg",
        description: "Снежната кралица",
        creator: ObjectId("6068ca084b5de740a4000a5b"),
        __v: 0,
      },
      {
        _id: ObjectId("6068ca9b4b5de740a4000a5d"),
        likes: [ObjectId("6068e5b07d55f2312cfe20b5")],
        authorName: "Галя Попчева",
        authorAge: 8,
        authorPlace: "Варна",
        image:
          "http://localhost:3090/images/1617480331739-kids-paintings-little-mermaid-family-living-ocean-kids-paintings-little-mermaid-family-living-ocean-186872421.jpg",
        description: "Русалки",
        creator: ObjectId("6068ca084b5de740a4000a5b"),
        __v: 0,
      },
      {
        _id: ObjectId("6068caed4b5de740a4000a5f"),
        likes: [
          ObjectId("6068cabf4b5de740a4000a5e"),
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("6068cc794b5de740a4000a64"),
          ObjectId("6068ccec4b5de740a4000a66"),
          ObjectId("6068cd9d4b5de740a4000a69"),
          ObjectId("6068ce364b5de740a4000a6c"),
          ObjectId("605f262bcca6bb3598ddb6de"),
        ],
        authorName: "София Кръстева",
        authorAge: 5,
        authorPlace: "Самоков",
        image: "http://localhost:3090/images/1617480421661-download.jpg",
        description: "Малката Русалка",
        creator: ObjectId("6068cabf4b5de740a4000a5e"),
        __v: 0,
      },
      {
        _id: ObjectId("6068cb5d4b5de740a4000a60"),
        likes: [
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("6068cc794b5de740a4000a64"),
          ObjectId("6068cd9d4b5de740a4000a69"),
        ],
        authorName: "Никола Кръстев",
        authorAge: 7,
        authorPlace: "Самоков",
        image: "http://localhost:3090/images/1617480532259-maxresdefault.jpg",
        description: "Лъвът и мишката",
        creator: ObjectId("6068cabf4b5de740a4000a5e"),
        __v: 0,
      },
      {
        _id: ObjectId("6068cbd54b5de740a4000a62"),
        likes: [
          ObjectId("6068cb9b4b5de740a4000a61"),
          ObjectId("6068e5b07d55f2312cfe20b5"),
        ],
        authorName: "Ана Мария Аурел",
        authorAge: 13,
        authorPlace: "Русе",
        image:
          "http://localhost:3090/images/1617480649980-illustration-lewis-carroll-s-fairy-tale-adventures-alice-wonderland-children-drawing-192480777.jpg",
        description: "Алиса в страната на чудесата",
        creator: ObjectId("6068cb9b4b5de740a4000a61"),
        __v: 0,
      },
      {
        _id: ObjectId("6068ccb14b5de740a4000a65"),
        likes: [],
        authorName: "Дарина Лилова",
        authorAge: 5,
        authorPlace: "София",
        image:
          "http://localhost:3090/images/1617480866213-snow-white-seven-dwarfs-children-drawing-illustration-199658791.jpg",
        description: "Снежанка и седемте джуджета",
        creator: ObjectId("6068cc794b5de740a4000a64"),
        __v: 0,
      },
      {
        _id: ObjectId("6068cd384b5de740a4000a67"),
        likes: [
          ObjectId("6068cd9d4b5de740a4000a69"),
          ObjectId("6068ce364b5de740a4000a6c"),
        ],
        authorName: "Сава Белчев",
        authorAge: 5,
        authorPlace: "Хасково",
        image: "http://localhost:3090/images/1617481006524-IMG_0313.jpeg",
        description: "Трите прасенца",
        creator: ObjectId("6068ccec4b5de740a4000a66"),
        __v: 0,
      },
      {
        _id: ObjectId("6068cd754b5de740a4000a68"),
        likes: [ObjectId("6068cd9d4b5de740a4000a69")],
        authorName: "Кристина Белчева",
        authorAge: 13,
        authorPlace: "Хасково",
        image: "http://localhost:3090/images/1617481063018-SnowWhiteBed.jpg",
        description: "Снежанка и седемте джуджета",
        creator: ObjectId("6068ccec4b5de740a4000a66"),
        __v: 0,
      },
      {
        _id: ObjectId("6068cdd24b5de740a4000a6a"),
        likes: [ObjectId("6068cd9d4b5de740a4000a69")],
        authorName: "Мартин Петков",
        authorAge: 12,
        authorPlace: "София",
        image:
          "http://localhost:3090/images/1617481164964-raf,750x1000,075,t,FFFFFF_97ab1c12de.u1.jpg",
        description: "Пинокио",
        creator: ObjectId("6068cd9d4b5de740a4000a69"),
        __v: 0,
      },
      {
        _id: ObjectId("6068cdf14b5de740a4000a6b"),
        likes: [],
        authorName: "Кристина Петкова",
        authorAge: 8,
        authorPlace: "София",
        image:
          "http://localhost:3090/images/1617481193898-2361f1-20191114-classical-kids-storytime-cinderella-12.jpg",
        description: "Пепеляшка",
        creator: ObjectId("6068cd9d4b5de740a4000a69"),
        __v: 0,
      },
      {
        _id: ObjectId("6068ce7a4b5de740a4000a6d"),
        likes: [ObjectId("6068ce364b5de740a4000a6c")],
        authorName: "Ева Петрова",
        authorAge: 6,
        authorPlace: "Бургас",
        image:
          "http://localhost:3090/images/1617481320150-Fairytale-House-1-1024x791.jpg",
        description: "Приказен замък",
        creator: ObjectId("6068ce364b5de740a4000a6c"),
        __v: 0,
      },
      {
        _id: ObjectId("6068d5327d55f2312cfe20b3"),
        likes: [ObjectId("605f262bcca6bb3598ddb6de")],
        authorName: "Илияна Петроваа",
        authorAge: 5,
        authorPlace: "София",
        image:
          "http://localhost:3090/images/1617483053758-i_img-20201122-175930442.jpg",
        description: "Ламята от приказката за тримата братя и златната ябълка.",
        creator: ObjectId("605f262bcca6bb3598ddb6de"),
        __v: 0,
      },
    ],
  },
];
