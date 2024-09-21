import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ParticipantList from "../../components/ParticipantList/ParticipantList";
import css from "./EventParticipantsPage.module.css";
import SearchInput from "../../components/SearchInput/SearchInput";

export default function EventParticipantsPage() {
  axios.defaults.baseURL = "https://elif-test-back.onrender.com";
  const [participants, setParticipants] = useState([]);
  const [eventById, setEventById] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterEmail, setFilterEmail] = useState("");
  const { id } = useParams();

  const filterParticipantsName = participants.filter((participant) =>
    participant.fullname.toLowerCase().includes(filterName.toLowerCase())
  );

  const filterParticipantsEmail = participants.filter((participant) =>
    participant.email.toLowerCase().includes(filterEmail.toLowerCase())
  );

  useEffect(() => {
    const getParticipants = async () => {
      const { data } = await axios.get("/participants?eventId=" + id);
      setParticipants(data.data);
    };
    getParticipants();

    const getEventbyId = async (eventId) => {
      const { data } = await axios.get(`/events/${eventId}`);

      setEventById(data.data);
    };

    getEventbyId(id);
  }, [id]);

  return (
    <div className={css.participantPage}>
      <NavLink className={css.homeLink} to="/events">
        Events
      </NavLink>
      {eventById && (
        <h2
          className={css.participantTitle}
        >{`"${eventById.title}" participants`}</h2>
      )}
      {participants.length !== 0 && (
        <SearchInput
          valueName={filterName}
          onSearchName={setFilterName}
          valueEmail={filterEmail}
          onSearchEmail={setFilterEmail}
        />
      )}

      {filterName ? (
        <ParticipantList data={filterParticipantsName} />
      ) : (
        <ParticipantList data={filterParticipantsEmail} />
      )}
    </div>
  );
}
