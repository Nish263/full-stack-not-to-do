import React, { useEffect } from "react";

import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

import { Title } from "../components/Title";
// import { TotalHours } from "../components/TotalHour";
import { FormList } from "../components/formList/FormList";
import { TaskList } from "../components/taskList/TaskList";
import { Col, Row } from "react-bootstrap";

export const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userList"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);

  const handleOnPost = (newTask) => {
    console.log("submit", newTask);
    // call the api
  };
  return (
    <MainLayout>
      <Row>
        <Title />
        <hr />

        <FormList handleOnPost={handleOnPost} />
        <Row className="g-5">
          <Col md="6">
            <TaskList />
          </Col>
          <Col md="6">
            <TaskList />
          </Col>
        </Row>
      </Row>
    </MainLayout>
  );
};
