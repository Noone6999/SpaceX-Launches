
//traemos la API
const API_URL = "https://api.spacexdata.com/v3"; 


//traemos los datos de la API (lansamientos) y tomamos el error si lo hay
export async function getAllLaunches() { 
  try {
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

//Nos devuelve el numero de vuelo
export async function getLaunchByFlightNumber(flightNumber) {
  try {
    const response = await fetch(`${API_URL}/launches/${flightNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
