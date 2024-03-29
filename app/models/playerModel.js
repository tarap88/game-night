let sarah = {
    name: 'Swell Sarah',
    score: '0'
}

let dorris = {
    name: 'Dizzy Dorris',
    score: '0'
}

let benny = {
    name: 'Good Ole Benny',
    score: '0'
}

let chuck = {
    name: 'Chili Chuck',
    score: '0'
}


export class Player {
    constructor(name, score) {
        this.name = name;
        this.score = 0;
    }



    get PlayerCard() {
        return `
			<div class="player my-5">
				<h3 class="row align-items-center">
					<span class="col-3 text-start nameText">${this.name}</span>
					<span class="col text-end">
						<button class="btnMinus" onclick="app.PlayersController.removePoint('${this.name}')"><i class="mdi mdi-minus-circle-outline"></i></button>
						<span class="text-light mx-1 fs-2">${this.score}</span>
						<button class="btnPlus" onclick="app.PlayersController.addPoint('${this.name}')"><i class="mdi mdi-plus-circle-outline"></i></button>
					</span>
				</h3>
			</div>
		`
    }
}