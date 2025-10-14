import React from "react";
import About from "./components/About";
import ImportantDates from "./components/ImportantDates";
import ConferenceAgenda from "./components/ConferenceAgenda";
import OralPresentation from "./components/OralPresentation";

const EventsPage:React.FC = () => {
    return (
        <div className="space-y-12">
            <About />
            <ImportantDates />
            <ConferenceAgenda />
            <OralPresentation />
        </div>

    );
}
export default EventsPage;