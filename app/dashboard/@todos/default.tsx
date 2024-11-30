import { notFound } from "next/navigation";
import { sleep } from "@/util/sleep.ts";
import React from "react";

const TodoDefaultPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    return notFound();
  }
  const todos = await res.json() as Todo[];
  await sleep(5000);
  return (
    <div className={"p-4 overflow-y-scroll"}>
      {todos.slice(0, 3).map((item) => (
        <div key={item.id} className={"p-4 flex items-center justify-between"}>
          <h1>{item.title}</h1>
          <span>{item.completed ? "Completed" : "Mark completed"}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoDefaultPage;
