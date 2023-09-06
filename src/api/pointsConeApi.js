class PointsConeApi {
  
    constructor({ baseURL }) {
      this.baseURL = baseURL;
    }
  
    async getAllPoints(objOfDataCone) {
      const res = await fetch(`${this.baseURL}/api/v1/points`, {
          method: 'POST',
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(objOfDataCone)
        }
      );
  
      return res.json();
    }
  
  }
  
  export const pointsConeApi = new PointsConeApi({
    baseURL: "http://localhost:3005",
  });
  