import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CityContext } from "../../../contexts/CityContext";
import CityCard from "../../common/CityCard.js";
import CardComparison from "../../common/CardComparison.js";
import Header from "../../common/Header.js";
import Hero from "../../common/Hero.js";
import { AutoComplete } from "../../common/AutoComplete.js";
import styled from "styled-components";

const Loading = styled.h4`
  text-align: center;
  color: rgba(112, 199, 131, 0.9);
  font-family: Amatic SC;
  font-size: 3rem;
`;

const End = styled.h4`
  text-align: center;
  color: rgba(112, 199, 131, 0.9);
  font-family: Amatic SC;
  font-size: 3rem;
`;

const Button = styled.button`
  border-radius: 1rem;
  background: rgba(112, 199, 131, 0.9);
  color: white;
  width: 10rem;
  border: none;
  font-size: 1.4rem;
  font-family: Amatic SC;
  font-weight: 700;
  margin: 0.2rem auto;
  box-shadow: 5px 5px 10px rgba(112, 199, 131, 0.6);
`;

function RenderHomePage() {
  const {
    cities,
    comparisonList,
    setComparisonList,
    addCity,
    removeCity,
    isComparing,
    setIsComparing,
    getData,
    weather,
    jobs,
    housing,
    covid,
    loading
  } = useContext(CityContext);

  const [showStats, setShowStats] = useState(false);

  let history = useHistory();

  // if (comparisonList.length <= 3) {
  return (
    <div className="home-page-container">
      <Header />
      <Hero />

      <AutoComplete
        addCity={addCity}
        cities={cities}
        setComparisonList={setComparisonList}
        getData={getData}
      />
      <div
        role="button"
        className="more-filters-button"
        onClick={() => history.push("/advanced-search")}
      >
        More Filters
      </div>
      {isComparing && (
        <div className="comparison-container">
          <div className="comparison">
            {comparisonList.map((data, index) => (
              <CardComparison
                key={index}
                removeCity={() => removeCity(index)}
                showStats={showStats}
                data={data}
              />
            ))}
          </div>
          <Button
            className="compareButton"
            onClick={() => {
              setShowStats(true);
            }}
          >
            Compare Cities
          </Button>
          <Button
            className="moreInfoButton"
            onClick={() => {
              history.push("/dataviz");
            }}
          >
            More Info
          </Button>
        </div>
      )}

      <div className="card-container">
        {cities.map((city, index) => (
          <CityCard
            key={index}
            city={city.location}
            image={city.image}
            index={index}
            setIsComparing={setIsComparing}
            addCity={addCity}
            getData={getData}
            cities={cities}
            weather={weather}
            jobs={jobs}
            housing={housing}
            covid={covid}
          />
        ))}
      </div>
      {loading ? <Loading>Loading ...</Loading> : <End>No more data!</End>}
    </div>
  );
  // } else if (comparisonList.length > 3) {
  //   alert("Can only compare at most 3 cities!");
  // }
}
export default RenderHomePage;
