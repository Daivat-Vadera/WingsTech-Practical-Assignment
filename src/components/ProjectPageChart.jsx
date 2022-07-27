function ProjectPageChart() {
  return (
    <div className="project-page-chart">


      <div className="chart-title">
        <div className="chart-title-text">
          <img src="./img/logo-11.png" alt="logo"/>
          <div>
            <h5>whiteui.store llc</h5>
            <p>8484 ross wells</p>
          </div>
        </div>
        <div className="chart-dropdown">
          <div className="dropdown">
            <button className="dropdown-btn" type="button">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <div className="progress-wrapper">

        <h5>Overview</h5>

        <div className="progress-block">
          <div className="progress-text">
            <div>
              <h6>Sales</h6>
              <p>Week Comparison</p>
            </div>
            <div className="progress-value">
              <span>1.345
                <ion-icon name="arrow-up-outline" className="green-up-arrow"></ion-icon>
              </span>
            </div>
          </div>
          <div className="progress animated-progess">
            <div className="progress-bar progress-sm progress-primary" role="progressbar" style={{"width": "75%"}}  aria-valuemax="100">
            </div>
          </div>
        </div>

        <div className="progress-block">
          <div className="progress-text">
            <div>
              <h6>Leads</h6>
              <p>Month Comparison</p>
            </div>
            <div className="progress-value">
              <span>3.820
                <ion-icon name="arrow-down-outline" className="red-down-arrow"></ion-icon>
              </span>
            </div>
          </div>
          <div className="progress animated-progess">
            <div className="progress-bar progress-sm progress-warning" role="progressbar"
            style={{"width": "60%"}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>

        <div className="progress-block">
          <div className="progress-text">
            <div>
              <h6>Income</h6>
              <p>Week Comparison</p>
            </div>
            <div className="progress-value">
              <span>$4690
                <ion-icon name="arrow-up-outline" className="green-up-arrow"></ion-icon>
              </span>
            </div>
          </div>
          <div className="progress animated-progess">
            <div className="progress-bar progress-sm progress-danger" role="progressbar"  style={{"width": "20%"}}aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>

        <div className="progress-block">
          <div className="progress-text">
            <div>
              <h6>Spendings</h6>
              <p>Month Comparison</p>
            </div>
            <div className="progress-value">
              <span>$3820
                <ion-icon name="arrow-down-outline" className="red-down-arrow"></ion-icon>
              </span>
            </div>
          </div>
          <div className="progress animated-progess">
            <div className="progress-bar progress-sm progress-success" role="progressbar"  style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
      </div>

      <div className="chart-block">
        <div className="chart">
          <div id="column-chart" className="apex-charts" dir="ltr"></div>
        </div>
        <div className="bottom-block">
          <div className="task">
            <span><strong>$342.000</strong></span>
            <p>total sales</p>
          </div>

          <div className="budget">
            <span><strong>$200.000</strong></span>
            <p>Spendings</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProjectPageChart;
