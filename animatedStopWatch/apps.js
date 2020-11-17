class Timer {
    constructor( durationInput, startButton, pauseButton ) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        // value of [this] inside the constructor 
        // will be bind inside whatever function is called in 
        this.startButton.addEventListener( 'click', this.start.bind(this) );  
        this.pauseButton.addEventListener( 'click', this.pause.bind(this) );
    }

    start(){
        // here this will refer to all the properties[start, tick]
        // and parameter iside constructor of class 
        this.tick();

        // saving the id of setInterval in intervalId
        // after every 1 sec tick() method will run
        this.intervalId = setInterval( this.tick, 1000 );
    }

    pause(){
        // with clearInterval you stop setInterval
        // with pause method interval will stop running
        clearInterval( this.intervalId );
    }

    tick = () => {
        // using arrow function to refer [this] to Timer
        const timeRemaning = parseFloat( this.durationInput.value )

        // after every one sec 
        // durationInput value will be substracted with 1
        this.durationInput.value = timeRemaning - 1;

        // shortcut
        // this.durationInput.value =  parseFloat( this.durationInput.value ) - 1 

        // stop when value is equal to 0 
        if( parseFloat( this.durationInput.value) === 0 ){
            clearInterval( this.intervalId )
        }
        // console.log( 'tick' );
    }
}

const durationInput = document.querySelector( '#duration' );
const startButton = document. querySelector( '#start' );
const pauseButton = document.querySelector( '#pause' )

const timer = new Timer( durationInput, startButton, pauseButton );
timer.start();