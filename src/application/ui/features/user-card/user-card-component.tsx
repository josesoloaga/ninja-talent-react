import { User } from "../../../../domain/models/user";
import { cardListStyle, imgCardStyle, buttonDetailsCardStyle } from "./user-card-styled-component";
import { transliterate } from "transliteration";
import { useNavigate } from "react-router-dom";

interface Props {
  user: User;
}

const UserCardComponent = ({ user }: Props) => {
  const navigate = useNavigate();

  const handleButtonDetails = () => {
    navigate("/details", { state: { user } });
  };

  const {
    name: { title, first, last },
    picture: { large },
    gender,
    nat,
    dob: { date, age },
    email,
  } = user;

  const nameLatin = `${transliterate(first)} ${transliterate(last)}`;

  return (
    <article css={cardListStyle}>
      <img css={imgCardStyle} src={large} alt="photo" />
      <h2>
        {title} {nameLatin}
      </h2>
      <p></p>
      <p>Gender: {gender}</p>
      <p>nationality: {nat}</p>
      <p>
        Age: {age}, ({date})
      </p>
      <h3>Email:</h3>
      <p>{email} </p>
      <button css={buttonDetailsCardStyle} onClick={handleButtonDetails}>
        Details
      </button>
    </article>
  );
};

export default UserCardComponent;
