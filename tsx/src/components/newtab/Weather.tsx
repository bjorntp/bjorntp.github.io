import React, { useState } from "react";

const Weather = () => {

  const geoLoc = navigator.geolocation;
  const api_key: string = "f930f7fcff2e46c5836230620232504";
  const [weather, setWeather] = useState(<></>);

  const [posLat, setLat] = useState(55.7061745);
  const [posLong, setLong] = useState(13.1930538);

  const [started, toggleStarted] = useState(false);
  const successCallback = (position: GeolocationPosition) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
    toggleStarted(true);
    geoLoc.clearWatch(watchID);
  };

  var watchID = geoLoc.watchPosition(successCallback);

  const api_url: string = "http://api.weatherapi.com/v1/forecast.json?key=" + api_key + "&q=" + posLat + "," + posLong;

  async function getWeather() {
    if (started) {
      const api = await fetch(api_url);
      const data = await api.json();
      try {
        const module = await import(`../../assets/weather_icons/${data.current.condition.code}.png`);
        setWeather(
          <div className="bg-gray-200/30 backdrop-blur-md px-5 py-2 rounded-md text-lg h-12">
            <div>
              <div className="flex flex-row items-center justify-center pb-2">
                <p>I {data.location.name} är temperaturen {data.current.temp_c}°C</p>
                <img alt="ikon" className="h-8 w-8 ml-2" src={module.default} />
              </div>
            </div>
          </div>
        )

      } catch (error) {
        console.log("Failed");
      }

    }
  }

  if (!started) {
    getWeather();
    toggleStarted(true);
  }

  setTimeout(function () {
    getWeather();
  }, 10000)

  return (
    <>
      <div>{weather}</div>
    </>
  );
}

export default Weather;
