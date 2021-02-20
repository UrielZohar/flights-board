
class APIManager {
    static ROOT = 'https://interview-mock.herokuapp.com/api';

    static get getWorkers() {
      return `${APIManager.ROOT}/workers`;
    }

    static getFlights(workerId : String) {
      return `${APIManager.ROOT}/workers/${workerId}`;
    }
  }
  
  export default APIManager;
  