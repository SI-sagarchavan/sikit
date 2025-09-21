import { tv } from "tailwind-variants/lite";

export const dashboardStyles = tv({
    slots:{
        container: "grid grid-cols-12",
        sidebarContainer: "col-span-2 ",
        configPanelContainer: "col-span-3",
        mainContainer: "col-span-7",
        workspaceContainer: "h-screen flex items-center justify-center bg-gray-200",
    }
});