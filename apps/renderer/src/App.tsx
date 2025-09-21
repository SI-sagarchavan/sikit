import { DashboardLayout } from "./layouts/dashboard"
import { ComponentProvider } from "./contexts/component-context"

const App = () => {
  return (
    <ComponentProvider>
      <DashboardLayout />
    </ComponentProvider>
  )
};

export default App;
