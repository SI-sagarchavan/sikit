import Sidebar from "../sidebar/sidebar"
import { Workspace } from "../../components/workspace"
import { dashboardStyles } from "./dashboard-styles"
import { ConfigPanel } from "../config-panel"

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
        <ConfigPanel />
      </div>
    </div>
  );
};

export default Dashboard;