const d2 = ['heads','tails'];
const d4 = [1,2,3,4];
const d6 = [1,2,3,4,5,6];
const d8 = [1,2,3,4,5,6,7,8];
const d10 = [1,2,3,4,5,6,7,8,9,10];
const d12 = [1,2,3,4,5,6,7,8,9,10,11,12];
const d20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const d52 = ["as","2s","3s","4s","5s","6s","7s","8s","9s","10s","js","qs","ks","ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","jc","qc","kc","ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","jh","qh","kh","ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","jd","qd","kd"];
const dTarot = ["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p","12p","13p","14p","1w","2w","3w","4w","5w","6w","7w","8w","9w","10w","11w","12w","13w","14w","1s","2s","3s","4s","5s","6s","7s","8s","9s","10s","11s","12s","13s","14s","1c","2c","3c","4c","5c","6c","7c","8c","9c","10c","11c","12c","13c","14c"];
let roller = 0;   

holyRoller: function(diceType) {
    // Fisher–Yates shuffle-randomizer
    let m = diceType.length, t, i;

    // While there remain elements to shuffle
    while (m) {
    
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element
        t = diceType[m];
        diceType[m] = diceType[i];
        diceType[i] = t;
    };
    
    return diceType;
    },
dieImage: {
    get: function() {
        this.dieType = die
        console.log(this.dieType);
    
    },
    set: function() {
        this.dieTypePic = `<img src="./img/${this.dieType}.svg" width="50px" height="50px">`
    }
    },
checkCount: function(event) {
    console.log('poof');
    if (event === 'buttonAddOne') {
        numberOfDice ++;
    } else if (event === 'buttonSubtractOne' && numberOfDice >= 1) {
            numberOfDice --;
                } else {
                    numberOfDice = 1;
        }
    }

    for (let i = 5; i < 1; i--) {
        console.log(i);
        let imaginaryDie = this.d8;
        let dieRoll = holyRoller(imaginaryDie);
        this.roller.push(dieRoll[0]);
    };
return this.roller;


<div style="display: block;
width: 75px;
height: 75px;
background-image: url('./img/d20.svg');
font-size: 38pt;
font-weight: 700;
color: black;
text-shadow: 0px 0px 7px #e9ecef;
-webkit-text-stroke: 1px #e9ecef;
text-align: center;
vertical-align: middle;
">20</div>

/* const RollUI = Vue.component('rollui', {
    props: ['message', 'author'],
    template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p></div>'
   }); 

   const rollingHistory = Vue.component('rollHist', {
    props: ['numberOfDice', 'dieType', 'dieCue'],
    template: `<span class="rollHist">On {{numberOfDice}}{{dieType}}, you rolled {{dieCue}}</span>`
   });*/

   <div id="controlPanel">
   <span>Control Panel</span><br />
   <span>This is roller value: {{ roller }}</span><br />
   <span>This is dieCue value: {{ dieCue }}</span><br />
   <span>This is numberOfDice value: {{ numberOfDice }}</span><br />
   <span>This is dieType value: {{ dieType }}</span><br />
   <span>This is addDiceRolls value: {{ addDiceRolls }}</span><br />
   <span>This is Dice Sum value: {{ diceSum }}</span><br />
</div>