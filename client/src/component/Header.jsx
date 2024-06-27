import React from "react";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container-fluid headerBody ">
      <div className="row headerRow ">
        <div className="col-6   logoDiv ">
          <div className="logo d-flex">
          <i class="fa-solid fa-book"></i>

          <Link to={"/"} className="text-white">
          <h3>
              INTER-<span className="text-warning">VIEW</span>
            </h3>
              </Link>
           
          </div>
        </div>
        <div className="col-6 navMenu">
         
            <div className="col-4 NavHome ">
              <Link to={"/"} className="text-warning borderEach">
                Home
              </Link>
            </div>
            <div className="col-4 NavHome ">
            <Link className="text-white borderEach" to={"/Contact"}>Contact</Link>
              
            </div>

            <div className="col-4 NavHome ">
              <Link className="text-white borderEach" to={"/AddQuestion"}>Add Question</Link>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Header;
