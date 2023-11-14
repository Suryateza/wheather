import React, { useState } from "react";
// import axios from "axios";
function App() {
  const [city, setCity] = useState();
  const [result, setResult] = useState("");
  const changHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((res) => res.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        setResult(
          "Temperature at " + city + "\n" + Math.round(celcius) + "°C" + " ☁️"
        );
      })
      .catch((error) => console.log(error));
    setCity("");
  };

  return (
    <div>
      <center>
        <nav className="bg-dark p-4 text-white">
          <h1>Weather Updating!</h1>
        </nav>
        <div className="card  bg-info ">
          <div className="card-body p-10 ">
            <h2 className="card-title bold">Weather App</h2>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                size="30"
                className="p-1"
                placeholder="Enter city name"
                value={city}
                onChange={changHandler}
              ></input>
              <br />
              <br />
              <input type="Submit" className="hi p-2" value="Get Temperature" />
            </form>
          </div>
          <h2 className=" res text-bold text-danger p-2">{result}</h2>
        </div>
      </center>
    </div>
  );
}

export default App;
