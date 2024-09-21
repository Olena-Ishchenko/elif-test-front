const ParticipantCard = ({ participant }) => {
  return (
    <div>
      <h3>{participant.fullname}</h3>
      <p>{participant.email}</p>
    </div>
  );
};

export default ParticipantCard;
