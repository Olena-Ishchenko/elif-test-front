import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ParticipantList from "../../components/ParticipantList/ParticipantList";

export default function EventParticipantsPage() {
  axios.defaults.baseURL = "http://localhost:3000";
  const [participants, setParticipants] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getParticipants = async () => {
      const { data } = await axios.get("/participants?eventId=" + id);
      setParticipants(data.data);
    };
    getParticipants();
  }, [id]);

  return <> {participants && <ParticipantList data={participants} />}</>;
}
