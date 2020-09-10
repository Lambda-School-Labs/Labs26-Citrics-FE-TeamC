import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import CityCard from "../../common/CityCard.js";

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  const [cities, setCities] = useState([
    ["Miami", "Florida", "../assets/miami.jpg"],
    ["Los Angeles", "California", "./assets/la.jpg"],
    ["Boulder", "Colorado", "./assets/boulder.jpg"],
    ["New York", "New York", "./assets/ny.jpg"]
  ]);

  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </p>
        <div className="container">
          {cities.map((city, index) => (
            <CityCard
              city={city[0]}
              state={city[1]}
              image={city[2]}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default RenderHomePage;
