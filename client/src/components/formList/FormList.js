import React, { useState } from "react";

import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = { task: "", hr: "" };
const weeklyHours = 24 * 7;

export const FormList = ({ handleOnPost }) => {
  const [newTask, setNewTask] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnPost(newTask);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="form-table g-3 pb-3">
        <Col md="6">
          <Form.Control
            type="text"
            name="task"
            value={newTask.task}
            onChange={handleOnChange}
            placeholder="Your task"
            required
          />
        </Col>
        <Col md="4">
          <Form.Control
            type="number"
            name="hr"
            value={newTask.hr}
            onChange={handleOnChange}
            placeholder="Hours"
            required
          />
        </Col>
        <Col md="2">
          <Button variant="warning" type="submit">
            {" "}
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
