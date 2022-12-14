import React, { useState, useEffect } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import axios from "axios";

function Main() {
  const [isListClicked, setIsListClicked] = useState(true);
  const [isGridClicked, setIsGridClicked] = useState(false);
  const [fetchedData, setFetchedData] = useState({ array: [] });
  function handleListClick() {
    setIsGridClicked(false);
    setIsListClicked(true);
  }
  function handleGridClick() {
    setIsGridClicked(true);
    setIsListClicked(false);
  }
        
  async function fetchData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setFetchedData(() => {
          const ar = response.data;
          return {
            array: ar,
          };
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  function handleClick(username){
    console.log(username);
  }
  return (
    <div className="main">
      <div className="topbar">
        <div className="toggle-block">
          <div className="toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <h6>Projects</h6>
        </div>

        <div className="search">
          <a href="index.html">
            <ion-icon name="search-outline"></ion-icon>
          </a>
          <a
            href="index.html"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <ion-icon name="add-circle-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <div className="project-header">
                <div className="button-block d-none d-sm-block">
                  <button className="icon-btn" onClick={handleListClick}>
                    <ion-icon name="list-outline"></ion-icon> List
                  </button>
                  <button className="icon-btn" onClick={handleGridClick}>
                    <ion-icon name="grid-outline"></ion-icon> Grid
                  </button>
                </div>
                <div className="button-block d-flex d-sm-none">
                  <button className="btn list-btn">
                    <ion-icon name="list-outline" className="me-0"></ion-icon>
                  </button>
                  <button className="btn list-btn ms-2">
                    <ion-icon name="grid-outline" className="me-0"></ion-icon>
                  </button>
                </div>
                <div className="filter-drop">
                  <label>
                    <ion-icon name="funnel-outline"></ion-icon> Sort:
                  </label>
                  <form>
                    <select>
                      <option>A-Z</option>
                      <option>Z-A</option>
                    </select>
                  </form>
                </div>
              </div>

              {isGridClicked ? (
                <GridView data={fetchedData} handleClick={handleClick} />
              ) : (
                ""
              )}
              {isListClicked ? (
                <ListView data={fetchedData} handleClick={handleClick} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
