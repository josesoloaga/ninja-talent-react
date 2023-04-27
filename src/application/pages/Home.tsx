import List from "../ui/features/user-list/List";
import { useEffect, useState } from "react";
import { User } from "../../domain/models/user";
import { getData } from "../../infrastructure/api/get-data";
import Header from "../ui/features/header/header-component";
import { ApiResponse } from "../../infrastructure/api/types";

function Home() {
  const [userList, setUserList] = useState<User[]>([]);

  const handleData = (data: ApiResponse) => {
    setUserList(data.results);
  };
  
  useEffect(() => {
    getData("https://randomuser.me/api?results=5&noinfo", handleData);
  }, []);
  return (
    <>
      <Header>Ninja Talent - React</Header>
      <List userList={userList} />
    </>
  );
}

export default Home;
