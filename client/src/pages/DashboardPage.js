import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { FormList } from "../components/formList/FormList";
import { TaskList } from "../components/taskList/TaskList";
import { Col, Row, Spinner, Alert } from "react-bootstrap";
import { getTasks, postTask } from "../components/helper/axiosHelper";
import { TotalHours } from "../components/TotalHour";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [resp, setRes] = useState({
    status: "",
    message: "",
  });
  const [isloading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userList"));
    if (!user?._id) {
      navigate("/");
    }
    fetchTasks();
  }, [navigate]);

  const fetchTasks = async () => {
    const data = await getTasks();
    data?.status === "success" && setTasks(data.tasks);
  };

  const handleOnPost = async (newTask) => {
    setIsLoading(true);
    const data = await postTask(newTask);
    console.log(data);
    setIsLoading(false);
    setRes(data);
    data.status === "success" && fetchTasks();
    // call the api
  };

  const ttlTaskHr = tasks.reduce((subttl, item) => subttl + item.hr, 0);

  const total = ttlTaskHr;

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
            <h3 className="text-center mb-5 fs-2 ">TaskList</h3>

            <TaskList tasks={tasks} />
          </Col>
          <Col md="6">
            <h3 className="text-center mb-5 fs-2 ">BadList</h3>
            <TaskList />
          </Col>
        </Row>
        <Row>
          <TotalHours total={total} />
        </Row>
      </Row>
    </MainLayout>
  );
};
