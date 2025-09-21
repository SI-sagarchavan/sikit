export const buttonStoryConfig  = {
    args: {
        size: "md",
        variant: "primary",
        disabled: true,
        type: "button",
        children: "Hello World",
       },
       argTypes : {
         size: {
           control : "select",
           options : ["sm", "md", "lg"],
           description :"The size of the button",
           name : "szie",
           type: {
             name : "string",
           }
         },
         variant: {
           control : "select",
           options : ["primary", "secondary", "destructive", "outline", "ghost", "link"],
         },
         disabled: {
           control : "boolean",
           table:{
             defaultValue : {
               summary : "false"
             },
             category:"Basic",
             subcategory : "Disabled",
             type : {
               detail : "boolean",
               summary : "false",
             }
           }
         },
         type: {
           control : "select",
           options : ["button", "submit", "reset"]
         }
       }
}