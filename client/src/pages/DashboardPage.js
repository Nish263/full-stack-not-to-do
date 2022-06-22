import React, { useEffect } from "react";

import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

import { Title } from "../components/Title";
// import { TotalHours } from "../components/TotalHour";
import { FormList } from "../components/formList/FormList";
// import { TaskList } from "../components/taskList/TaskList";
// import { BadList } from "../components/badList/BadList";

export const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userList"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <MainLayout>
      {/* <Title />
      <hr />
      <Form />
      <TaskList />
      <BadList />
      <TotalHours /> */}
      <Title />
      <hr />
      <FormList />
    </MainLayout>
  );
};
