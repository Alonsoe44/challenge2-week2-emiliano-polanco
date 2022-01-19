/* eslint-disable no-use-before-define */
const Questions = [
  {
    letter: "a",
    answer: "abducir",
    status: "waiting",
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: "waiting",
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: "waiting",
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: "waiting",
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: "waiting",
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: "waiting",
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: "waiting",
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: "waiting",
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: "waiting",
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: "waiting",
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: "waiting",
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: "waiting",
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: "waiting",
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: "waiting",
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: "waiting",
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: "waiting",
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: "waiting",
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: "waiting",
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  {
    letter: "r",
    answer: "raton",
    status: "waiting",
    question: "CON LA R. Roedor",
  },
  {
    letter: "s",
    answer: "stackoverflow",
    status: "waiting",
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: "waiting",
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: "waiting",
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: "waiting",
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: "waiting",
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: "waiting",
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: "waiting",
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: "waiting",
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const QuestionBank = [
  {
    answer: "adiestrar",
    question: "CON LA A. Educar a un animal, ensenarle una habilidad o truco",
  },
  {
    answer: "bicicleta",
    question: "CON LA B. Medio de transporte ecologico con 2 ruedas",
  },
  {
    answer: "cangrejo",
    question: "CON LA C. Camina de lado a lado y tiene un exoesqueleto ",
  },
  {
    answer: "dado",
    question: "CON LA D. Tiene 6 caras y es perfecto para juegos de mesa",
  },
  {
    answer: "elefante",
    question: "CON LA E. Mamifero con el mayor tiempo de gestacion",
  },
  { answer: "f", question: "CON LA F. Press ... to pay respect" },
  {
    answer: "gravedad",
    question: "CON LA G. Una constante no tan constante en la tierra 9.81m/s",
  },
  {
    answer: "hentai",
    question:
      "CON LA H. Subgenero del anime con gran precencia en la comunidad otaku que involucra tentaculos",
  },
  {
    answer: "intriseco",
    question: "CON LA I. Que es propio y  parte del mismo",
  },
  {
    answer: "jaguar",
    question: "CON LA J.Como estas en ingles, animal How are ",
  },
  {
    answer: "karate",
    question:
      "CON LA K. Arte milenario de japon que consiste en partir tablas HA IA ",
  },
  { answer: "Lima", question: "CON LA L. Capital de Peru" },
  {
    answer: "Martes",
    question: "CON LA M. El dia de ayer si hoy es miercoles QUE DIFICIL",
  },
  {
    answer: "net",
    question:
      "CON LA N. En tennis si tu golpe se queda en medio del campo se quedo en la ....",
  },
  {
    answer: "n",
    question: "CONTIENE LA Ñ. Tecla que no se encuentra en los teclados",
  },
  { answer: "oso", question: "CON LA O. El mejor amigo de Masha" },
  {
    answer: "pan",
    question: "CON LA P. Todo buen bocadillo necesita 2 debanadas de ...",
  },
  { answer: "q", question: "CON LA Q. La primera letra de un teclado QWERTY" },
  {
    answer: "ra",
    question: "CON LA R. Onomatopeya del poderosisimo faraon LoveShady",
  },
  {
    answer: "sopa",
    question:
      "CON LA S. Junta agua pollo un poco de verduras y sirvelas en un plato",
  },
  {
    answer: "tetris",
    question:
      "CON LA T. El videojuego mas vendido del mundo despues de minecraft",
  },
  {
    answer: "ursula",
    question: "CON LA U. La mas mala de las malas en la Pelicula La sirenita",
  },
  {
    answer: "victoria",
    question:
      "CON LA V. Aparece 1 de cada 10 partidas en League of Legends, la pantalla de .. ",
  },
  {
    answer: "war",
    question: "CONTIENE LA W. When two conuntrys are fighint there's a ...",
  },
  {
    answer: "xilofono",
    question:
      "CONTIENE LA X. Instrumento de percusion perfecto para ritmos tropicales",
  },
  {
    answer: "yunque",
    question: "CONTIENE LA Y. Usado en forjas y el favorito de Tom y Jerry",
  },
  {
    answer: "zorro",
    question:
      "CON LA Z. Prueba de ingles.. pencil es a lapiz como fox es a ....",
  },
];
// Global Variables
let end = false;
let correctAnswers = 0;
// Functions
function prepareRandomQuestions() {
  for (let i = 0; i < Questions.length; i++) {
    if (parseInt(Math.random() * 2, 10) === 1) {
      Questions[i].question = QuestionBank[i].question;
      Questions[i].answer = QuestionBank[i].answer;
    }
  }
}
function startGame() {
  IniciateRound();
  cleanWrongAnswers();
  if (!end && Questions.length !== 0) {
    startGame();
  }
}
function IniciateRound() {
  for (let i = 0; i < Questions.length; i++) {
    if (end) {
      break;
    }
    askQuestionX(i);
  }
}
function askQuestionX(i) {
  const userAnswer = window.prompt(Questions[i].question).toLowerCase();
  if (userAnswer === Questions[i].answer) {
    Questions[i].status = "correct";
    correctAnswers++;
    console.log("Correct");
  } else if (userAnswer === "pasapalabra") {
    console.log("next");
  } else if (userAnswer === "end") {
    end = true;
  } else {
    Questions[i].status = "incorrect";
    console.log(`La respuesta correcta era: ${Questions[i].answer}`);
  }
}
function cleanWrongAnswers() {
  for (let i = 0; i < Questions.length; i++) {
    if (
      Questions[i].status === "correct" ||
      Questions[i].status === "incorrect"
    ) {
      Questions.splice(i, 1);
      i--;
    }
  }
}
function GoodByePrintStats() {
  const playersScore = [
    {
      name: "Calamardo",
      score: 473829,
    },
    {
      name: "Bob Esponja",
      score: 43452,
    },
    {
      name: "Don Cangrejo",
      score: 32452,
    },
  ];
  playersScore.push({ name: userName, score: correctAnswers * 361 });
  if (!end) {
    console.table(playersScore);
  }
  console.log(`Acertaste ${correctAnswers} preguntas`);
  console.log(`Fallaste ${QuestionBank.length - correctAnswers} preguntas`);
  console.log("Gracias por jugar");
}
// Execution
let userName = window.prompt("What's your name?");
prepareRandomQuestions();
startGame();
GoodByePrintStats();
