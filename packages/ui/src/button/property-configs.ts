import { enumToArray } from "../utility";
import { buttonStyles } from "./button-styles";


export const propertyConfigs = {
    variant: {
        componentConfig: {
            type: "select",
            default: "primary",
            options: enumToArray(buttonStyles.variants),
            label: "Variant",
        },
        meta : {
            description: "The variant of the button.",
        }
    },
    type: {
        componentConfig: {
            type: "select",
            default: "button",
            options: enumToArray(buttonStyles.variants),
            label: "Type",
        },
        meta : {
            description: "The type of the button.",
        }
    },
    disabled: {
        componentConfig: {
            type: "switch",
            default: false,
            label: "Disabled",
        },
        meta : {
            description: "Whether the button is disabled.",
        }
    },
    size: {
        componentConfig: {
            type: "select",
            default: "md",
            options: ["sm", "md", "lg"],
            label: "Size",
        },
        meta : {
            description: "The size of the button.",
        }
    }
}