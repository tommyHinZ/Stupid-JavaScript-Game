var maxScore = 0;
var counter = 1;

class Player{
    constructor(){
        
    }

    clone(){

    }

    crossover(parent){

    }

    //Game stuff
	look(){
		this.vision = this.cartPole.getStateTensor();
	} 

	think(){
		this.decisions = this.brain.feedForward(this.vision);
	}

	move(){
	}


	update(){
		this.lifespan++;
		this.cartPole.update(this.decisions[0]);

		if(this.cartPole.isDone() || this.lifespan > maxLifespan)
			this.dead = true;
	}

	show(){
		renderCartPole(this.cartPole, document.getElementById("canv" + counter), counter);
	}



	calculateFitness(){ //Fitness function : adapt it to the needs of the
		this.fitness = this.lifespan;
		this.fitness /= this.cartPole.theta > 0 ? this.cartPole.theta : -this.cartPole.theta;

		this.score = this.fitness;
	}
}