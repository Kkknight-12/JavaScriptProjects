const durationInput = document.querySelector( '#duration' );
const durationIn = document.querySelector( '#Duration' );
const startButton = document. querySelector( '#start' );
const pauseButton = document.querySelector( '#pause' )

// selecting circle
const circle = document.querySelector( 'circle' );

const perimeter = circle.getAttribute( 'r' ) * 2 * Math.PI;
circle.setAttribute( 'stroke-dasharray', perimeter )

// calculation for offset
// offset = (perimeter * timeRemaining) / totalDuration - perimeter

let duration = 0;
const timer = new Timer( durationInput, durationIn, startButton, pauseButton, {

    // all callbacks
    onStart(totalDuration){
        duration = totalDuration; 
        console.log( 'timer Shuru hogya hai' )
    },
    onTick(timeRemaining){
        console.log( 'Tick..tick...ti' )
        // duration = parseInt(this.durationInput.value);
        // remDuration = duration - remDuration;
        circle.setAttribute( 'stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter 
    )},
    onComplete(){
        console.log( 'Timer is Completed' )
    }
    }
);
timer.shuru();
