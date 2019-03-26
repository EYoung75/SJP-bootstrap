import React from "react";

const Home = () => {
  return (
    <div className="home">

      <img src={require("../assets/baby.JPG")} alt="baby" />
      <h4>Beach Location Staff</h4>
      <img
        src={require("../assets/small_staff_photo.jpg")}
        alt="extended staff"
      />
      <div className="info">
        <p>
          St. John's, proudly serving and supporting the Jacksonville and St.
          Augustine areas to develop a brighter future for our nation's youth
        </p>
      </div>
      <h4>St. Augustine Location Staff</h4>
      <img src={require("../assets/indoors_staff.jpg")} alt="indoors staff" />
      <img
        src={require("../assets/st_johns_main.jpg")}
        alt="extended staff two"
      />
    </div>
  );
};

export default Home;
