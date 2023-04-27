import { transliterate } from "transliteration";
import { User } from "../../../../domain/models/user";
import {
  userDetailsCardStyle,
  imgCardStyle,
  buttonBackStyle,
  divInfoStyle,
  divPInfoStyle,
  imgTechBackground,
  divOtherInfo,
} from "./user-details-card-styled-component";
import { useNavigate } from "react-router";
import imgTech3 from "../../../../infrastructure/assets/fondo3Ninja.png";

interface Props {
  userDetails: User;
}

const UserDetailsComponent = ({ userDetails }: Props) => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/home");
  };

  const {
    name: { first, last, title },
    picture: { large },

    gender,
    nat,
    dob: { date, age },
    location: {
      city,
      state,
      country,
      postcode,
      coordinates: { latitude, longitude },
      street: { name: streetName, number: streetNumber },
      timezone: { offset, description },
    },
    email,
    login: { md5, password, salt, sha1, sha256, username, uuid },
    registered: { date: registeredDate, age: registeredAge },
    phone,
    cell,
    id: { name: idName, value },
  } = userDetails;

  const nameLatin = `${transliterate(first)} ${transliterate(last)}`;
  const cityLatin = transliterate(city);

  return (
    <div css={userDetailsCardStyle}>
      <h2>
        {title} {nameLatin}
      </h2>
      <div css={divPInfoStyle}>
        <img css={imgCardStyle} src={large} alt="photo" />
        <p>Gender: {gender}</p>
        <p>nationality: {nat}</p>
        <p>
          Age: {age}, ({date})
        </p>
      </div>

      <h3>Location:</h3>
      <div css={divInfoStyle}>
        <p>
          {cityLatin}, {state}, {country}, PostCode: {postcode}
        </p>
        <p>
          Street-name: {streetNumber}, {streetName}
        </p>
        <p>
          Coordinates: {latitude}, {longitude}
        </p>
        <p>
          {offset}, {description}
        </p>
      </div>

      <h3>Email-info:</h3>
      <div css={divInfoStyle}>
        <p>{email} </p>
        <p>uuid: {uuid}</p>
        <p>username: {username}</p>
        <p>password: {password}</p>
        <p>salt: {salt}</p>
        <p>md5: {md5}</p>
        <p>sha1: {sha1}</p>
        <p>sha256: {sha256}</p>
      </div>
      <div css={divOtherInfo}>
        <h3>Register</h3>
        <p>
          Registered: {registeredDate}, since: {registeredAge} years ago
        </p>
        <h3>Phone:</h3>
        <p>
          {phone}, cell: {cell}
        </p>
        <h3>id:</h3>
        <p>
          idName: {idName}, value: {value}
        </p>
      </div>

      <button css={buttonBackStyle} onClick={handleReturn}>
        Volver
      </button>
      <img css={imgTechBackground} src={imgTech3} alt="" />
    </div>
  );
};

export default UserDetailsComponent;
