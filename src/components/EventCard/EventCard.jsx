import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <nav>
        <Link to={`/events/${event._id}/register`}>Register</Link>
        <Link to={`/events/${event._id}/participants`}>View</Link>
      </nav>
    </div>
  );
};

export default EventCard;
