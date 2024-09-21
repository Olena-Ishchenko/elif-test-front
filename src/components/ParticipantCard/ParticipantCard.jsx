import css from "./ParticipantCard.module.css";

const ParticipantCard = ({ participant }) => {
  return (
    <div className={css.participantCard}>
      <h3 className={css.participantName}>{participant.fullname}</h3>
      <p className={css.participantEmail}>{participant.email}</p>
    </div>
  );
};

export default ParticipantCard;
