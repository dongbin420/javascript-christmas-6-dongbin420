import EventController from "./controller/EventController.js";

class App {
  async run() {
    const EVENT_CONTROLLER = new EventController();
    await EVENT_CONTROLLER.start();
  }
}

export default App;
