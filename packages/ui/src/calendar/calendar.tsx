import { DayPicker } from "react-day-picker";
import { CalendarProps } from "./types";

const Calendar = (props: CalendarProps) => {

    const { ...rest } = props;
    
    return <DayPicker {...rest} />;
};

export default Calendar;
