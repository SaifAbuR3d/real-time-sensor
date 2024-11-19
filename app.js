import { firebaseConfig } from "./config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const HumidityRef = ref(database, "Humidity");
const TemperatureRef = ref(database, "Temperature");

onValue(HumidityRef, (snapshot) => {
  const humidity = snapshot.val();
  if (humidity)
    document.getElementById("humidity").textContent = humidity;
});

onValue(TemperatureRef, (snapshot) => {
  const temperature = snapshot.val();
  if (temperature)
    document.getElementById("temperature").textContent = temperature;
});

