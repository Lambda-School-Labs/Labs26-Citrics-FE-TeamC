import React from "react";
import styled from "styled-components";

import Header from "../../common/Header.js";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem;
  font-family: Amatic SC;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const El = styled.div`
  margin: 1.5rem;
  padding-top: 1%;
  width: 25%;
  background: rgba(112, 199, 131, 0.9);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Footer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 45%;
  border-radius: 0.5rem;
`;
function About() {
  return (
    <>
      <Header />

      <div className="aboutProject">
        <h2>The Project</h2>
        <p>
          Driftly is a comparison tool of over 650 US cities that analyzes
          information such as poulation, weather, jobs, and COVID-19 data, and
          allows users to compare up to 3 cities and find their next home.
        </p>
        <p>
          Begin using Driftly by searching for the city or cities you are
          looking for in the search bar or just by scrolling down. Once you have
          found the city you are looking for, you can click on the city card
          itself to open up a city report with a quick overview of that city.
          Alternatively, you can click on the 'plus' button located on the top
          right corner of every city card to add it to the comparison container.
          Up to 3 cities can be added at one time.
        </p>
        <p>
          Once a city or cities have been added to the container, click on the
          'Compare Cities' button. This will take you to the comparison page
          with all sorts of visual representations.
        </p>

        <p>
          You can also click on the 'Advanced Search' button to filter out
          cities based on various city data such as population, temperature,
          number of jobs in a particular sector, average housing prices, and
          number of COVID-19 positive outcomes.
        </p>
        <p>
          Whatever it is you're looking for, Driftly will surely help you in
          finding your next home!
        </p>
      </div>

      <h2
        style={{
          textAlign: "center",
          fontFamily: "Amatic SC",
          fontWeight: "bold",
          fontSize: "3rem",
          color: "#656665"
        }}
      >
        The Team
      </h2>
      <Wrapper>
        {data.map((e, index) => (
          <El key={index}>
            <Image alt="img" src={e.image} style={{ margin: "1.5rem" }} />
            <h3
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
                fontFamily: "Oswald"
              }}
            >
              {e.name}
            </h3>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                marginBottom: "0"
              }}
            >
              {e.role}
            </p>
            <div style={{ display: "flex", fontSize: "1.2rem" }}>
              <a
                href={e.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                <GithubOutlined className="icon" />
                <span
                  className="text"
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  Github
                </span>
              </a>
              <a
                href={e.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                <LinkedinOutlined className="icon" />
                <span
                  className="text"
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  LinkedIn
                </span>
              </a>
            </div>
          </El>
        ))}
      </Wrapper>
      <Footer style={{ marginBottom: "2.5rem" }}>
        Copyright 2020{" "}
        <span style={{ color: "rgba(112, 199, 131, 0.9)" }}>Driftly Team</span>
      </Footer>
    </>
  );
}

const data = [
  {
    name: "Vlad",
    role: "APL",
    github: "https://github.com/vladmog",
    linkedIn: "https://www.linkedin.com/in/vladmog/",
    image: "https://ca.slack-edge.com/ESZCHB482-W012X6RQ5G9-833633f70058-512"
  },
  {
    name: "Connor Angelis",
    role: "TPL",
    github: "https://github.com/KonstadinosAngelis",
    linkedIn: "https://www.linkedin.com/in/konstadinos/",
    image: "https://ca.slack-edge.com/ESZCHB482-W0138D6L6UQ-bbfef33c1387-512"
  },
  {
    name: "Shayne Smith",
    role: "Full Stack Engineer",
    github: "https://github.com/shayne-smith",
    linkedIn: "https://www.linkedin.com/in/shayne-smith1/",
    image: "https://ca.slack-edge.com/ESZCHB482-W0123RTM51V-bf749dc3288f-512"
  },
  {
    name: "Guillermo Alfaro",
    role: "Full Stack Engineer",
    github: "https://github.com/galfarotolon",
    linkedIn: "https://www.linkedin.com/in/guillermo-alfaro/",
    image: "https://ca.slack-edge.com/ESZCHB482-W0123RTV5QX-3ba8de22b37c-512"
  },
  {
    name: "Nathan Nguyen",
    role: "Full Stack Engineer",
    github: "https://github.com/NathanNNguyen/",
    linkedIn: "https://www.linkedin.com/in/nathannnguyen/",
    image: "https://ca.slack-edge.com/ESZCHB482-W012QNUUE6Q-79b5f4d3d5d8-512"
  },
  {
    name: "Michael Toce",
    role: "Data Scientist",
    github: "https://github.com/mtoce",
    linkedIn: "https://www.linkedin.com/in/mtoce/",
    image: "https://ca.slack-edge.com/ESZCHB482-W012JHYTBU2-e56d9a3755f2-512"
  },
  {
    name: "Rourke Struthers",
    role: "Data Scientist",
    github: "https://github.com/Struth-Rourke",
    linkedIn: "https://www.linkedin.com/in/rourkestruthers/",
    image: "https://ca.slack-edge.com/ESZCHB482-W012QNXTZMJ-4c660cb71977-512"
  },
  {
    name: "Fatai King",
    role: "Data Scientist",
    github: "https://github.com/fataik1",
    linkedIn: "https://www.linkedin.com/in/fatai-king-8b2b5a9b/",
    image: "https://ca.slack-edge.com/ESZCHB482-W012BRSS6EA-1757906d14b2-512"
  }
];

export default About;
