import Main from "./Main";
import ProjectPageChart from "./ProjectPageChart";
import SidebarContainer from "./SidebarContainer";

function sidebar() {
  return (
    <section className="sidebar">
      <SidebarContainer />

      <ProjectPageChart />

      <Main />
    </section>
  );
}
export default sidebar;
