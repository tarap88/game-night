import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


import { Player } from '../app/models/playerModel.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  players = [
    new Player("Swell Sarah", 0),
    new Player("Dizzy Dorris", 0),
    new Player("Good Ole Benny", 0),
    new Player("Chili Chuck", 0)

  ]




}










export const AppState = createObservableProxy(new ObservableAppState())