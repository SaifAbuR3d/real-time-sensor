import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBld121eyGUvN09x81kAYq8NXM2h1qd0BI",
  authDomain: "arduino-uno-131eb.firebaseapp.com",
  databaseURL: "https://arduino-uno-131eb-default-rtdb.firebaseio.com",
  projectId: "arduino-uno-131eb",
  storageBucket: "arduino-uno-131eb.firebasestorage.app",
  messagingSenderId: "682910470146",
  appId: "1:682910470146:web:7ac8021662f5aa90b8971b",
  measurementId: "G-G3CXQ760W9"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const HumidityRef = ref(database, "Humidity");
const TemperatureRef = ref(database, "Temperature");


function fetchData() {
  console.log("fetching data");

  onValue(HumidityRef, (snapshot) => {
    const humidity = snapshot.val();
    console.log(humidity);

    if (humidity) {
      document.getElementById("humidity").textContent = humidity;
    }
    else {
      console.log("No Temp data available");
    }
  });


  onValue(TemperatureRef, (snapshot) => {
    const temperature = snapshot.val();
    console.log(temperature);

    if (temperature) {
      document.getElementById("temperature").textContent = temperature;
    }
    else {
      console.log("No Humidity data available");
    }
  });

}

fetchData();
