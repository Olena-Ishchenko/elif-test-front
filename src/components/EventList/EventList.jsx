import EventCard from "../EventCard/EventCard";

const EventList = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ul>
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
