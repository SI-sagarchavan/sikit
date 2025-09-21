import { dashboardStyles } from "./dashboard-styles";

const Dashboard = () => {

   const styles = dashboardStyles();

  return (
    <div className={styles.container()}>
      <div className={styles.sidebarContainer()}>
        <h1 className="Sidebar">Sidebar</h1>
      </div>
      <div className={styles.mainContainer()}>
         <div className={styles.workspaceContainer()} >
        <h1 className="Main">Main</h1>
        </div>
      </div>
      <div className={styles.sidebarContainer()}>
        <h1 className="ConfigPanel">ConfigPanel</h1>
      </div>
    </div>
  );
};

export default Dashboard;