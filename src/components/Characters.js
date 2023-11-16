import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="cart-title">{item.name}</h5>
              <hr />
              <h6>species: {item.species}</h6>
              <h6>location: {item.location.name}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
