// class Timer {
//     constructor( durationInput, startButton, pauseButton, callbacks ) {
//         this.durationInput = durationInput;
//         this.startButton = startButton;
//         this.pauseButton = pauseButton;

//         if(callbacks) {
//             this.onStart = callbacks.onStart;
//             this.onTick = callbacks.onTick;
//             this.onComplete = callbacks.onComplete;
//         }

//         // value of [this] inside the constructor 
//         // will be bind inside whatever function is called in 
//         this.startButton.addEventListener( 'click', this.start.bind(this) );  
//         this.pauseButton.addEventListener( 'click', this.pause.bind(this) );
//     }

//     start(){
//         if(this.onStart){
//             this.onStart(this.timeRemaining);
//         }
//         // here this will refer to all the properties[start, tick]
//         // and parameter iside constructor of class 
//         this.tick();

//         // saving the id of setInterval in intervalId
//         // after every 50 mili sec tick() method will run
//         this.intervalId = setInterval( this.tick, 50 );
//     }

//     pause(){
//         // with clearInterval you stop setInterval
//         // with pause method interval will stop running
//         clearInterval( this.intervalId );
//         console.log('Timer Paused')
//     }

//     timerComplete(){
//         if(this.onComplete){
//             this.onComplete();
//         }
//         clearInterval( this.intervalId );
//     }

//     tick = () => {
//         // using arrow function to refer [this] to Timer
//         // const timeRemaining = parseFloat( this.durationInput.value ) //old code

//         // after every one sec 
//         // durationInput value will be substracted with 1
//         // this.durationInput.value = timeRemaining - 1; //old code

//         // shortcut
//         // this.durationInput.value =  parseFloat( this.durationInput.value ) - 1 //shortcut for old code

//         // const timeRemaining = this.timeRemaining; // run function at line 61
//         // assigning the value to function at line 65
//         // this.timeRemaining = timeRemaining - 1;

//         // shortcut
//         // run set           run get      
//         // this.timeRemaining = this.timeRemaining -1

//         // stop when value is equal to 0 
//         // if( parseFloat( this.durationInput.value) === 0 ){
//         //     clearInterval( this.intervalId )
//         // }

//         if ( this.timeRemaining <= 0 ) { // function get timeRemaining() is used to access value
//             this.pause();
//             if (this.onComplete) {
//                 this.onComplete();
//             }
//         } else {
//             // run set            run get  
//             this.timeRemaining = this.timeRemaining - 0.05; // substracting 5 milisecond 
//             if(this.onTick) {
//                 this.onTick(this.timeRemaining);
//             }
//         }
//     };

//     get timeRemaining(){
//         return parseFloat( this.durationInput.value ); // return float

//     }

//     set timeRemaining(time){ // here argument (time) value 
//         // will be taken from this.timeRemaining - 0.05 line 77
//         this.durationInput.value = time.toFixed(2);
//     }
// };

class Timer {
    constructor( durationInput, durationIn, startButton, pauseButton, callbacks  ) {
        this.durationInput = durationInput;
        this.timeLeft = durationIn;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        // value of [this] inside the constructor 
        // will be bind inside whatever function is called in 
        this.startButton.addEventListener( 'click', this.start.bind(this) );  
        this.pauseButton.addEventListener( 'click', this.pause.bind(this) );
        this.durationInput.addEventListener( 'keyup', this.shuru.bind(this) )
    }

    shuru(){
        this.timeLeft.value = this.durationInput.value;
        if(this.onStart){
            this.onStart( parseFloat (this.durationInput.value) );
        }
        // this.start()
    }

    start(){

        // this.timeLeft.value = this.durationInput.value;

        // if(this.onStart){
        //     this.onStart( parseFloat (this.durationInput.value) );
        // }

        // here this will refer to all the properties[start, tick]
        // and parameter iside constructor of class 
        this.tick();

        // saving the id of setInterval in intervalId
        // after every 50 mili sec tick() method will run
        this.intervalId = setInterval( this.tick, 50 );
    }

    pause(){
        // with clearInterval you stop setInterval
        // with pause method interval will stop running
        clearInterval( this.intervalId );
        console.log('Timer Paused')
    }

    timerComplete(){
        if(this.onComplete){
            this.onComplete();
        }
        clearInterval( this.intervalId );
    }

    tick = () => {
    
        if ( this.timeRemaining <= 0 ) { // function get timeRemaining() is used to access value
            // this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            // run set            run get  
            this.timeRemaining = this.timeRemaining - 0.05; // substracting 5 milisecond 
            if(this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    };

    get timeRemaining(){
        return parseFloat( this.timeLeft.value ) // return float
    }

    set timeRemaining(time){ // here argument (time) value 
        // will be taken from this.timeRemaining - 0.05 line 77
        this.timeLeft.value = time.toFixed(2);
    }
};
