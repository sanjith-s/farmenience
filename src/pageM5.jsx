import React from "react";
import SalesCardsList from "./components/salesCardsList";
import SalesItemsList from "./components/salesItemsList";
import Navbar from "./components/navbar";
import "./css/pageM5.css";

function PageM5() {
  return (
    <div>
      {/*<Navbar/>*/}
      <div className="rectangle-29">
        <form>
          <div>
            <div className="frame-2">
              <div className="frame-2-text">Crop Name :</div>
            </div>
            <div className="rectangle-7-1">
              <input type="text" />
            </div>
          </div>
          <div>
            <div className="frame-1">
              <div className="frame-1-text">Harvest Date :</div>
            </div>
            <div className="rectangle-5">
              <input type="text" />
            </div>
          </div>
          <div>
            <div className="frame-3">
              <div className="frame-3-text">Quantity :</div>
            </div>
            <div className="rectangle-9">
              <input type="text" />
              <div className="rectangle-15">
                <div className="rectangle-15-text">
                  <div className="box">
                    <select id="metric">
                      <option value="Kg">Kg</option>
                      <option value="g">g</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="frame-4">
              <div className="frame-4-text">Quoted Amount :</div>
            </div>
            <div className="rectangle-7-2">
              <input type="text" />
              <div className="rectangle-15-4">
                <div className="rectangle-15-text">Rs</div>
              </div>
            </div>
          </div>
          <div>
            <div className="rectangle-4">
              <div className="rectangle-4-text">Organic Cultivation :</div>
            </div>
            <div className="rectangle-4-2">
              <div className="btn-1">
                <div className="btn-text">Yes</div>
              </div>
              <div className="btn-2">
                <div className="btn-text">No</div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="rectangle-11"></div>
        <div className="post-Deal">
          <div className="post-Deal-text">
            <button className="post-Deal-btn">Post Deal</button>
          </div>
        </div>
        <div className="edit-Deal">
          <div className="edit-Deal-text">
            <button className="edit-Deal-btn">Edit Deal</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageM5;
