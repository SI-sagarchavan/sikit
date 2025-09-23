export const calendarStoryConfig = {
    args: {
        mode: "single",
       selected: new Date(),
       },
       argTypes : {
         mode: {
           control : "select",
           options : ["single", "multiple", "range", "default"],
           description :"The mode of the calendar",
           name : "Mode",
           type: {
             name : "string",
           }
         },
       }
 }