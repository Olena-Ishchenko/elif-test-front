import EventList from "../../components/EventList/EventList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EventsBoardPage() {
  axios.defaults.baseURL = "http://localhost:3000";
  const [events, setevents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get("/events");
      setevents(data.data.data);
    };
    getEvents();
  }, []);

  return <> {events && <EventList data={events} />}</>;
}
