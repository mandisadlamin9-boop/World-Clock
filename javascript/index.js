function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format(
      "dddd · MMMM Do YYYY",
    );
    losAngelesTimeElement.innerHTML =
      losAngelesTime.format("h:mm:ss") +
      "<small>" +
      losAngelesTime.format("A") +
      "</small>";
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("dddd · MMMM Do YYYY");
    parisTimeElement.innerHTML =
      parisTime.format("h:mm:ss") +
      "<small>" +
      parisTime.format("A") +
      "</small>";
  }

  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTime = moment().tz("Africa/Johannesburg");
    johannesburgDateElement.innerHTML = johannesburgTime.format(
      "dddd · MMMM Do YYYY",
    );
    johannesburgTimeElement.innerHTML =
      johannesburgTime.format("h:mm:ss") +
      "<small>" +
      johannesburgTime.format("A") +
      "</small>";
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  if (!cityTimeZone) return;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <a class="all-cities" href="#" onclick="showAllCities(); return false;">← All Cities</a>
  <div class="city">
    <div>
      <div class="city-name-row">
        <span class="city-emoji">📍</span>
        <h2>${cityName}</h2>
      </div>
      <div class="date">${cityTime.format("dddd · MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
  </div>`;
}

function showAllCities() {
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city" id="los-angeles">
      <div><div class="city-name-row"><span class="city-emoji">🌴</span><h2>Los Angeles</h2></div><div class="date"></div></div>
      <div class="time"></div>
    </div>
    <div class="city" id="paris">
      <div><div class="city-name-row"><span class="city-emoji">🗼</span><h2>Paris</h2></div><div class="date"></div></div>
      <div class="time"></div>
    </div>
    <div class="city" id="johannesburg">
      <div><div class="city-name-row"><span class="city-emoji">🌍</span><h2>Johannesburg</h2></div><div class="date"></div></div>
      <div class="time"></div>
    </div>`;
  document.querySelector("#city").value = "";
  updateTime();
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
