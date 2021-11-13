import React from "react";
import { PopupButton } from "react-calendly";

const CalendlyMeet = () => {
  const preFill = {
    name: "Jon Snow",
    firstName: "Jon",
    lastName: "Snow",
    email: "test@test.com",
  };

  const pageSettings = {
    backgroundColor: "b91c1c",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "b91c1c",
    textColor: "4d5055",
  };

  return (
    <div>
      <PopupButton
        color="#b91c1c"
        text="Have a Project ?"
        textColor="#ffffff"
        url="https://calendly.com/ashu-ydv2001/15min"
        prefill={preFill}
        pageSettings={pageSettings}
      />
    </div>
  );
};

export default CalendlyMeet;
