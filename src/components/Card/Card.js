import React from "react";
import styles from "./Card.module.scss";
import { Link, BrowserRouter } from "react-router-dom";

const Card = ({ page, results }) => {
    let display;

    if (results) {
      display = results.map((x) => {
        let { id, image, name, status, location } = x;
      

/*         Hmmm i had my key={id} in my <Link> tag but i kept having this error. i changed the key to the <BrowserRouter> tag and it worked, but im not sure why */
        return (
          <BrowserRouter key={id}> 
          <Link
            style={{ textDecoration: "none" }}
            to={`${page}${id}`}
            
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">


            <div className={`${styles.card} d-flex flex-column justify-content-center`}>
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
        
         {(() => {
            if (status === "Dead") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()} 
          </Link>
          </BrowserRouter>
        );
        
      });
      
      } else {
        display = "No characters found"
      }
      
      return <>{display}</>
    };
  
export default Card

