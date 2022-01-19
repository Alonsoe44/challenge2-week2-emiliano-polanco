/* eslint-disable no-inner-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import "./style.css";
import * as THREE from "three";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const lockSound = new Audio("/SfxPieceLock.mp3");
const ambientSong = new Audio("/AmbientSong.mp3");

const gui = new dat.GUI();
const textureLoader = new THREE.TextureLoader();

const yellowMatcap = textureLoader.load("/yellowMatcap.png");
const blueMatcap = textureLoader.load("/coinRedMatcap.png"); // Maybe change this matcp with something more bright
const purpleMatCap = textureLoader.load("/coinYellowMatcap.png");
gui.hide();

const parameters = {
  colorP1: 0x894949,
  colorP2: 0x177050,
  // colorBoard: 0x753232
};

// Here comes the loaders
const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();

dracoLoader.setDecoderPath("/draco/");

gltfLoader.setDRACOLoader(dracoLoader);

const boardGroup = new THREE.Group();

const materialBoard = new THREE.MeshMatcapMaterial();
const ball = new THREE.Mesh(
  new THREE.SphereGeometry(2, 32, 16),
  new THREE.MeshMatcapMaterial()
);
ball.position.x = 8;

materialBoard.matcap = yellowMatcap;
materialBoard.transparent = true;
materialBoard.opacity = 0.6;

gui.add(materialBoard, "opacity").min(0).max(1).step(0.01);

ball.material.map = yellowMatcap;

gltfLoader.load("/Connect4Board.glb", (gltf) => {
  const children = [...gltf.scene.children];
  for (const mesh of children) {
    mesh.material = materialBoard;
    boardGroup.add(mesh);
  }

  boardGroup.position.x = -0.12;
  scene.add(boardGroup);
});

const scene = new THREE.Scene(); // Scene creation

const size = {
  height: window.innerHeight,
  width: window.innerWidth,
};

// Here comes the event Listener to resize our 3d window;
window.addEventListener("resize", () => {
  // update sizes
  size.height = window.innerHeight;
  size.width = window.innerWidth;
  // update camera
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  // update renderer
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const mouse = new THREE.Vector2();

window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / size.width) * 2 - 1;
  mouse.y = -((event.clientY / size.height) * 2 - 1);
});

window.addEventListener("click", () => {
  if (currentIntersect && !gameOver) {
    switch (currentIntersect.object) {
      case column1:
        ubicatePieceColumn(1);
        robotMove();
        break;
      case column2:
        ubicatePieceColumn(2);
        robotMove();
        break;
      case column3:
        ubicatePieceColumn(3);
        robotMove();
        break;
      case column4:
        ubicatePieceColumn(4);
        robotMove();
        break;
      case column5:
        ubicatePieceColumn(5);
        robotMove();
        break;
      case column6:
        ubicatePieceColumn(6);
        robotMove();
        break;
      case column7:
        ubicatePieceColumn(7);
        robotMove();
        break;
      default:
        break;
    }
  }
});

const camera = new THREE.PerspectiveCamera(75, size.width / size.height); // camera
scene.add(camera);
camera.position.z = 5;

// Here I add the boxes for the raycaster

const column1 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 6, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const column2 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 6, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const column3 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 6, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const column4 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 6, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const column5 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 6, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const column6 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 6, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const column7 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 6, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const hitBoxesColumns = [
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  column7,
];

for (const hitBoxeColumn of hitBoxesColumns) {
  hitBoxeColumn.material.wireframe = true;
  hitBoxeColumn.material.visible = false; // Hit box visivility
}

column1.position.x = -3;
column2.position.x = -2;
column3.position.x = -1;
column5.position.x = 1;
column6.position.x = 2;
column7.position.x = 3;
scene.add(column1, column2, column3, column4, column5, column6, column7);
const canvas = document.querySelector(".webGL"); // Renderer par

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});

renderer.setClearColor("black", 0.1);
renderer.setSize(size.width, size.height);

renderer.render(scene, camera);

// raycaster
const raycaster = new THREE.Raycaster();

let currentIntersect = null;
const cameraRange = 5;
const tick = () => {
  // raycaster
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(hitBoxesColumns);

  for (const hitBoxColumn of hitBoxesColumns) {
    hitBoxColumn.material.color.set("green");
  }

  if (intersects.length) {
    if (!currentIntersect) {
      // Here you enter the hitbox
    }
    intersects[0].object.material.color.set("red");
    currentIntersect = intersects[0];
  } else {
    if (currentIntersect) {
      // Here you exit the hitbox
    }
    currentIntersect = null;
  }

  // update the camera

  camera.position.x = Math.sin(mouse.x * 0.1) * cameraRange;

  camera.position.z = Math.cos(mouse.x * 0.1) * cameraRange;

  camera.position.y = mouse.y * 0.3;

  camera.lookAt(new THREE.Vector3());

  renderer.render(scene, camera);

  requestAnimationFrame(tick);
};

tick();

// This is the function to update the 3d board to create the gamepieces and place them

const pieceGeometry = new THREE.CylinderBufferGeometry(0.4, 0.4, 0.1, 32);
const pieceMaterialP1 = new THREE.MeshMatcapMaterial();
const pieceMaterialP2 = new THREE.MeshMatcapMaterial();
pieceMaterialP1.matcap = blueMatcap;
pieceMaterialP2.matcap = purpleMatCap;

const groupPieces = []; // This arrays groups the pieces to delete them all after

function create3DPiece(x, y, pMaterial) {
  const actualPiece = new THREE.Mesh(pieceGeometry, pMaterial);
  groupPieces.push(actualPiece);
  actualPiece.rotation.x = Math.PI / 2;
  actualPiece.position.y += 3.5;
  actualPiece.position.x += -4;
  scene.add(actualPiece);
  ubicatePiece(actualPiece, x, y);
}

function ubicatePiece(piece, x, y) {
  piece.position.x += x;
  piece.position.y += -y;
}

// I will start creating all the logic of the game here **************************

// Lets start creating the board for the game
const gameBoardBack = [];
const boardWidth = 7 + 2; // Important that the widht its 2 units more for auxiliar walls
const boardHeightt = 6 + 2; // Importnat that the height too its 2 units more for auxiliar floor and ceiling
const empty = 0;
let player1Turn = true;
const p1 = 1;
const p2 = 2;
const auxiliarWall = -1;
const connect4 = 4;
let gameOver = false;
let validPlays = [1, 2, 3, 4, 5, 6, 7];
function createBackBoard() {
  for (let i = 0; i < boardHeightt; i++) {
    gameBoardBack[i] = [];
    for (let j = 0; j < boardWidth; j++) {
      gameBoardBack[i][j] = empty; // The number 0 means that its an empty slot
      if (
        i === 0 ||
        i === boardHeightt - 1 ||
        j === 0 ||
        j === boardWidth - 1
      ) {
        gameBoardBack[i][j] = auxiliarWall; // the number 2 means that it's an auxiliar wall
      }
    }
  }
}

createBackBoard();
// CAUTION the board axis are inverted so to acces an element you have to gameBoarBack[y][x]

console.table(gameBoardBack);
let pieceMoved = false;

function ubicatePieceColumn(column) {
  for (let i = boardHeightt - 2; i >= 0 && !pieceMoved; i--) {
    if (i === 0) {
      console.log("YOU can't place a piece here"); // THIS COLUMN ITS FULL TAKE ACTION
      validPlays.splice(column - 1, 1);
    }
    if (i === 1) {
      validPlays.splice(column - 1, 1);
    }
    if (gameBoardBack[i][column] === empty) {
      if (player1Turn) {
        player1Turn = false;
        makeMovePlayer(p1, pieceMaterialP1);
      } else {
        player1Turn = true;
        makeMovePlayer(p2, pieceMaterialP2);
        checkDraw(i);
        // the player 2 always ends the game if it's a draw
      } // i only check for fraw if is the player 2 turn
      pieceMoved = true;
    }

    function makeMovePlayer(player, playerMaterial) {
      create3DPiece(column, i, playerMaterial);
      lockSound.play();
      gameBoardBack[i][column] = player;
      if (!musicFirstTimeActive) {
        ambientSong.play();
        musicPlaying = true;
        musicFirstTimeActive = true;
      }
      checkConnect4(column, i, player);
    }
  }
  pieceMoved = false;
}

function checkDraw(i) {
  let draw = true;
  if (i === 1) {
    // If i its equal 1 you are in the last row and you check for a draw
    for (let j = 1; j < boardWidth - 1; j++) {
      if (gameBoardBack[1][j] === empty) {
        draw = false;
      }
    }
    if (draw) {
      winnerBox.innerHTML = "Draw";
      winnerBox.style.color = "#FD5839";
      winnerBox.style.transform = "translateY(0rem)";
      gameOver = true;
    }
  }
}

function checkConnect4(x, y, player) {
  // I cant explain this so look the documentation(if there is one);
  checkRow(x, y, player);
  checkColumn(x, y, player);
  checkDiagonalOne(x, y, player);
  checkDiagonalTwo(x, y, player);
}

function checkRow(x, y, player) {
  for (let i = 0; i < connect4; i++) {
    let victory = true;
    for (let j = 1; j <= connect4; j++) {
      if (gameBoardBack[y][i + j] !== player) {
        victory = false;
      }
    }
    if (victory) {
      winProtocol();
      break;
    }
  }
}

function checkColumn(x, y, player) {
  for (let i = 0; i < connect4; i++) {
    let victory = true;
    for (let j = 1; j <= connect4; j++) {
      if (gameBoardBack[i + j][x] !== player) {
        victory = false;
      }
    }
    if (victory) {
      winProtocol();
      break;
    }
  }
}
function checkDiagonalOne(x, y, player) {
  if (x <= y) {
    const diagonalBase = {
      xs: 1,
      ys: y - (x - 1),
    };
    switch (diagonalBase.ys) {
      case 1:
        diagonalScan(3);
        break;
      case 2:
        diagonalScan(2);
        break;
      case 3:
        diagonalScan(1);
        break;
      default:
        break;
    }
    function diagonalScan(iterations) {
      for (let i = 0; i < iterations; i++) {
        let victory = true;
        for (let j = 0; j < connect4; j++) {
          if (
            gameBoardBack[diagonalBase.ys + i + j][diagonalBase.xs + i + j] !==
            player
          ) {
            victory = false;
          }
        }
        if (victory) {
          winProtocol();
          break;
        }
      }
    }
  } else {
    const diagonalBase = {
      xs: x - (y - 1),
      ys: 1,
    };
    switch (diagonalBase.xs) {
      case 2:
        diagonalScan(3);
        break;
      case 3:
        diagonalScan(2);
        break;
      case 4:
        diagonalScan(1);
        break;
      default:
        break;
    }
    function diagonalScan(iterations) {
      for (let i = 0; i < iterations; i++) {
        let victory = true;
        for (let j = 0; j < connect4; j++) {
          if (
            gameBoardBack[diagonalBase.ys + i + j][diagonalBase.xs + i + j] !==
            player
          ) {
            victory = false;
          }
        }
        if (victory) {
          winProtocol();
          break;
        }
      }
    }
  }
}

function checkDiagonalTwo(x, y, player) {
  if (x + y <= 7) {
    const diagonalBase = {
      xs: 1,
      ys: y + x - 1,
    };
    switch (diagonalBase.ys) {
      case 6:
        diagonalScan(3);
        break;
      case 5:
        diagonalScan(2);
        break;
      case 4:
        diagonalScan(1);
        break;
      default:
        break;
    }
    function diagonalScan(iterations) {
      for (let i = 0; i < iterations; i++) {
        let victory = true;
        for (let j = 0; j < connect4; j++) {
          if (
            gameBoardBack[diagonalBase.ys - i - j][diagonalBase.xs + i + j] !==
            player
          ) {
            victory = false;
          }
        }
        if (victory) {
          winProtocol();
          break;
        }
      }
    }
  } else {
    const diagonalBase = {
      xs: x,
      ys: 6,
    };

    switch (x + y) {
      case 8:
        diagonalBase.xs = 2;
        diagonalScan(3);
        break;
      case 9:
        diagonalBase.xs = 3;
        diagonalScan(2);
        break;
      case 10:
        diagonalBase.xs = 4;
        diagonalScan(1);
        break;
      default:
        break;
    }
    function diagonalScan(iterations) {
      for (let i = 0; i < iterations; i++) {
        let victory = true;
        for (let j = 0; j < connect4; j++) {
          if (
            gameBoardBack[diagonalBase.ys - i - j][diagonalBase.xs + i + j] !==
            player
          ) {
            victory = false;
          }
        }
        if (victory) {
          winProtocol();
          break;
        }
      }
    }
  }
}

const winnerBox = document.querySelector(".winner-prompt");
const title = document.querySelector(".home-screen__title");

function winProtocol() {
  console.log("You connect4");
  title.innerHTML = "made by me <br><br>Emiliano Polanco";
  if (player1Turn) {
    winnerBox.innerHTML = "Yellow <br> wins";
    winnerBox.style.color = "#FABC2A";
  } else {
    winnerBox.innerHTML = "Red <br> wins";
    winnerBox.style.color = "#FD5839";
  }
  winnerBox.style.transform = "translateY(0rem)";
  gameOver = true;
}
const replayButton = document.querySelector(".replay");

replayButton.addEventListener("click", cleanBoard);

function cleanBoard() {
  clean3DBoard();
  createBackBoard();
  player1Turn = true;
  gameOver = false;
  console.log("cleaning");
  winnerBox.style.transform = "translateY(-60rem)";
  validPlays = [1, 2, 3, 4, 5, 6, 7];
}

function clean3DBoard() {
  const numPieces = groupPieces.length;
  for (let i = 0; i < numPieces; i++) {
    scene.remove(groupPieces[i]);
  }
}

let musicFirstTimeActive = false;
let musicPlaying = false;
const musicButton = document.querySelector(".volume");
ambientSong.loop = true;
musicButton.addEventListener("click", pausePlayMusic);
function pausePlayMusic() {
  if (musicPlaying) {
    ambientSong.pause();
    musicPlaying = false;
    musicButton.style.color = "white";
  } else {
    ambientSong.play();
    musicPlaying = true;
    musicButton.style.color = "black";
  }
}

let botPlaying = false;
const botButton = document.querySelector(".bot");
botButton.addEventListener("click", turnOnOffBot);
function turnOnOffBot() {
  if (!botPlaying) {
    // Here the bot start to play
    botPlaying = true;
    botButton.style.color = "red";
  } else {
    // Here the robot is not gonna play the next game
    botPlaying = false;
    botButton.style.color = "black";
  }
}

function robotMove() {
  if (botPlaying) {
    const moveIndex = Math.floor(Math.random() * validPlays.length);
    console.log(`this is the array of valid move${validPlays}`);
    console.log(`this is the move.index${moveIndex}`);
    ubicatePieceColumn(validPlays[moveIndex]);
    console.log("robot moved");
  }
}
