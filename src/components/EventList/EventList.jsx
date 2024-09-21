import EventCard from "../EventCard/EventCard";
import css from "./EventList.module.css";

const EventList = ({ data }) => {
  return (
    <div>
      <ul className={css.eventsList}>
        {data.map((event) => (
          <li key={event._id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
