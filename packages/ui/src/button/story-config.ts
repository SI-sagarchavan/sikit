export const buttonStoryConfig  = {
  args: {
    size: "md",
    variant: "link",
    disabled: false,
    type: "button",
    children: "Hello world",
   },
   argTypes : {
     size: {
       control : "select",
       options : ["sm", "md", "lg"],
       description :"The size of the button",
       name : "Size",
       type: {
         name : "string",
       }
     },
     variant: {
       control : "select",
       description :"The variant of the button",
       name : "Variant",
       options : ["primary", "secondary", "destructive", "outline", "ghost", "link"],
     },
     disabled: {
       control : "boolean",
       description :"The disabled state of the button",
       name : "Disabled",
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
       description :"The type of the button",
       name : "Type",
       options : ["button", "submit", "reset"]
     }
   }
}