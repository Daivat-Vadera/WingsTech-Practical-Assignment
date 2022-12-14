function SidebarContainer() {
  return (
    <div className="sidebar-container">
      <div className="navigation">
        <ul>
          <li>
            <a href="admin-one.html">
              <span>
                <img src="./img/logo-11.png" alt="logo" />
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="admin-one.html">
              <span className="icon">
                <ion-icon name="speedometer-outline"></ion-icon>
              </span>
              <span className="title">dashboard</span>
            </a>
          </li>
          <li className="hovered">
            <a href="project.html">
              <span className="icon">
                <ion-icon name="briefcase-outline"></ion-icon>
              </span>
              <span className="title">projects</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="create-outline"></ion-icon>
              </span>
              <span className="title">tasks</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="clipboard-outline"></ion-icon>
              </span>
              <span className="title">kanban</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="calendar-outline"></ion-icon>
              </span>
              <span className="title">calendar</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="title">contacts</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="chatbox-outline"></ion-icon>
              </span>
              <span className="title">messages</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="cube-outline"></ion-icon>
              </span>
              <span className="title">products</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="reader-outline"></ion-icon>
              </span>
              <span className="title">invoices</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="document-outline"></ion-icon>
              </span>
              <span className="title">fill browser</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="notifications-outline"></ion-icon>
              </span>
              <span className="title">notifications</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="bar-chart-outline"></ion-icon>
              </span>
              <span className="title">report</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span className="title">help center</span>
            </a>
          </li>
        </ul>
        <div className="toggle-mob">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
export default SidebarContainer;
