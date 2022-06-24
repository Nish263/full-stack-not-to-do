import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { FormList } from "../components/formList/FormList";
import { TaskList } from "../components/taskList/TaskList";
import { Col, Row, Spinner, Alert } from "react-bootstrap";
import { postTask } from "../components/helper/axiosHelper";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [resp, setRes] = useState({
    status: "",
    message: "",
  });
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userList"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);

  const handleOnPost = async (newTask) => {
    setIsLoading(true);
    const data = await postTask(newTask);
    console.log(data);
    setIsLoading(false);
    setRes(data);
    // call the api
  };
  return (
    <MainLayout>
      <Row>
        <Title />
        <hr />
        <Row>
          <Col className="text-center">
            {isloading && <Spinner animation="border" variant="primary" />}
            {resp?.message && (
              <Alert variant={resp.status === "success" ? "success" : "danger"}>
                {resp?.message}{" "}
              </Alert>
            )}
          </Col>
        </Row>

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
