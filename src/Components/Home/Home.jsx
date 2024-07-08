import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  let array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "","","","",""];
  return (
    <div className="ahref">
      {array.map((item, index) => (
        <Link key={index} to={`project${index + 1}`}>
          <p>Topshiriq {index + 1}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
