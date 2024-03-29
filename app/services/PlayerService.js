import { AppState } from "../AppState.js";
import { Player } from "../models/playerModel.js";


class PlayerService {

    addPoint(playerName) {
        console.log('➕')
        const playerToAdd = AppState.players.find(player => player.name == playerName)
        console.log('Adding?', playerToAdd,);
        playerToAdd.score += 1
        console.log(playerToAdd)
    }


    // remove player



    // add player
}

export const playerService = new PlayerService()