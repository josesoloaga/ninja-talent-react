import React from "react";
import UserCardComponent from "../user-card/user-card-component";
import { containerListStyle, imgBackgroundNinja } from "./list-stiled-component";
import { User } from "../../../../domain/models/user";
import imgTech from "../../../../infrastructure/assets/porque-ser-ninja.png"
interface ListProps {
  userList: User[];
}

const List: React.FC<ListProps> = ({ userList }) => {
  return (
    <div>
      <ul css={containerListStyle}>
        {userList?.map((user) => (
          <UserCardComponent user={user} key={user.login.uuid} />
        ))}
      </ul>
      <img css={imgBackgroundNinja} src={imgTech} alt="" />
    </div>
  );
};

export default List;
