import React from "react";
import cloudCasino from "../../assets/thecloudcasino.png";
import marketTalk from "../../assets/markettalk.png";
import techBlog from "../../assets/techblog.png";
import weatherDashboard from "../../assets/weatherdashboard.png";
import codeQuiz from "../../assets/codequiz.jpeg";
import workDayPlanner from "../../assets/workdayplanner.png";

export default function Portfolio() {
    return (
      <div className="page">
        <h1>My Portfolio</h1>
        <div className="card-container d-flex flex-row flex-wrap">
          {/* The Cloud Casino */}
          <a
            href="https://glacial-reef-71102.herokuapp.com/"
            alt="The Cloud Casino Full Stack Web Application"
            Title="This is a link to "
            target="_blank"
          >
            <div className="card">
              <img
                className="card-img-top"
                src={cloudCasino}
                alt="The Cloud Casino"
              />
              <div className="card-body">
                <h5 className="card-title">The Cloud Casino</h5>
                <p className="card-text">
                  This application was created for users to be able to play 
                  casino games without having to spend actual money.
                </p>
                <ul>
                  <li>MySQL database with Sequelize queries</li>
                  <li>Sever side rendering using Handlebars</li>
                  <li>Role: Full Stack Developer</li>
                </ul>
                <a
                  href="https://glacial-reef-71102.herokuapp.com/"
                  className="card-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view deployed site!
                </a>
                <br />
                <a
                  href="https://github.com/jasonjayoo/The-Cloud-Casino"
                  className="card-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view the GitHub repository!
                </a>
              </div>
            </div>
          </a>

          <a href="https://calvin-kim13.github.io/marketTalk/" alt="Market Talk Web Application" Title="This is a link to " target="_blank">
        <div className="card">
          <img
            className="card-img-top"
            src={marketTalk}
            alt="Market Talk"
          />
          <div className="card-body">
            <h5 className="card-title">Market Talk</h5>
            <p className="card-text">
              This application was created for users to check current
              stock prices and their corrosponding news.
            </p>
            <ul>
              <li>
                Retrieves stock news and financial ratios from two different api's.
              </li>
              <li>Role: JavaScript/Front End Developer</li>
            </ul>
            <a
              href="https://calvin-kim13.github.io/marketTalk/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view deployed site!
            </a>
            <br />
            <a
              href="https://github.com/calvin-kim13/marketTalk"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view the GitHub repository!
            </a>
          </div>
        </div>
        </a>

        <a href="https://stark-woodland-79010.herokuapp.com/" alt="The Tech Blog" Title="This is a link to " target="_blank">
        <div className="card">
          <img className="card-img-top" src={techBlog} alt="The Tech Blog" />
          <div className="card-body">
            <h5 className="card-title">Tech Blog</h5>
            <p className="card-text">
              The Tech Blog is a CMS-style blog site. Developers can publish blog posts and comment on
              other developers' posts.
            </p>
            <ul>
              <li>MySQL database with sequelize queries</li>
              <li>User authentication with bcrypt</li>
              <li>Role: Developer</li>
            </ul>
            <a
              href="https://stark-woodland-79010.herokuapp.com/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view deployed site!
            </a>
            <br />
            <a
              href="https://github.com/BroBrett/Tech-Blog"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view the GitHub repository!
            </a>
          </div>
        </div>
        </a>

        <a href="https://brobrett.github.io/WeatherDashboard/" alt="Weather Dashboard" Title="This is a link to " target="_blank">
        <div className="card">
          <img
            className="card-img-top"
            src={weatherDashboard}
            alt="The Weather Dashboard"
          />
          <div className="card-body">
            <h5 className="card-title">The Weather Dashboard</h5>
            <p className="card-text">
              The weather dashboard allows you to get current weather
              information for cities around the globe.
            </p>
            <ul>
              <li>The OpenWeatherMap API is utilized to obtain weather data</li>
              <li>Enter the name of the city you wish to search</li>
              <li>Role: Sole developer</li>
            </ul>
            <a
              href="https://brobrett.github.io/WeatherDashboard/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view deployed site!
            </a>
            <br />
            <a
              href="https://github.com/BroBrett/WeatherDashboard"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view the GitHub repository!
            </a>
          </div>
        </div>
        </a>

        <a href="https://brobrett.github.io/code-quiz/" alt="The Coding Quiz" Title="This is a link to " target="_blank">
        <div className="card">
          <img className="card-img-top" src={codeQuiz} alt="The Coding Quiz" />
          <div className="card-body">
            <h5 className="card-title">The Coding Quiz</h5>
            <p className="card-text">
              The coding quiz tests your coding knowledge with five questions
              that you answer by clicking an answer button, but watch out you
              only get 60 seconds and for every wrong answer you'll lose 8
              seconds from the clock.{" "}
            </p>
            <ul>
              <li>A quiz to test your coding knowledge</li>
              <li>Built with, HTML5, CSS3, JavaScript</li>
              <li>Role: Sole developer</li>
            </ul>
            <a
              href="https://brobrett.github.io/code-quiz/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view deployed site!
            </a>
            <br />
            <a
              href="https://github.com/BroBrett/code-quiz"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view the GitHub repository!
            </a>
          </div>
        </div>
        </a>

        <a href="https://brobrett.github.io/workdayschedular/" alt="Work Day Scheduler" Title="This is a link to " target="_blank">
        <div className="card">
          <img
            className="card-img-top"
            src={workDayPlanner}
            alt="The Work Day Planner"
          />
          <div className="card-body">
            <h5 className="card-title">The Work Day chedular</h5>
            <p className="card-text">
              The Work Day Scheduler allows you to plan out your work day
              between 9am - 5pm. The events are color-coded depending on the
              time of day and if the event has passed, is still taking place or
              in the future.
            </p>
            <ul>
              <li>Utilizes moment.js</li>
              <li>Built with jQuery and bootstrap</li>
              <li>Role: Sole developer</li>
            </ul>
            <a
              href="https://brobrett.github.io/workdayschedular/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view deployed site!
            </a>
            <br />
            <a
              href="https://github.com/BroBrett/workdayschedular"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Click to view the GitHub repository!
            </a>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
}
