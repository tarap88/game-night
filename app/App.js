import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
class App {

  router = router

  PlayersController = new HomeController()

  init() {
    this.router.init(app)
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
