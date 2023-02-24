import React from "react";
import PwGen from "../../assets/Password.png"
import portfolio1 from "../../assets/portfolio 1.png"
import quiz from "../../assets/Codequiz.png"
import food from "../../assets/Foodtracker.png"
import park from "../../assets/parkit.png"
import weather from "../../assets/Weather.png"
import Records from "../../assets/New-age-records.png"
export default function Portfolio() {
  return (
    <div className="portfolio">
      <div>
        <p>Password Generator</p>
        <img alt="password generator" src={PwGen}></img>
       <div>
        <a
          href="https://hanadisse.github.io/Password-Generator/"
          className="link"
        ><button>Site</button></a>
        <a href="https://github.com/Hanadisse/Password-Generator">
          <button>Repo</button>
        </a>
        </div>
      </div>

      <div>
        <p>First Portfolio</p>
       <img alt="first portfolio" src={portfolio1}></img>
       <div>
        <a href="https://hanadisse.github.io/Portfolio-1/" className="link"><button>Site</button></a>
        <a href="https://github.com/Hanadisse/Portfolio-1">
          <button>Repo</button>
        </a>
        </div>
      </div>

      <div>
        <p>JavaScript Code Quiz</p>
        <img alt="code quiz" src={quiz}></img>
        <div>
        <a
          href="https://hanadisse.github.io/java-code-quiz/"
          className="link"
        ><button>Site</button></a>
        <a href="https://github.com/Hanadisse/java-code-quiz">
          <button>Repo</button>
        </a>
        </div>
      </div>

      <div>
        <p>Food Tracker</p>
        <img alt="food tracker" src={food}></img>
        <div>
        <a
          href="https://serene-taiga-18669.herokuapp.com/"
          className="link"
        ><button>Site</button></a>
        <a href="https://github.com/kipschetnan/Food-Tracker">
          <button>Repo</button>
        </a>
        </div>
      </div>

      <div>
        <p>New Age Records</p>
        <img alt="New Age Records" src={Records}></img>
        <div>
        <a
          href="https://fast-caverns-21349.herokuapp.com/"
          className="link"
        ><button>Site</button></a>
        <a href="https://github.com/nambui17/super-sellers">
          <button>Repo</button>
        </a>
        </div>
      </div>

      <div>
        <div>
          <p>Weather Dashboard</p>
          <img alt="weather dashboard" src={weather}></img>
         <div>
          <a
            href="https://hanadisse.github.io/City-weather-api/"
            className="link"
          ><button>Site</button></a>
          <a href="https://github.com/Hanadisse/City-weather-api">
            <button>Repo</button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
