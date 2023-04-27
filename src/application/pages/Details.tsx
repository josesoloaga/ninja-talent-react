import { useLocation } from "react-router-dom";
import Header from "../ui/features/header/header-component";
import UserDetailsComponent from "../ui/features/user-details/user-details-component";

const Details = () => {
  const location = useLocation();

  return (
    <>
      <Header>Ninja Talent - React</Header>
      <UserDetailsComponent userDetails={location.state.user} />
    </>
  );
};

export default Details;
