import React, { useEffect } from "react";

import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import { Title } from "../components/Title";
import { TaskList } from "../components/TaskList";
import { BadList } from "../components/BadList";
import { TotalHours } from "../components/TotalHour";

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
      <Title />
      <hr />
      <Form />
      <TaskList />
      <BadList />
      <TotalHours />
    </MainLayout>
  );
};
