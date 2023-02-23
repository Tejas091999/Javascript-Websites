let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory= ["stick"];
 const button1 = document.querySelector("#button1")
 const button2 = document.querySelector("#button2")
 const button3 = document.querySelector("#button3")
 const text = document.querySelector("#text")
 const xpText = document.querySelector("#xpText")
 const goldText = document.querySelector("#goldText")
 const healthText = document.querySelector("healthText")
 const monsterStats = document.querySelector("monsterStats")
 const monsterNameText = document.querySelector("#monsterName")
 const monsterHealthText = document.querySelector("#monsterHealth")
const weapons = [
  {
    name:"stick",
    power:5
  },
  {
    name:"dagger",
    power:30
  },
  {
    name:"claw hammer",
    power:50
  },
  {
    name:"sword",
    power:100
  }
];
const monsters=[
  {
    name:"slime",
    level:2,
    health:15
  },
  {
    name:"fanged beast",
    level:8,
    health:60
  },
  {
    name:"dragon",
    level:20,
    health:300
  }
]
const locations=[
  {
    name:"town sqaure",
    "button text" : ["Go to Store", "Go to Cave" , "fight Dragon"],
    "button functions": [goStore,goCave,fightDragon],
     text : "You're in the town square"
  },
  {
    name:"store",
    "button text" : ["Buy 10 health", "Buy weapon" , "Go to town sqaure"],
    "button functions": [buyHealth,buyWeapon,goTown],
     text : "You enter the store."
  },
  {
    name:"cave",
    "button text" : ["fight slime", "fight fanged beast" , "Go to town sqaure"],
    "button functions": [fightSlime,fightBeast,goTown],
     text : "You enter the cave , and you see some monsters."
  },
  {
    name:"fight",
    "button text" : ["Attack","Dodge","Run"],
    "button functions": [attack,dodge,goTown],
     text : "You're fighting a monster."
  },
  {
    name:"kill monster",
    "button text" : ["Go to town square","Go to town square","Go to town square"],
    "button functions": [goTown,goTown,goTown],
     text : "You gain experience points."
  },
   {
    name:"lose",
    "button text" : ["Replay","Replay","Replay"],
    "button functions": [restart,restart,restart],
     text : "You die."
  },
  {
    name:"win",
    "button text" : ["Replay","Replay","Replay"],
    "button functions": [restart,restart,restart],
     text : "You win the game ."
  }
];

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display="none"
  button1.innerText= location["button text"][0]
  button2.innertText= location["button text"][1]
  button3.innerText= location["button text"][2]
  button1.onclick = location["button functions"][0]
  button2.onclick = location["button functions"][1]
  button3.onclick = location["button functions"][2]
  text.innerText=location.text
}

function goTown(){
  update(locations[0]); 
}

function goStore(){
  update(locations[1])
}

function goCave(){
  update(locations[2])
}

function buyHealth(){
  if (gold >= 10) {
      gold -= 10
      health += 10
      goldText.innerText= gold;
      healthText.innerText=health;
  } else {
    text.innerText="You do not have enough gold to buy  health"
  }
}
function buyWeapon(){
  if (currentWeapon < weapon.length-1){
    if (gold >= 30){
    gold -= 30;
    currentWeapon += 1;
    goldText.innerText=gold;
    let newWeapon=weapons[currentWeapon].name
    text.innerText="You now have new weapon.";
    inventory.push(newWeapon);
    text.innerText += "You have" +inventory+ "in your inventory"
  } else {
    text.innerText="You do not have gold to buy a weapon"
  }
  }else{
    text.innerText="You already have most powerful weapon."
    button2.innerText="Buy your weapon for 15 gold"
    button2.onclick=sellWeapon;
  }
}
function sellWeapon(){
  if (inventory.length>1){
    gold+=15;
    goldText.innerText=gold;
    let currentWeapon = inventory.shift()
    text.innerText="You sold a current"+currentWeapon+"."
    text.innerText += "You have" +inventory+ "in your inventory"
  }else{
    text.innerText="Don't sell your Weapons"
  }
}
function fightSlime(){
  fighting=0;
  goFight();
}

function fightBeast(){
  fighting=1;
  goFight();
}

function fightDragon(){
  fighting=2;
  goFight();
}

function goFight(){
  update[locations[3]]
  monsterHealth=monsters[fighting].health;
  monsterStats.Style.display="block";
  monsterNameText.innerText=monsters[fighting].name
  monsterhealthText.innerText=monsterHealth;
}
function attack(){
  text.innerText= "The" + monsters[fighting].name +"attacks";
  text.innerText="You will attack" +weapons[currentWeapon].name + ".";
  health-=monsters[fighting].level;
  monsterHealth-= weapons[currentWeapon].power + Math.floor(Math.random()*xp)+1;;
  if(health<=0){
    lose()
  } else if (monsterHealth<=0){
    if (fighting===2){
      winGame();
    }else{
      defeatMonster();
    }
  }
}
function dodge(){
  text.innerText= "You dodge the attack from"+monsters[fighting].name+".";
}
function defeatMonster(){
  gold += Math.floor(monsters[fighting].level *6.67);
  xp += monsters[fighting].level;
  goldText.innerText=gold;
  xpText.innerText=xp;
  update(locations[4]);
}
function lose(){
  update(locations[5]);
}
function winGame(){
  update(locations[6]);
}
function restart() {
  let xp = 0;
  let health = 100;
  let gold = 50;
  let currentWeapon = 0;
  let inventory= ["stick"];
  goldText.innerText=gold;
  healthText.innerText=health;
  xpText.innerText=xp;
  goTown();
}
