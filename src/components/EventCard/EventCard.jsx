import { Link } from "react-router-dom";
import css from "./EventCard.module.css";

const EventCard = ({ event }) => {
  return (
    <div className={css.eventCard}>
      <h3 className={css.eventTitle}>{event.title}</h3>
      <p className={css.eventDescr}>{event.description}</p>
      <nav className={css.eventLinkContainer}>
        <Link className={css.eventLink} to={`/events/${event._id}/register`}>
          Register
        </Link>
        <Link
          className={css.eventLink}
          to={`/events/${event._id}/participants`}
        >
          View
        </Link>
      </nav>
    </div>
  );
};

export default EventCard;
