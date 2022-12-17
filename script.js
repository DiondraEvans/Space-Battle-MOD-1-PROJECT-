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




for ( i = 0; i < alienfleet1.ships.length; i++){
    switch (alienfleet1.ships[i].shipname){
    case "Alienship1":
        let shiphull1 = document.getElementById("0")
        shiphull1.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship2":
        let shiphull2 = document.getElementById("1")
        shiphull2.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship3":
        let shiphull3 = document.getElementById("2")
        shiphull3.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship4":
        let shiphull4 = document.getElementById("3")
        shiphull4.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship5":
        let shiphull5 = document.getElementById("4")
        shiphull5.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship6":
        let shiphull6 = document.getElementById("5")
        shiphull6.innerHTML = alienfleet1.ships[i].hull;
        break;

    }
}
// const alienHulls = document.querySelectorAll(".hull");

//  for(i =0; i < alienHulls.length; i++){
//         if(alienHulls[i] == i){
//             alienHulls[i].innerHTML = alienfleet1.ships[i].hull
//          }
//     }




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
                       
                        
                        if (alienfleet1.ships[i].hull <= 0){ //if this is false, it will check the else if statement, if that is also false, it will take you back to do the while loop again. if it's true, you will break out of the while loop into the for loop again
                            console.log("You won that battle!")
                            me.retreat(alienfleet1.ships[i]);
                            
                            if(alienfleet1.ships[i] == alienfleet1.ships[6]){
                                console.log("You won!")
                                wonGame = true;
                            }
                            break;
                        } else if (me.hull <= 0){
                            console.log(`${alienfleet1.ships[i].shipname} defeated you!`)
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
                                console.log(`${alienfleet1.ships[i].shipname} defeated you!`)
                                alienfleet1.ships[i].retreat(me);
                                myShip.remove()
                                break;
                            }
                        } else{
                            console.log("The alien ship missed their hit! Your turn!")
                        }
                        
                        
                     }
                        
            
                }  
                      
            } 
       
    };
}

playGame();

for ( i = 0; i < alienfleet1.ships.length; i++){
    switch (alienfleet1.ships[i].shipname){
    case "Alienship1":
        let shiphull1 = document.getElementById("0")
        shiphull1.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship2":
        let shiphull2 = document.getElementById("1")
        shiphull2.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship3":
        let shiphull3 = document.getElementById("2")
        shiphull3.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship4":
        let shiphull4 = document.getElementById("3")
        shiphull4.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship5":
        let shiphull5 = document.getElementById("4")
        shiphull5.innerHTML = alienfleet1.ships[i].hull;
        break;
    case "Alienship6":
        let shiphull6 = document.getElementById("5")
        shiphull6.innerHTML = alienfleet1.ships[i].hull;
        break;

    }
}
for ( i = 0; i < alienfleet1.ships.length; i++){
    switch (alienfleet1.ships[i].shipname){
    case "Alienship1":
        let shipfirepower1 = document.getElementById("firepower0")
        shipfirepower1.innerHTML = alienfleet1.ships[i].firepower;
        break;
    case "Alienship2":
        let shipfirepower2 = document.getElementById("firepower1")
        shipfirepower2.innerHTML = alienfleet1.ships[i].firepower;
        break;
    case "Alienship3":
        let shipfirepower3 = document.getElementById("firepower2")
        shipfirepower3.innerHTML = alienfleet1.ships[i].firepower;
        break;
    case "Alienship4":
        let shipfirepower4 = document.getElementById("firepower3")
        shipfirepower4.innerHTML = alienfleet1.ships[i].firepower;
        break;
    case "Alienship5":
        let shipfirepower5 = document.getElementById("firepower4")
        shipfirepower5.innerHTML = alienfleet1.ships[i].firepower;
        break;
    case "Alienship6":
        let shipfirepower6 = document.getElementById("firepower5")
        shipfirepower6.innerHTML = alienfleet1.ships[i].firepower;
        break;

    }
}
for ( i = 0; i < alienfleet1.ships.length; i++){
    switch (alienfleet1.ships[i].shipname){
    case "Alienship1":
        let shipaccuracy1 = document.getElementById("accuracy0")
        shipaccuracy1.innerHTML = alienfleet1.ships[i].accuracy;
        break;
    case "Alienship2":
        let shipaccuracy2 = document.getElementById("accuracy1")
        shipaccuracy2.innerHTML = alienfleet1.ships[i].accuracy;
        break;
    case "Alienship3":
        let shipaccuracy3 = document.getElementById("accuracy2")
        shipaccuracy3.innerHTML = alienfleet1.ships[i].accuracy;
        break;
    case "Alienship4":
        let shipaccuracy4 = document.getElementById("accuracy3")
        shipaccuracy4.innerHTML = alienfleet1.ships[i].accuracy;
        break;
    case "Alienship5":
        let shipaccuracy5 = document.getElementById("accuracy4")
        shipaccuracy5.innerHTML = alienfleet1.ships[i].accuracy;
        break;
    case "Alienship6":
        let shipaccuracy6 = document.getElementById("accuracy5")
        shipaccuracy6.innerHTML = alienfleet1.ships[i].accuracy;
        break;

    }
}



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