import React, { useEffect } from "react";

function GridView(props) {
  return (
    <React.Fragment>
      <div className="grid-view-header">
        <div className="project-sort">
          <h6>Projects</h6>
          <a href="index.html">
            <span>
              <i className="bi bi-sort-alpha-down"></i>
            </span>
          </a>
        </div>
        <div className="task-sort">
          <h6>Tasks</h6>
          <a href="index.html">
            <span>
              <i className="bi bi-sort-numeric-down"></i>
            </span>
          </a>
        </div>
        <div className="due-sort">
          <h6>Due Date</h6>
          <a href="index.html">
            <span>
              <i className="bi bi-sort-numeric-down"></i>
            </span>
          </a>
        </div>
        <div className="members-sort">
          <h6>Members</h6>
          <a href="index.html">
            <span>
              <i className="bi bi-sort-numeric-down"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="grid-view">
        {props.data.array.map((user) => {
          return (
            <div className="grid-block" key={user.id}>
              <div className="title-block">
                <span>
                  <ion-icon name="logo-dribbble"></ion-icon>
                </span>
                <h5>{user.username}</h5>
                <p>{user.email}</p>
              </div>

              <div className="due-block">
                <span>Due to 14 mar 2019</span>
              </div>

              <div className="bottom-block">
                <div className="task">
                  <span>
                    <strong>20</strong>/45
                  </span>
                  <p>tasks</p>
                </div>

                <div className="budget">
                  <span>$3.2k</span>
                  <p>budget</p>
                </div>
              </div>

              <div className="drop-down">
                <a href="index.html">
                  <span>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="gridview-pagination">
        <div className="items-page">
          <form>
            <select id="grid-select">
              <option>15</option>
              <option>10</option>
              <option>20</option>
              <option>25</option>
            </select>
            <label>Items Per Page</label>
          </form>
        </div>
        <div className="grid-pagination-wrapper">
          <div className="prev-block">
            <button>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
          </div>
          <ul className="grid-view-ul">
            <li>
              <a href="index.html" className="active">
                1
              </a>
            </li>
            <li>
              <a href="index.html">2</a>
            </li>
            <li>
              <a href="index.html">3</a>
            </li>
            <li>
              <a href="index.html">4</a>
            </li>
            <li>
              <a href="index.html">5</a>
            </li>
          </ul>
          <div className="next-block">
            <button>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GridView;
