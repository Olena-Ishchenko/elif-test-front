import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EventRegistrationPage() {
  axios.defaults.baseURL = "http://localhost:3000";
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
    <>
      <RegistrationForm onSubmit={setParticipantData} />{" "}
    </>
  );
}
