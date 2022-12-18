//alien game folder
class Ship {
    constructor(shipname, hull, firepower, accuracy){
        this.shipname = shipname;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = +accuracy.toFixed(1);
        
    }
    attack(ship){
        if (ship == me){
        battlePrompt.innerText = (alienfleet1.ships[i].firepower);
        battlePrompt.innerText = (ship);
        ship.hull -= alienfleet1.ships[i].firepower;
        battlePrompt.innerText = (ship)
        } else{
        battlePrompt.innerText = (me.firepower);
        battlePrompt.innerText = (ship);
        ship.hull -= me.firepower;
        battlePrompt.innerText = (ship)
        }
        
        //the last part is to check the ships damage
    }
    retreat(destroyedShip){
        if (destroyedShip ==  me){
           battlePrompt.innerText = `You retreated!!!
           ${alienfleet1.ships[i].shipname} defeated you!`
        } else{
             battlePrompt.innerText = ("Alien retreated")
        }
    }
}
let me = new Ship ("USS HelloWorld", 6, 5, .7);






//making a fleet of ships to hold all my alien ships
class Alienfleet {
    constructor(name){
        this.name = name;
        this.ships =[];
    }
   // //adding characteristics to my individual alienships carving out those properties using the ship class then pushing to ships array.
 addShip(shipname, hull, firepower, accuracy){
       this.ships.push(new Ship
        (shipname, 
            hull = Math.ceil(Math.random() * (6-2)) + 2, 
            firepower = Math.ceil(Math.random() * (4-1)) + 1, 
            accuracy = Math.random()  * (.8 - .5) +.5 ));
    }
}
//made one alien fleet
let alienfleet1 = new Alienfleet ("Alienfleet1");
//made my six ships
alienfleet1.addShip("Alien ship 1", undefined, undefined, undefined);
alienfleet1.addShip("Alien ship 2", undefined, undefined, undefined);
alienfleet1.addShip("Alien ship 3", undefined, undefined, undefined);
alienfleet1.addShip("Alien ship 4", undefined, undefined, undefined);
alienfleet1.addShip("Alien ship 5", undefined, undefined, undefined);
alienfleet1.addShip("Alien ship 6", undefined, undefined, undefined);
//checking to see if the array of ships turned into objects with properties
// battlePrompt.innerText = (alienfleet1);
// alienfleet1.ships[0].addEnemyShip()

// battlePrompt.innerText = (typeof alienfleet1.ships);
// battlePrompt.innerText = (alienfleet1.ships[0].hull);
//connecting html elements with variables in javascript
let myShip = document.getElementById("mySpaceship")
let myshiphull = document.getElementById('my-ship-hull');
myshiphull.innerHTML = `Hull: ${me.hull}`;
let myshipfirepower = document.getElementById('my-ship-firepower');
myshipfirepower.innerHTML = me.firepower;
let myshipaccuracy = document.getElementById('my-ship-accuracy');
myshipaccuracy.innerHTML = me.accuracy;



//stats displayed before playing the game
for ( i = 0; i < alienfleet1.ships.length; i++){
    switch (alienfleet1.ships[i].shipname){
    case "Alien ship 1":
        let shiphull1 = document.getElementById("0")
        shiphull1.innerHTML =`Hull: ${alienfleet1.ships[i].hull}`;
        let shipfirepower1 = document.getElementById("firepower0")
        shipfirepower1.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
        let shipaccuracy1 = document.getElementById("accuracy0")
        shipaccuracy1.innerHTML = `Accuracy: ${alienfleet1.ships[i].accuracy}`;
        break;
    case "Alien ship 2":
        let shiphull2 = document.getElementById("1")
        shiphull2.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
        let shipfirepower2 = document.getElementById("firepower1")
        shipfirepower2.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
        let shipaccuracy2 = document.getElementById("accuracy1")
        shipaccuracy2.innerHTML = `Accuracy: ${alienfleet1.ships[i].accuracy}`;
        break;
    case "Alien ship 3":
        let shiphull3 = document.getElementById("2")
        shiphull3.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
        let shipfirepower3 = document.getElementById("firepower2")
        shipfirepower3.innerHTML =` Firepower: ${alienfleet1.ships[i].firepower}`;
        let shipaccuracy3 = document.getElementById("accuracy2")
        shipaccuracy3.innerHTML =  `Accuracy: ${alienfleet1.ships[i].accuracy}`;
        break;
    case "Alien ship 4":
        let shiphull4 = document.getElementById("3")
        shiphull4.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
        let shipfirepower4 = document.getElementById("firepower3")
        shipfirepower4.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
        let shipaccuracy4 = document.getElementById("accuracy3")
        shipaccuracy4.innerHTML =  `Accuracy: ${alienfleet1.ships[i].accuracy}`;
        break;
    case "Alien ship 5":
        let shiphull5 = document.getElementById("4")
        shiphull5.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
        let shipfirepower5 = document.getElementById("firepower4")
        shipfirepower5.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
        let shipaccuracy5 = document.getElementById("accuracy4")
        shipaccuracy5.innerHTML =  `Accuracy: ${alienfleet1.ships[i].accuracy}`;
        break;
    case "Alien ship 6":
        let shiphull6 = document.getElementById("5")
        shiphull6.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
        let shipfirepower6 = document.getElementById("firepower5")
        shipfirepower6.innerHTML =`Firepower: ${alienfleet1.ships[i].firepower}`
        let shipaccuracy6 = document.getElementById("accuracy5")
        shipaccuracy6.innerHTML = `Accuracy: ${alienfleet1.ships[i].accuracy}`;
        break;

    }
}
// const alienHulls = document.querySelectorAll(".hull");

//  for(i =0; i < alienHulls.length; i++){
//         if(alienHulls[i] == i){
//             alienHulls[i].innerHTML = alienfleet1.ships[i].hull
//          }
//     }

//adding messages to player
let battlePrompt = document.getElementById("battle-prompt");
battlePrompt.innerText = "Let's play!";
let wonGame = false;
//Making the logic for one round of the game
//attacking the ships one by one. I want to iterate through the array of ships. I will use a for loop.
const element = document.getElementById("btn");
element.addEventListener("click", playGame);
function playGame(){
    
    for( i = 0; i < alienfleet1.ships.length; i++ ){
        if (me.hull <= 0){
            wonGame = false;
            break;
        }
        else if (me.hull > 0){
            let keepLooping = true;
            while (keepLooping){
                
                if (me.accuracy > Math.random()){
                     //my ship is going to hit 70% of  out of a 100%
                    //Nw hit ship
                    battlePrompt.innerText = `You hit the enemy ship! ${alienfleet1.ships[i].shipname}`
                    me.attack(alienfleet1.ships[i]); //determining whose hull to decrease
                   
                    
                    if (alienfleet1.ships[i].hull <= 0){ //if this is false, it will check the else if statement, if that is also false, it will take you back to do the while loop again. if it's true, you will break out of the while loop into the for loop again
                        battlePrompt.innerText = "You won that battle!"
                        me.retreat(alienfleet1.ships[i]);
                        if(alienfleet1.ships[i] == alienfleet1.ships[i].length - 1){
                            battlePrompt.innerText = "You won the Game!"
                            wonGame = true;
                        }
                        break;
                    } else if (me.hull <= 0){
                        battlePrompt.innerText = `${alienfleet1.ships[i].shipname} defeated you!`
                        alienfleet1.ships[i].retreat(me);
                        myShip.remove()
                        break;
                    }
                         //takes you out the while loop
                } 
                
                else {
                    //my ship attacked but missed
                    //alien ship attacks
                    
                    battlePrompt.innerText =  "You missed!"
                    if( alienfleet1.ships[i].hull > 0 && alienfleet1.ships[0].accuracy > Math.random()){
                        battlePrompt.innerText = "You have been hit!"
                        alienfleet1.ships[i].attack(me);
                        myshiphull.innerHTML = me.hull;
                        if (me.hull <= 0){
                    
                            alienfleet1.ships[i].retreat(me);
                        
                            myShip.remove()
                            wonGame = false;
                            break;
                        }
                        
                    } else{
                        battlePrompt.innerText = `${alienfleet1.ships[i].shipname} ship missed their hit! Your turn!`
                    }
                    
                    
                 }
                    
        
            }  
            
                switch (alienfleet1.ships[i].shipname){
                case "Alien ship 1":
                    if(alienfleet1.ships[i].hull > 0){
                    let shiphull1 = document.getElementById("0")
                    shiphull1.innerHTML =`Hull: ${alienfleet1.ships[i].hull}`;
                    let shipfirepower1 = document.getElementById("firepower0")
                    shipfirepower1.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
                    let shipaccuracy1 = document.getElementById("accuracy0")
                    shipaccuracy1.innerHTML = `Accuracy: ${alienfleet1.ships[i].accuracy}`;
                    }
                    else if(alienfleet1.ships[i].hull <= 0){
                        let alienship1 = document.getElementById("Alienship1")
                        alienship1.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
                        alienship1.innerHTML = `<b>Alienship 1 defeated</b>
                        <br> Hull: ${alienfleet1.ships[i].hull}
                        <br> Firepower: ${alienfleet1.ships[i].firepower}
                        <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
                        
                        alienship1.style.width = "147px";
                        alienship1.style.height = "247px"
                        alienship1.style.display ="flex";
                        alienship1.style.flexDirection = "column"
                        alienship1.style.justifyContent ="center";
                        alienship1.style.alignItems ="center";
                        alienship1.style.color = "white";
                       
                        }
                    break;
                case "Alien ship 2":
                   if(alienfleet1.ships[i].hull > 0){
                    let shiphull2 = document.getElementById("1")
                    shiphull2.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
                    let shipfirepower2 = document.getElementById("firepower1")
                    shipfirepower2.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
                    let shipaccuracy2 = document.getElementById("accuracy1")
                    shipaccuracy2.innerHTML = `Accuracy: ${alienfleet1.ships[i].accuracy}`;
                   } 
                    else if(alienfleet1.ships[i].hull <= 0){
                        let alienship2 = document.getElementById("Alienship2")
                        alienship2.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
                        alienship2.innerHTML = `<b>Alienship 2 defeated</b>
                        <br> Hull: ${alienfleet1.ships[i].hull}
                        <br> Firepower: ${alienfleet1.ships[i].firepower}
                        <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
                        alienship2.style.width = "147px";
                        alienship2.style.height = "247px"
                        alienship2.style.display ="flex";
                        alienship2.style.flexDirection = "column"
                        alienship2.style.justifyContent ="center";
                        alienship2.style.alignItems ="center";
                        alienship2.style.color = "white";
                
                        }
                    break;
                case "Alien ship 3":
                    if(alienfleet1.ships[i].hull > 0) {
                        let shiphull3 = document.getElementById("2")
                        shiphull3.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
                        let shipfirepower3 = document.getElementById("firepower2")
                        shipfirepower3.innerHTML =` Firepower: ${alienfleet1.ships[i].firepower}`;
                        let shipaccuracy3 = document.getElementById("accuracy2")
                        shipaccuracy3.innerHTML =  `Accuracy: ${alienfleet1.ships[i].accuracy}`;
                    }
                    else if(alienfleet1.ships[i].hull <= 0){
                        let alienship3 = document.getElementById("Alienship3")
                        alienship3.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
                        alienship3.innerHTML = `<b>Alienship 3 defeated</b>
                        <br> Hull: ${alienfleet1.ships[i].hull}
                        <br> Firepower: ${alienfleet1.ships[i].firepower}
                        <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
                        alienship3.style.width = "147px";
                        alienship3.style.height = "247px"
                        alienship3.style.display ="flex";
                        alienship3.style.flexDirection = "column"
                        alienship3.style.justifyContent ="center";
                        alienship3.style.alignItems ="center";
                        alienship3.style.color = "white";
                        }
                    break;
                case "Alien ship 4":
                    if(alienfleet1.ships[i].hull > 0){
                        let shiphull4 = document.getElementById("3")
                        shiphull4.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
                        let shipfirepower4 = document.getElementById("firepower3")
                        shipfirepower4.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
                        let shipaccuracy4 = document.getElementById("accuracy3")
                        shipaccuracy4.innerHTML =  `Accuracy: ${alienfleet1.ships[i].accuracy}`;
                    }
                    else if(alienfleet1.ships[i].hull <= 0){
                        let alienship4 = document.getElementById("Alienship4")
                        alienship4.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
                        alienship4.innerHTML = `<b>Alienship 4 defeated</b>
                        <br> Hull: ${alienfleet1.ships[i].hull}
                        <br> Firepower: ${alienfleet1.ships[i].firepower}
                        <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
                        alienship4.style.width = "147px";
                        alienship4.style.height = "247px"
                        alienship4.style.display ="flex";
                        alienship4.style.flexDirection = "column"
                        alienship4.style.justifyContent ="center";
                        alienship4.style.alignItems ="center";
                        alienship4.style.color = "white";
                    }
                    break;
                case "Alien ship 5":
                    if(alienfleet1.ships[i].hull > 0){
                        let shiphull5 = document.getElementById("4")
                        shiphull5.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
                        let shipfirepower5 = document.getElementById("firepower4")
                        shipfirepower5.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
                        let shipaccuracy5 = document.getElementById("accuracy4")
                        shipaccuracy5.innerHTML =  `Accuracy: ${alienfleet1.ships[i].accuracy}`;
                    }
                    else if(alienfleet1.ships[i].hull <= 0){
                        let alienship5 = document.getElementById("Alienship5")
                        alienship5.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
                        alienship5.innerHTML = `<b>Alienship 5 defeated</b>
                        <br> Hull: ${alienfleet1.ships[i].hull}
                        <br> Firepower: ${alienfleet1.ships[i].firepower}
                        <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
                        alienship5.style.width = "147px";
                        alienship5.style.height = "247px"
                        alienship5.style.display ="flex";
                        alienship5.style.flexDirection = "column"
                        alienship5.style.justifyContent ="center";
                        alienship5.style.alignItems ="center";
                        alienship5.style.color = "white";
                    }
                        break;
                case "Alien ship 6":
                    if(alienfleet1.ships[i].hull > 0){
                        let shiphull6 = document.getElementById("5")
                        shiphull6.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
                        let shipfirepower6 = document.getElementById("firepower5")
                        shipfirepower6.innerHTML =`Firepower: ${alienfleet1.ships[i].firepower}`
                        let shipaccuracy6 = document.getElementById("accuracy5")
                        shipaccuracy6.innerHTML = `Accuracy: ${alienfleet1.ships[i].accuracy}`;
                    }
                    else if (alienfleet1.ships[i].hull <= 0){
                        let alienship6 = document.getElementById("Alienship6")
                        alienship6.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
                        alienship6.innerHTML = `<b>Alienship 5 defeated</b>
                        <br> Hull: ${alienfleet1.ships[i].hull}
                        <br> Firepower: ${alienfleet1.ships[i].firepower}
                        <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
                        alienship6.style.width = "147px";
                        alienship6.style.height = "247px"
                        alienship6.style.display ="flex";
                        alienship6.style.flexDirection = "column"
                        alienship6.style.justifyContent ="center";
                        alienship6.style.alignItems ="center";
                        alienship6.style.color = "white";
                    }
                    break;
            
                }
            }
       
    };
    
}
// playGame();
// const element = document.getElementById("btn");
// element.addEventListener("click", playGame);
//add stats to else if statement so user knows how they killed the alien
// for ( i = 0; i < alienfleet1.ships.length; i++){
//     switch (alienfleet1.ships[i].shipname){
//     case "Alien ship 1":
//         if(alienfleet1.ships[i].hull > 0){
//         let shiphull1 = document.getElementById("0")
//         shiphull1.innerHTML =`Hull: ${alienfleet1.ships[i].hull}`;
//         let shipfirepower1 = document.getElementById("firepower0")
//         shipfirepower1.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
//         let shipaccuracy1 = document.getElementById("accuracy0")
//         shipaccuracy1.innerHTML = `Accuracy: ${alienfleet1.ships[i].accuracy}`;
//         }
//         else if(alienfleet1.ships[i].hull <= 0){
//             let alienship1 = document.getElementById("Alienship1")
//             alienship1.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
//             alienship1.innerHTML = `<b>Alienship 1 defeated</b>
//             <br> Hull: ${alienfleet1.ships[i].hull}
//             <br> Firepower: ${alienfleet1.ships[i].firepower}
//             <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
            
//             alienship1.style.width = "147px";
//             alienship1.style.height = "247px"
//             alienship1.style.display ="flex";
//             alienship1.style.flexDirection = "column"
//             alienship1.style.justifyContent ="center";
//             alienship1.style.alignItems ="center";
//             alienship1.style.color = "white";
           
//             }
//         break;
//     case "Alien ship 2":
//        if(alienfleet1.ships[i].hull > 0){
//         let shiphull2 = document.getElementById("1")
//         shiphull2.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
//         let shipfirepower2 = document.getElementById("firepower1")
//         shipfirepower2.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
//         let shipaccuracy2 = document.getElementById("accuracy1")
//         shipaccuracy2.innerHTML = `Accuracy: ${alienfleet1.ships[i].accuracy}`;
//        } 
//         else if(alienfleet1.ships[i].hull <= 0){
//             let alienship2 = document.getElementById("Alienship2")
//             alienship2.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
//             alienship2.innerHTML = `<b>Alienship 2 defeated</b>
//             <br> Hull: ${alienfleet1.ships[i].hull}
//             <br> Firepower: ${alienfleet1.ships[i].firepower}
//             <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
//             alienship2.style.width = "147px";
//             alienship2.style.height = "247px"
//             alienship2.style.display ="flex";
//             alienship2.style.flexDirection = "column"
//             alienship2.style.justifyContent ="center";
//             alienship2.style.alignItems ="center";
//             alienship2.style.color = "white";
    
//             }
//         break;
//     case "Alien ship 3":
//         if(alienfleet1.ships[i].hull > 0) {
//             let shiphull3 = document.getElementById("2")
//             shiphull3.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
//             let shipfirepower3 = document.getElementById("firepower2")
//             shipfirepower3.innerHTML =` Firepower: ${alienfleet1.ships[i].firepower}`;
//             let shipaccuracy3 = document.getElementById("accuracy2")
//             shipaccuracy3.innerHTML =  `Accuracy: ${alienfleet1.ships[i].accuracy}`;
//         }
//         else if(alienfleet1.ships[i].hull <= 0){
//             let alienship3 = document.getElementById("Alienship3")
//             alienship3.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
//             alienship3.innerHTML = `<b>Alienship 3 defeated</b>
//             <br> Hull: ${alienfleet1.ships[i].hull}
//             <br> Firepower: ${alienfleet1.ships[i].firepower}
//             <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
//             alienship3.style.width = "147px";
//             alienship3.style.height = "247px"
//             alienship3.style.display ="flex";
//             alienship3.style.flexDirection = "column"
//             alienship3.style.justifyContent ="center";
//             alienship3.style.alignItems ="center";
//             alienship3.style.color = "white";
//             }
//         break;
//     case "Alien ship 4":
//         if(alienfleet1.ships[i].hull > 0){
//             let shiphull4 = document.getElementById("3")
//             shiphull4.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
//             let shipfirepower4 = document.getElementById("firepower3")
//             shipfirepower4.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
//             let shipaccuracy4 = document.getElementById("accuracy3")
//             shipaccuracy4.innerHTML =  `Accuracy: ${alienfleet1.ships[i].accuracy}`;
//         }
//         else if(alienfleet1.ships[i].hull <= 0){
//             let alienship4 = document.getElementById("Alienship4")
//             alienship4.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
//             alienship4.innerHTML = `<b>Alienship 4 defeated</b>
//             <br> Hull: ${alienfleet1.ships[i].hull}
//             <br> Firepower: ${alienfleet1.ships[i].firepower}
//             <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
//             alienship4.style.width = "147px";
//             alienship4.style.height = "247px"
//             alienship4.style.display ="flex";
//             alienship4.style.flexDirection = "column"
//             alienship4.style.justifyContent ="center";
//             alienship4.style.alignItems ="center";
//             alienship4.style.color = "white";
//         }
//         break;
//     case "Alien ship 5":
//         if(alienfleet1.ships[i].hull > 0){
//             let shiphull5 = document.getElementById("4")
//             shiphull5.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
//             let shipfirepower5 = document.getElementById("firepower4")
//             shipfirepower5.innerHTML = `Firepower: ${alienfleet1.ships[i].firepower}`;
//             let shipaccuracy5 = document.getElementById("accuracy4")
//             shipaccuracy5.innerHTML =  `Accuracy: ${alienfleet1.ships[i].accuracy}`;
//         }
//         else if(alienfleet1.ships[i].hull <= 0){
//             let alienship5 = document.getElementById("Alienship5")
//             alienship5.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
//             alienship5.innerHTML = `<b>Alienship 5 defeated</b>
//             <br> Hull: ${alienfleet1.ships[i].hull}
//             <br> Firepower: ${alienfleet1.ships[i].firepower}
//             <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
//             alienship5.style.width = "147px";
//             alienship5.style.height = "247px"
//             alienship5.style.display ="flex";
//             alienship5.style.flexDirection = "column"
//             alienship5.style.justifyContent ="center";
//             alienship5.style.alignItems ="center";
//             alienship5.style.color = "white";
//         }
//             break;
//     case "Alien ship 6":
//         if(alienfleet1.ships[i].hull > 0){
//             let shiphull6 = document.getElementById("5")
//             shiphull6.innerHTML = `Hull: ${alienfleet1.ships[i].hull}`;
//             let shipfirepower6 = document.getElementById("firepower5")
//             shipfirepower6.innerHTML =`Firepower: ${alienfleet1.ships[i].firepower}`
//             let shipaccuracy6 = document.getElementById("accuracy5")
//             shipaccuracy6.innerHTML = `Accuracy: ${alienfleet1.ships[i].accuracy}`;
//         }
//         else if (alienfleet1.ships[i].hull <= 0){
//             let alienship6 = document.getElementById("Alienship6")
//             alienship6.style.backgroundColor ="rgba(198, 22, 22, 0.257)";
//             alienship6.innerHTML = `<b>Alienship 5 defeated</b>
//             <br> Hull: ${alienfleet1.ships[i].hull}
//             <br> Firepower: ${alienfleet1.ships[i].firepower}
//             <br> Accuracy: ${alienfleet1.ships[i].accuracy}`
//             alienship6.style.width = "147px";
//             alienship6.style.height = "247px"
//             alienship6.style.display ="flex";
//             alienship6.style.flexDirection = "column"
//             alienship6.style.justifyContent ="center";
//             alienship6.style.alignItems ="center";
//             alienship6.style.color = "white";
//         }
//         break;

//     }
// }











    // if (me.accuracy > alienfleet1.ships[i].accuracy){
    //     battlePrompt.innerText = ("target found")
    //     if(me.firepower > alienfleet1.ships[i].firepower){
    //         battlePrompt.innerText = ("you hit the target!")
    //         me.attack(alienfleet1.ships[i]);
    //     }
    // } else{
    //     battlePrompt.innerText = ("They have")
    // }

//for the ship I am fighting, I want to have a battle.
//if in battle  my hull reaches 0 I die, then I lost the game
//if I still have hull then i continue to fight until the alien ship reaches hull - 0. I win, and get thrown back into the for loop to battle the next ship
//if I win every ship, I win the game.
//propmt after the game to play again