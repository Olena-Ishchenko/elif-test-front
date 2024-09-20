import EventList from "../../components/EventList/EventList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EventsBoardPage() {
  axios.defaults.baseURL = "http://localhost:3000";
  const [events, setevents] = useState([]);
  const getEvents = async () => {
    const { data } = await axios.get("/events");
    setevents(data.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <EventList data={events} />
    </>
  );
}
