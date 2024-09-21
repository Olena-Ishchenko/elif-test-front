import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import axios from "axios";
import { useEffect, useState } from "react";
import css from "./EventRegistrationPage.module.css";
import { NavLink } from "react-router-dom";

export default function EventRegistrationPage() {
  axios.defaults.baseURL = "https://elif-test-back.onrender.com";
  const [participantData, setParticipantData] = useState({});

  useEffect(() => {
    const addParticipants = async () => {
      console.log(participantData);

      const { data } = await axios.post("/participants", participantData);
    };
    if (!Object.keys(participantData).length) return;
    addParticipants();
  }, [participantData]);

  return (
    <div className={css.registrPage}>
      <NavLink className={css.homeLink} to="/events">
        Events
      </NavLink>
      <RegistrationForm onSubmit={setParticipantData} />{" "}
    </div>
  );
}
