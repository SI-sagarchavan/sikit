import Sidebar from "../sidebar/sidebar"
import { Workspace } from "../../components/workspace"
import { dashboardStyles } from "./dashboard-styles"

const Dashboard = () => {

   const styles = dashboardStyles();

  return (
    <div className={styles.container()}>
      <div className={styles.sidebarContainer()}>
        <Sidebar />
      </div>
      <div className={styles.mainContainer()}>
         <div className={styles.workspaceContainer()}>
           <Workspace />
        </div>
      </div>
      <div className={styles.sidebarContainer()}>
        <h1 className="ConfigPanel">ConfigPanel</h1>
      </div>
    </div>
  );
};

export default Dashboard;