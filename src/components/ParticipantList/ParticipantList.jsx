import ParticipantCard from "../ParticipantCard/ParticipantCard";
import css from "./ParticipantList.module.css";

const ParticipantList = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      <ul className={css.participantsList}>
        {data.map((participant) => (
          <li key={participant._id}>
            <ParticipantCard participant={participant} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;
