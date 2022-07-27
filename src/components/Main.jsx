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
  let data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];
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
