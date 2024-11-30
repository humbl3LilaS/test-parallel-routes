import React from "react";
import { notFound } from "next/navigation";
import { sleep } from "@/util/sleep.ts";
interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!res.ok) {
    return notFound();
  }
  const user = await res.json() as Users;
  console.log(user);
  await sleep(3000);
  return (
    <div className={"w-full h-full  flex flex-col items-center justify-center"}>
      <p>
        Username: {user.username}
      </p>
      <p>
        email: {user.email}
      </p>
    </div>
  );
};

export default UsersPage;
