import ParticipantCard from "../ParticipantCard/ParticipantCard";

const ParticipantList = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      <ul>
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
