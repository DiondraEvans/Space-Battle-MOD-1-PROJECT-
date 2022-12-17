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
        console.log(alienfleet1.ships[i].firepower);
        console.log(ship);
        ship.hull -= alienfleet1.ships[i].firepower;
        console.log(ship)
        } else{
        console.log(me.firepower);
        console.log(ship);
        ship.hull -= me.firepower;
        console.log(ship)
        }
        
        //the last part is to check the ships damage
    }
    retreat(destroyedShip){
        if (destroyedShip ==  me){
           console.log("You retreated")
        } else{
             console.log("Alien retreated")
       
             //trying out html collection
            //  let Alienarray = array.from(alienships);
            //  console.log(Alienarray);
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
alienfleet1.addShip("Alienship1", undefined, undefined, undefined);
alienfleet1.addShip("Alienship2", undefined, undefined, undefined);
alienfleet1.addShip("Alienship3", undefined, undefined, undefined);
alienfleet1.addShip("Alienship4", undefined, undefined, undefined);
alienfleet1.addShip("Alienship5", undefined, undefined, undefined);
alienfleet1.addShip("Alienship6", undefined, undefined, undefined);
//checking to see if the array of ships turned into objects with properties
// console.log(alienfleet1);
// alienfleet1.ships[0].addEnemyShip()

// console.log(typeof alienfleet1.ships);
// console.log(alienfleet1.ships[0].hull);
//connecting html elements with variables in javascript
let myShip = document.getElementById("mySpaceship")
let myshiphull = document.getElementById('my-ship-hull');
myshiphull.innerHTML = me.hull;
let myshipfirepower = document.getElementById('my-ship-firepower');
myshipfirepower.innerHTML = me.firepower;
let myshipaccuracy = document.getElementById('my-ship-accuracy');
myshipaccuracy.innerHTML = me.accuracy;

  
/* <div id="alienship1" class="alienship">
<img src="images/enemy_ship.png" alt="enemyship1">
<div class="alienship1-data">
    <h1>USS HelloWorld</h1>
    <h3 id = "alienship1-hull"> replace </h3>
    <h3 id = "alienship1-firepower">replace</h3>
    <h3 id = "alienship1-accuracy">replace </h3>
</div>
</div> */

let alienship1 = document.getElementById("Alienship1")

let alienship2 = document.getElementById("Alienship2")

let alienship3 = document.getElementById("Alienship3")

let alienship4 = document.getElementById("Alienship4")

let alienship5 = document.getElementById("Alienship5")

let alienship6 = document.getElementById("Alienship6")


let alienship1hull = document.getElementById("alienship1-hull");
alienship1hull.innerHTML = alienfleet1.ships[0].hull;
let alienship1firepower = document.getElementById("alienship1-firepower")
alienship1firepower.innerHTML = alienfleet1.ships[0].firepower;
let alienship1accuracy = document.getElementById("alienship1-accuracy")
alienship1accuracy.innerHTML = alienfleet1.ships[0].accuracy;

let alienship2hull = document.getElementById("alienship2-hull");
alienship2hull.innerHTML = alienfleet1.ships[1].hull;
let alienship2firepower = document.getElementById("alienship2-firepower")
alienship2firepower.innerHTML = alienfleet1.ships[1].firepower;
let alienship2accuracy = document.getElementById("alienship2-accuracy")
alienship2accuracy.innerHTML = alienfleet1.ships[1].accuracy;

let alienship3hull = document.getElementById("alienship3-hull");
alienship3hull.innerHTML = alienfleet1.ships[2].hull;
let alienship3firepower = document.getElementById("alienship3-firepower")
alienship3firepower.innerHTML = alienfleet1.ships[2].firepower;
let alienship3accuracy = document.getElementById("alienship3-accuracy")
alienship3accuracy.innerHTML = alienfleet1.ships[2].accuracy;

let alienship4hull = document.getElementById("alienship4-hull");
alienship4hull.innerHTML = alienfleet1.ships[3].hull;
let alienship4firepower = document.getElementById("alienship4-firepower")
alienship4firepower.innerHTML = alienfleet1.ships[3].firepower;
let alienship4accuracy = document.getElementById("alienship4-accuracy")
alienship4accuracy.innerHTML = alienfleet1.ships[3].accuracy;

let alienship5hull = document.getElementById("alienship5-hull");
alienship5hull.innerHTML = alienfleet1.ships[4].hull;
let alienship5firepower = document.getElementById("alienship5-firepower")
alienship5firepower.innerHTML = alienfleet1.ships[4].firepower;
let alienship5accuracy = document.getElementById("alienship5-accuracy")
alienship5accuracy.innerHTML = alienfleet1.ships[4].accuracy;

let alienship6hull = document.getElementById("alienship6-hull");
alienship6hull.innerHTML = alienfleet1.ships[5].hull;
let alienship6firepower = document.getElementById("alienship6-firepower")
alienship6firepower.innerHTML = alienfleet1.ships[5].firepower;
let alienship6accuracy = document.getElementById("alienship6-accuracy")
alienship6accuracy.innerHTML = alienfleet1.ships[5].accuracy;










let wonGame = false;
//Making the logic for one round of the game
//attacking the ships one by one. I want to iterate through the array of ships. I will use a for loop.
const playGame = () =>{
    let wonGame = false;
    for(i = 0; i < alienfleet1.ships.length; i++ ){
        if (me.hull <= 0){
            wonGame = false;
            console.log("Game Over");
            break;
        }
            else if (me.hull > 0){
                let keepLooping = true;
                while (keepLooping){
                    
                    if (me.accuracy > Math.random()){
                         //my ship is going to hit 70% of  out of a 100%
                        //Nw hit ship
                        console.log("You hit the enemy ship!")
                        me.attack(alienfleet1.ships[i]); //determining whose hull to decrease
            
                        
                                alienfleet1.ships[i].innerHTML = alienfleet1.ships[i].hull;
                         
                        
                        if (alienfleet1.ships[i].hull <= 0){ //if this is false, it will check the else if statement, if that is also false, it will take you back to do the while loop again. if it's true, you will break out of the while loop into the for loop again
                            console.log("You won that battle!")
                            me.retreat(alienfleet1.ships[i]);
                            
                            if(alienfleet1.ships[i] == alienfleet1.ships[6]){
                                console.log("You won!")
                                wonGame = true;
                            }
                            break;
                        } else if (me.hull <= 0){
                            alienfleet1.ships[i].retreat(me);
                            myShip.remove()
                            break;
                        }
                             //takes you out the while loop
                    } 
                    
                    else {
                        //my ship attacked but missed
                        //alien ship attacks
                        console.log ("You missed!")
                        if( alienfleet1.ships[i].hull > 0 && alienfleet1.ships[0].accuracy > Math.random()){
                            console.log("You have been hit!")
                            alienfleet1.ships[i].attack(me);
                            myshiphull.innerHTML = me.hull;
                            if (alienfleet1.ships[i].hull <= 0){
                                me.retreat(alienfleet1.ships[i]);
                                
                                break;
                            } else if (me.hull <= 0){
                                alienfleet1.ships[i].retreat(me);
                                myShip.remove()
                                break;
                            }
                        } else{
                            console.log("The alien ship missed their hit! Your turn!")
                        }
                        
                        
                     }
                        // if (me.hull > 0 && alienfleet1.ships[i] <= 0){
                //     wonGame = true;
                //     console.log("You Won!!")
                //  }         
            
                }  
                      
            } 
       
    };
}

playGame();




    // if (me.accuracy > alienfleet1.ships[i].accuracy){
    //     console.log("target found")
    //     if(me.firepower > alienfleet1.ships[i].firepower){
    //         console.log("you hit the target!")
    //         me.attack(alienfleet1.ships[i]);
    //     }
    // } else{
    //     console.log("They have")
    // }

//for the ship I am fighting, I want to have a battle.
//if in battle  my hull reaches 0 I die, then I lost the game
//if I still have hull then i continue to fight until the alien ship reaches hull - 0. I win, and get thrown back into the for loop to battle the next ship
//if I win every ship, I win the game.
//propmt after the game to play again