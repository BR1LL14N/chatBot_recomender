class Node {
  constructor(question, yesNode = null, noNode = null, diagnosis = null) {
    this.question = question;
    this.yesNode = yesNode;
    this.noNode = noNode;
    this.diagnosis = diagnosis;
  }
}

function buildHighEnd() {
  const node6 = new Node(null, null, null, {
    name: "NBA 2K",
    genre: ["Sports", "Simulation"],
    trailer: "https://www.youtube.com/embed/qx0A921z8mA",
  });
  const node7 = new Node(null, null, null, {
    name: "Forza Horizon 5",
    genre: ["Racing", "Open World"],
    trailer: "https://www.youtube.com/embed/FYH9n37B7Yw",
  });
  const node10 = new Node(null, null, null, {
    name: "Fortnite",
    genre: ["Battle Royale", "Shooter"],
    trailer: "https://www.youtube.com/embed/euiSHuaw6Q4",
  });
  const node11 = new Node(null, null, null, {
    name: "Tekken 8",
    genre: ["Fighting", "Action"],
    trailer: "https://www.youtube.com/embed/2hPuRQz6IlM",
  });
  const node18 = new Node(null, null, null, {
    name: "Genshin Impact & Wuthering Waves",
    genre: ["RPG", "Adventure", "Open World"],
    trailer: "https://www.youtube.com/embed/-23o3IuAels",
  });
  const node19 = new Node(null, null, null, {
    name: "Sekiro",
    genre: ["Action", "Adventure", "RPG"],
    trailer: "https://www.youtube.com/embed/4OgoTZXPACo",
  });
  const node20 = new Node(null, null, null, {
    name: "Solo Leveling Arise",
    genre: ["RPG", "Action", "Fantasy"],
    trailer: "https://www.youtube.com/embed/vaMLvNulSCA",
  });
  const node22 = new Node(null, null, null, {
    name: "Dead by Daylight",
    genre: ["Horror", "Survival"],
    trailer: "https://www.youtube.com/embed/kJZ1czmKfUE",
  });
  const node23 = new Node(null, null, null, {
    name: "World Of Warcraft",
    genre: ["MMORPG", "Fantasy"],
    trailer: "https://www.youtube.com/embed/jSJr3dXZfcg",
  });
  const node25 = new Node(null, null, null, {
    name: "Mobile Legends",
    genre: ["MOBA", "Strategy"],
    trailer: "https://www.youtube.com/embed/faZ-XyxfqYM",
  });
  const node28 = new Node(null, null, null, {
    name: "Outlast 1 & 2",
    genre: ["Horror", "Survival", "Psychological Horror"],
    trailer: "https://www.youtube.com/embed/uKA-IA4locM",
  });
  const node29 = new Node(null, null, null, {
    name: "Train Simulator",
    genre: ["Simulation", "Casual"],
    trailer: "https://www.youtube.com/embed/-WmNSvU6n3Q",
  });
  const node31 = new Node(null, null, null, {
    name: "FIFA Series",
    genre: ["Sports", "Simulation"],
    trailer: "https://www.youtube.com/embed/zX0AV6yxyrQ",
  });
  const node32 = new Node(null, null, null, {
    name: "Rocket League",
    genre: ["Sports", "Racing"],
    trailer: "https://www.youtube.com/embed/SgSX3gOrj60",
  });
  const node35 = new Node(null, null, null, {
    name: "Call of Duty: Warzone",
    genre: ["Shooter", "Battle Royale"],
    trailer: "https://www.youtube.com/embed/a3w8I8boc_I",
  });
  const node36 = new Node(null, null, null, {
    name: "SuperHot",
    genre: ["Shooter", "Puzzle"],
    trailer: "https://www.youtube.com/embed/vrS86l_CtAY",
  });
  const node37 = new Node(null, null, null, {
    name: "Far Cry 5",
    genre: ["Shooter", "Open World", "Adventure"],
    trailer: "https://www.youtube.com/embed/Kdaoe4hbMso",
  });
  const node38 = new Node(null, null, null, {
    name: "Counter Strike 1.6",
    genre: ["Shooter", "FPS"],
    trailer: "https://www.youtube.com/embed/edYCtaNueQY",
  });

  // Decision nodes
  const node34 = new Node("Solo?", node35, node36);
  const node33 = new Node(
    "Multiplayer(Bluetoth / Hotspot, DLL)?",
    node38,
    node37
  );
  const node30 = new Node("Berbayar?", node31, node32);
  const node27 = new Node("Horor?", node28, node29);
  const node26 = new Node("Sport?", node30, node18);
  const node24 = new Node("Fighting?", node11, node27);
  const node21 = new Node("Horor?", node22, node23);
  const node17 = new Node("Arena?", node20, node21);
  const node16 = new Node("Online?", node18, node19);
  const node15 = new Node("Racing?", node7, node24);
  const node14 = new Node("Moba?", node25, node26);
  const node13 = new Node("Strategi?", node14, node15);
  const node12 = new Node("Offline?", node33, node34);
  const node9 = new Node("Shooter?", node10, node11);
  const node8 = new Node("Openworld?", node16, node17);
  const node5 = new Node("Sport?", node6, node7);
  const node4 = new Node("Action?", node9, node5);
  const node3 = new Node("FPS?", node12, node13);
  const node2 = new Node("Petualangan?", node8, node4);
  const node1 = new Node("Kompetitif?", node3, node2);

  return node1;
}

function buildLowEnd() {
  const node6 = new Node(null, null, null, {
    name: "Stardew Valley",
    genre: ["Simulation", "Farming", "Adventure"],
    trailer: "https://www.youtube.com/embed/ot7uXNQskhs", //oke
  });

  const node7 = new Node(null, null, null, {
    name: "Advance Wars",
    genre: ["Strategy", "Turn-Based"],
    trailer: "https://www.youtube.com/embed/g3RF89_kfAs", 
  });

  const node8 = new Node(null, null, null, {
    name: "Age of Empires: Definitive Edition",
    genre: ["Strategy", "Real-Time"],
    trailer: "https://www.youtube.com/embed/QGAh6IwahqE", 
  });

  const node10 = new Node(null, null, null, {
    name: "Plants vs. Zombies",
    genre: ["Strategy", "Tower Defense"],
    trailer: "https://www.youtube.com/embed/CHAbHz8iYHc", //oke
  });

  const node11 = new Node(null, null, null, {
    name: "Plague Inc",
    genre: ["Simulation", "Strategy"],
    trailer: "https://www.youtube.com/embed/V44GtChUW4A", //oke
  });

  const node16 = new Node(null, null, null, {
    name: "Hayday",
    genre: ["Simulation", "Farming"],
    trailer: "https://www.youtube.com/embed/mSev84nF1HA",
  });

  const node17 = new Node(null, null, null, {
    name: "Slime Rancher",
    genre: ["Adventure", "Sandbox"],
    trailer: "https://www.youtube.com/embed/oOL-dsa79Xs",
  });

  const node18 = new Node(null, null, null, {
    name: "Pacman",
    genre: ["Arcade", "Classic"],
    trailer: "https://www.youtube.com/embed/IFb6hCFwe2w",
  });

  const node20 = new Node(null, null, null, {
    name: "TTS",
    genre: ["Puzzle", "Strategy"],
    trailer: "https://www.youtube.com/embed/89ofaVVSfO8",
  });

  const node21 = new Node(null, null, null, {
    name: "Monument Valley",
    genre: ["Puzzle", "Adventure"],
    trailer: "https://www.youtube.com/embed/mh_4JJNULZ0",
  });

  const node26 = new Node(null, null, null, {
    name: "Granny",
    genre: ["Horror", "Survival"],
    trailer: "https://www.youtube.com/embed/SVq2yMuAMVQ",
  });

  const node27 = new Node(null, null, null, {
    name: "Fatal Frame",
    genre: ["Horror", "Survival", "Psychological"],
    trailer: "https://www.youtube.com/embed/BWDpyxB-dQQ", //rusak
  });

  const node28 = new Node(null, null, null, {
    name: "Minecraft",
    genre: ["Sandbox", "Adventure", "Survival"],
    trailer: "https://www.youtube.com/embed/MmB9b5njVbA",
  });

  const node30 = new Node(null, null, null, {
    name: "Terraria",
    genre: ["Adventure", "Sandbox", "Survival"],
    trailer: "https://www.youtube.com/embed/w7uOhFTrrq0",
  });

  const node31 = new Node(null, null, null, {
    name: "This War Of Mine",
    genre: ["Survival", "Strategy", "Simulation"],
    trailer: "https://www.youtube.com/embed/Hxf1seOpijE",
  });

  const node34 = new Node(null, null, null, {
    name: "Osu",
    genre: ["Rhythm", "Music"],
    trailer: "https://www.youtube.com/embed/KAz6aTEcrcg",
  });

  const node35 = new Node(null, null, null, {
    name: "jetpack joyride",
    genre: ["Endless Runner", "Solo Player"],
    trailer: "https://www.youtube.com/embed/6EHVzR1hKx8",
  });

  const node36 = new Node(null, null, null, {
    name: "The Talos Principle",
    genre: ["Puzzle", "Philosophical"],
    trailer: "https://www.youtube.com/embed/9ivatJM-9oA", 
  });

  const node38 = new Node(null, null, null, {
    name: "The Room",
    genre: ["Puzzle", "Mistery"],
    trailer: "https://www.youtube.com/embed/2g9pqTyEaXo", 
  });

  const node39 = new Node(null, null, null, {
    name: "Jigsaw Puzzle Online",
    genre: ["Puzzle", "Casual"],
    trailer: "https://www.youtube.com/embed/QxS1HBZUbRs", 
  });

  // Decision nodes
  const node37 = new Node("Berbayar?", node38, node39);
  const node33 = new Node("Rhythm?", node34, node35);
  const node32 = new Node("Online?", node37, node36);
  const node29 = new Node("Action?", node30, node31);
  const node25 = new Node("Sandbox?", node28, node29);
  const node24 = new Node("Eksplorasi?", node26, node27);
  const node23 = new Node("Puzzle?", node32, node33);
  const node22 = new Node("Survival Horror?", node24, node25);
  const node19 = new Node("Edukasi?", node20, node21);
  const node15 = new Node("Arcade?", node18, node19);
  const node14 = new Node("Simulation?", node16, node17);
  const node13 = new Node("Survival?", node22, node23);
  const node12 = new Node("Farming?", node14, node15);
  const node9 = new Node("Action?", node10, node11);
  const node5 = new Node("RTS?", node8, node9);
  const node4 = new Node("Open World?", node6, node7);
  const node3 = new Node("Casual?", node12, node13);
  const node2 = new Node("RPG?", node4, node5);
  const node1 = new Node("Strategy?", node2, node3);

  return node1;
}

// Event listener untuk tombol enter pada input
document
  .getElementById("user-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleUserInput(); // Panggil fungsi untuk menangani input saat enter ditekan
    }
  });

function restartConversation() {
  currentNode = buildRootTree(); // Reset ke node awal
  document.getElementById("chat-box").innerHTML = ""; // Kosongkan chat box
  displayMessage(currentNode.question, "bot-message"); // Tampilkan pertanyaan awal
}

function displayDiagnosis(diagnosis) {
  const chatBox = document.getElementById("chat-box");

  // Create a container for the diagnosis
  const diagnosisContainer = document.createElement("div");
  diagnosisContainer.className = "diagnosis-container";

  // Add game name
  const nameElement = document.createElement("h2");
  nameElement.textContent = `Nama Game: ${diagnosis.name}`;
  diagnosisContainer.appendChild(nameElement);

  // Add genre
  const genreElement = document.createElement("p");
  genreElement.textContent = `Genre: ${diagnosis.genre}`;
  diagnosisContainer.appendChild(genreElement);

  // Add trailer
  const trailerElement = document.createElement("div");
  trailerElement.className = "video-trailer";
  trailerElement.innerHTML = `
        <h2>Traile
        r</h2>
        <iframe width="350" height="270" 
                src="${diagnosis.trailer}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    `;
  diagnosisContainer.appendChild(trailerElement);

  // Add Restart button
  const restartButton = document.createElement("button");
  restartButton.textContent = "Mulai Ulang";
  restartButton.className = "restart-button";
  restartButton.onclick = () => restartConversation(); // Set the restart function
  diagnosisContainer.appendChild(restartButton);

  // Append to chat box
  chatBox.appendChild(diagnosisContainer);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function buildRootTree() {
  return new Node(
    "Apakah Device Anda High End?(yes/no) : ", //parameter queestions
    buildHighEnd(), //parameter yesNode
    buildLowEnd() //parameter noNode
  );
}

let currentNode = buildRootTree();
displayMessage(currentNode.question, "bot-message");

function handleUserInput() {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  document.getElementById("user-input").value = "";

  displayMessage(userInput, "user-message");

  if (!currentNode.diagnosis) {
    if (userInput === "yes" || userInput === "y") {
      currentNode = currentNode.yesNode;
    } else if (userInput === "no" || userInput === "n") {
      currentNode = currentNode.noNode;
    } else {
      displayMessage(
        "Invalid answer. Please enter 'yes' or 'no'.",
        "bot-message"
      );
      return;
    }

    if (currentNode.question) {
      displayMessage(currentNode.question, "bot-message");
    } else if (currentNode.diagnosis) {
      displayDiagnosis(currentNode.diagnosis);
    }
  } else {
    displayDiagnosis(currentNode.diagnosis);
  }
}

function displayMessage(text, className) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.className = "message " + className;
  messageElement.textContent = text;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
