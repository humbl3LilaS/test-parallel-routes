import React from "react";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: Readonly<ReactNode>;
  todos: Readonly<ReactNode>;
  users: Readonly<ReactNode>;
};

const DashboardLayout = ({ children, todos, users }: DashboardLayoutProps) => {
  return (
    <>
      <div
        className={"p-10 w-screen h-screen grid grid-cols-4 grid-rows-5 gap-7"}
      >
        <nav className={"col-span-4 bg-rose-200 rounded-lg"}>
          <div>
            navigation
          </div>
        </nav>
        <section className={"row-span-4 bg-green-200 rounded-lg"}>
          {children}
        </section>
        <section className={"col-span-3 row-span-2 bg-stone-300 rounded-lg"}>
          {users}
        </section>
        <section className={"col-span-3 row-span-2 bg-blue-200 rounded-lg"}>
          {todos}
        </section>
      </div>
    </>
  );
};

export default DashboardLayout;
