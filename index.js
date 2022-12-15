//alien game folder
class Ship {
    constructor(shipname, hull, firepower, accuracy){
        this.shipname = shipname;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = +accuracy.toFixed(1);
        
    }
    attack(ship){
        if (me){
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
        if (alienfleet1.ships[i] = destroyedShip){
            document.getElementById("alienship1").style.backgroundColor ="red"
        
        } else{
             document.getElementById("mySpaceship").style.backgroundColor = "blue";
        }
    }
}
let me = new Ship ("USS HelloWorld", 20, 5, .7);
// console.log(me)


// let myshiphull = document.getElementById('my-ship-hull');
// myshiphull.innerHTML = me.hull;
// let myshipfirepower = document.getElementById('my-ship-firepower');
// myshipfirepower.innerHTML = me.firepower;
// let myshipaccuracy = document.getElementById('my-ship-accuracy');
// myshipaccuracy.innerHTML = me.accuracy;


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
// alienfleet1.addShip("Alienship2", undefined, undefined, undefined);
// alienfleet1.addShip("Alienship3", undefined, undefined, undefined);
// alienfleet1.addShip("Alienship4", undefined, undefined, undefined);
// alienfleet1.addShip("Alienship5", undefined, undefined, undefined);
// alienfleet1.addShip("Alienship6", undefined, undefined, undefined);
//checking to see if the array of ships turned into objects with properties
// console.log(alienfleet1);
// alienfleet1.ships[0].addEnemyShip()


// console.log(alienfleet1.ships[0].hull);

//Making the logic for one round of the game
//attacking the ships one by one. I want to iterate through the array of ships. I will use a for loop.
const playGame = () =>{
    for(i = 0; i < alienfleet1.ships.length; i++ ){
            if (me.hull > 0){
                let keepLooping = true;
                while (keepLooping){
                    if (me.accuracy > Math.random()){
                    //my ship is going to hit 70% of  out of a 100%
                        //hit ship
                        console.log("You hit the enemy ship!")
                        me.attack(alienfleet1.ships[i]);
                        if (alienfleet1.ships[i].hull <= 0){ //if this is false, it will check the else if statement, if that is also false, it will take you back to do the while loop again. if it's true, you will break out of the while loop into the for loop again
                            console.log("You won that battle! let's keep going!")
                            me.retreat(alienfleet1.ships[i]);
                            break;
                        } else if (me.hull <= 0){
                            console.log("Critical hit!")
                            break;
                        }
                             //takes you out the while loop
                    } else {
                        //my ship attacked but missed
                        //alien ship attacks
                        console.log ("You missed!")
                        if(alienfleet1.ships[0].accuracy > Math.random()){
                            console.log("You have been hit!")
                            alienfleet1.ships[i].attack(me);
                            if (alienfleet1.ships[i].hull <= 0){
                                me.retreat(alienfleet1.ships[i]);
                                console.log("You won that battle! let's keep going!")
                                break;
                            } else if (me.hull <= 0){
                                console.log("Critical hit!")
                                break;
                            }
                        } else{
                            console.log("The alien ship missed their hit! Your turn!")
                        }
                        
                        
                        }
                        
            
                }        
            }

         if (me.hull <= 0){
            console.log("You lost, loser!")
            alienfleet1.ships[i].retreat(me);
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