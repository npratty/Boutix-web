import React, { useState } from "react";
import test from "../test.jpeg";

function Boutiques() {
  const img = ["test.jpeg"];
  const [boutiques, setBoutiques] = useState([
    {
      name: "prat's Boutix",
      price: "900",
      image: { test },
      description:
        " This boutique is located in Bangalore and Chennai and they customize all kinds of Indian outfits suitable to your needs.",
      rating: "4",
    },
  ]);

  return (
    <div className="gx-main-content">
      <div className="gx-wrapper">
        <div className="animated slideInUpTiny animation-duration-3">
          <div className="page-heading">
            <h2 className="title">Product Grid</h2>
          </div>
          <div style={{overflow:"auto"}}>
            {" "}
            {boutiques.map((item) => {
              return (
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="gx-card product-card">
                      <div className="gx-card-header card-image card-strip">
                        <div className="grid-thumb-equal">
                          <a
                            className="grid-thumb-cover"
                          >
                            <img src={test} alt={item.name} />
                          </a>
                        </div>
                      </div>
                      <div className="gx-card-body">
                        <div className="product-details">
                          <h5 className="card-title">{item.name}</h5>

                          <div className="d-flex">
                            <span className="h5">
                              Price starting from ₹{item.price}
                            </span>
                            <span className="h5"></span>
                          </div>

                          <div className="star-rating">
                            <i className="zmdi zmdi-star"></i>
                            <i className="zmdi zmdi-star"></i>
                            <i className="zmdi zmdi-star"></i>
                            <i className="zmdi zmdi-star-half"></i>
                            <span>
                              <small>{item.rating} (152)</small>
                            </span>
                          </div>

                          <p className="card-text">{item.description} </p>
                        </div>
                      </div>

                      <div className="gx-card-footer">
                        <a
                          className="btn btn-outline-primary gx-btn-sm "
                        >
                          <i className="zmdi zmdi-shopping-cart"></i>&nbsp; Buy
                          Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boutiques;
