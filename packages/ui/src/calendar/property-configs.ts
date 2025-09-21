export const propertyConfigs = {
    fixedWeeks: {
        componentConfig: {
            type: "switch",
            default: false,
            label: "Fixed Weeks",
        },
        meta : {
            description: "Whether to fix the number of weeks in the calendar.",
        }
    },
    hideNavigation: {
        componentConfig: {
            type: "switch",
            default: false,
            label: "Hide Navigation",
        },
        meta : {
            description: "Whether to hide the navigation.",
        }
    }
}