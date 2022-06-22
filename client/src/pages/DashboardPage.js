import React, { useEffect } from "react";

import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

// import { Title } from "../components/Title";
// import { TotalHours } from "../components/TotalHour";
// import { Form } from "../components/formList/Form";
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
      <h1>dashboard</h1>
    </MainLayout>
  );
};
