// Dicey Dice Roller v0.0.1
// tornotlukin @2020

// Global variable fun
   

// Vue init
const app = new Vue({
    el: '#app',
    data: {
        d2: [1,2],
        d4: [1,2,3,4],
        d6: [1,2,3,4,5,6],
        d8: [1,2,3,4,5,6,7,8],
        d10: [1,2,3,4,5,6,7,8,9,10],
        d12: [1,2,3,4,5,6,7,8,9,10,11,12],
        d20: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        d100: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
        d52: ["as","2s","3s","4s","5s","6s","7s","8s","9s","10s","js","qs","ks","ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","jc","qc","kc","ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","jh","qh","kh","ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","jd","qd","kd"],
        dTarot: ["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p","12p","13p","14p","1w","2w","3w","4w","5w","6w","7w","8w","9w","10w","11w","12w","13w","14w","1s","2s","3s","4s","5s","6s","7s","8s","9s","10s","11s","12s","13s","14s","1c","2c","3c","4c","5c","6c","7c","8c","9c","10c","11c","12c","13c","14c"],
        roller: [],
        dieCue: [],
        numberOfDice: 1,
        dieType: 'd2',
        dieTypePic: `<img src="./img/d2.svg" width="50px" height="50px">`,
        dieVisualsTop: ``,
        rollHistory: ``,
        diceSum: [],
        addDiceRolls: false
    },
    computed: {
        rollerMoller: function() {
            for (i = 0; i < this.numberOfDice; i++) {
                let x = holyRoller(this.roller);
                this.dieCue.push(x[Math.floor(x.length/2)]);
                x = [];
            }
            if (this.addDiceRolls === false) {
                return this.showDiceRolls;
            } else {
                return this.addingEngine;
            }
            
        },
        dealerFeeler: function() {
            let x = holyRoller(this.roller);
            this.dieCue = x.slice(0, this.numberOfDice);
            return this.showDiceRolls;
        },
        showDiceRolls: function() {
            this.showHistory;
            
            if (this.addDiceRolls === false) {
            this.dieVisualsTop = `<div class="row">`;
                for (i = 0; i < this.numberOfDice; i++) {
                    this.dieVisualsTop = this.dieVisualsTop + `<div style="display: block; margin: 2px; width: 75px; height: 75px; background-image: url('./img/${this.dieType}b.svg'); font-size: 38pt; font-weight: 700; color: black; text-shadow: 0px 0px 7px #e9ecef; -webkit-text-stroke: 1px #e9ecef; text-align: center; vertical-align: middle;">${this.dieCue[i]}</div>`;
                }
                
                this.dieVisualsTop = this.dieVisualsTop + `</div>`;
                return this.dieVisualsTop;
            } else {
                this.dieVisualsTop = `<div class="row">`;
                for (i = 0; i < this.numberOfDice; i++) {
                    if (i === this.numberOfDice - 1) {
                    this.dieVisualsTop = this.dieVisualsTop + `<div style="display: block; margin: 2px; width: 75px; height: 75px; background-image: url('./img/${this.dieType}b.svg'); font-size: 38pt; font-weight: 700; color: black; text-shadow: 0px 0px 7px #e9ecef; -webkit-text-stroke: 1px #e9ecef; text-align: center; vertical-align: middle;">${this.dieCue[i]}</div><div style="font-size: 30pt; text-align: center">=</div>`;
                    } else {
                    this.dieVisualsTop = this.dieVisualsTop + `<div style="display: block; margin: 2px; width: 75px; height: 75px; background-image: url('./img/${this.dieType}b.svg'); font-size: 38pt; font-weight: 700; color: black; text-shadow: 0px 0px 7px #e9ecef; -webkit-text-stroke: 1px #e9ecef; text-align: center; vertical-align: middle;">${this.dieCue[i]}</div><div style="font-size: 30pt; text-align: center">+</div>`;
                    }
                }
                
                this.dieVisualsTop = this.dieVisualsTop + `<div style="display: block; margin: 2px; width: 75px; height: 75px; background-image: url('./img/${this.dieType}b.svg'); font-size: 38pt; font-weight: 700; color: black; text-shadow: 0px 0px 7px #e9ecef; -webkit-text-stroke: 1px #e9ecef; text-align: center; vertical-align: middle;">${this.diceSum}</div></div>`;
                return this.dieVisualsTop;
            }
            
        },
        showHistory: function() {
            if (this.addDiceRolls === false) {
                let x = this.dieCue.join(', ');
                this.rollHistory = this.rollHistory + `<span class="mb-2">On <b>${this.numberOfDice}${this.dieType}</b>, you rolled <b>${x}</b>.</span><br />`;
            } else {
                let x = this.dieCue.join(', ');
                this.rollHistory = this.rollHistory + `<span class="mb-2">On <b>${this.numberOfDice}${this.dieType}</b>, you rolled <b>${x}</b> and its sum is <b>${this.diceSum}</b>.</span><br />`;
            }
        },
        addingEngine: function() {
            
            this.diceSum = this.dieCue.reduce(function(a, b){
                return a + b;
            }, 0);
            return this.showDiceRolls;
        }
    },
    watch: {
        
    },
    methods: {
        diePicCheck: function() {
            return this.dieTypePic = `<img src="./img/${this.dieType}.svg" width="50px" height="50px">`;
        },
        rollTheDice: function() {
            if (this.numberOfDice <= 1) {
                this.numberOfDice = 1;
            }

            // clear out dice fields for clean rolling 
            this.roller = [];
            this.dieCue = [];

            switch(this.dieType) {
                case 'd2':
                    console.log('d2');
                    this.roller = this.d2;
                    return this.rollerMoller;
                    break;
                case 'd4':
                    console.log('d4');
                    this.roller = this.d4;
                    return this.rollerMoller;
                    break;
                case 'd6':
                    console.log('d6');
                    this.roller = this.d6;
                    return this.rollerMoller;
                    break;
                case 'd8':
                    console.log('d8');
                    this.roller = this.d8;
                    return this.rollerMoller;
                    break;
                case 'd10':
                    console.log('d10');
                    this.roller = this.d10;
                    return this.rollerMoller;
                    break;
                case 'd12':
                    console.log('d12');
                    this.roller = this.d12;
                    return this.rollerMoller;
                    break;
                case 'd20':
                    console.log('d20');
                    this.roller = this.d20;
                    return this.rollerMoller;
                    break;
                case 'd100':
                    console.log('d100');
                    this.roller = this.d100;
                    return this.rollerMoller;
                    break;
                case 'd52':
                    console.log('Poker Deck');
                    this.roller = this.d52;
                    return this.dealerFeeler;
                    break;
                case 'dTarot':
                    console.log('Tarot Deck');
                    this.roller = this.dTarot;
                    return this.dealerFeeler;
                    break;              
                default:
                    console.log('defaulted');
            }
        },
        clearHistory: function() {
            return this.rollHistory = ``;
        }
    }
});

const holyRoller = (diceTypeArray) => {
    // Fisher–Yates shuffle-randomizer
    let m = diceTypeArray.length, t, i;

    // While there remain elements to shuffle
    while (m) {

        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element
        t = diceTypeArray[m];
        diceTypeArray[m] = diceTypeArray[i];
        diceTypeArray[i] = t;
    };

    return diceTypeArray;
}
