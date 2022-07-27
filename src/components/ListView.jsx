import React from "react";

function ListView(props) {
  // function handleDeleteClick(){
  //   props.handleClick()
  // }
  return (
    <React.Fragment>
      <div className="table-responsive list-table">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>
                <div className="project-sort">
                  <h6>Projects</h6>
                  <a href="index.html">
                    <span>
                      <i className="bi bi-sort-alpha-down"></i>
                    </span>
                  </a>
                </div>
              </th>

              <th>
                <div className="members-sort">
                  <h6>Members</h6>
                  <a href="index.html">
                    <span>
                      <i className="bi bi-sort-numeric-down"></i>
                    </span>
                  </a>
                </div>
              </th>

              <th>
                <div className="task-sort">
                  <h6>Tasks</h6>
                  <a href="index.html">
                    <span>
                      <i className="bi bi-sort-numeric-down"></i>
                    </span>
                  </a>
                </div>
              </th>

              <th>
                <div className="due-sort">
                  <h6>Due Date</h6>
                  <a href="index.html">
                    <span>
                      <i className="bi bi-sort-numeric-down"></i>
                    </span>
                  </a>
                </div>
              </th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.array.map((user) => {
              return (
                <tr key={user.id}>
                  <td scope="row">
                    <div className="list-icon-flex">
                      <div className="d-flex">
                        <div className="flex-shrink-0 list-flex-icon">
                          <a href="index.html">
                            <span>
                              <ion-icon name="logo-dribbble"></ion-icon>
                            </span>
                          </a>
                        </div>
                        <div className="flex-grow-1 ms-3 list-flex-text">
                          <h5 className="inactive-title">{user.username}</h5>
                          <p>{user.email}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="members-list">
                      <ul>
                        <li>
                          <a href="index.html">
                            <img src="./img/person-1.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <img src="./img/person-2.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <img src="./img/person-3.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            {" "}
                            <span>+5</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div className="task-count">
                      <span>
                        {" "}
                        <strong>90</strong>/148
                      </span>
                      <p>tasks</p>
                    </div>
                  </td>
                  <td>
                    <div className="date-badges">
                      <span className="badge-sm badge-primary">
                        development
                      </span>
                      <span className="badge-sm badge-muted">24 feb 2019</span>
                    </div>
                  </td>
                  <td>
                    <div
                      className="form-check form-switch form-switch-md"
                      dir="ltr"
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="SwitchCheckSizemd"
                      />
                    </div>

                    <i
                      onClick={() => props.handleClick(user.username)}
                      className="fa-solid fa-circle-trash"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="listview-pagination d-none d-sm-flex ">
        <div className="prev-block">
          <button>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <span>Prev</span>
        </div>
        <ul>
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
          <span>Next</span>
          <button>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className="listview-pagination d-flex d-sm-none flex-column">
        <div className="d-flex mb-2">
          <div className="prev-block">
            <button>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <span>Prev</span>
          </div>
          <div className="next-block ms-5">
            <span>Next</span>
            <button>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>

        <ul>
          <li>
            <a href="index.html">1</a>
          </li>
          <li>
            <a href="index.html">2</a>
          </li>
          <li>
            <a href="index.html" className="active">
              3
            </a>
          </li>
          <li>
            <a href="index.html">4</a>
          </li>
          <li>
            <a href="index.html">5</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ListView;
