import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const TaskList = ({ tasks }) => {
  return (
    <div>
      <Table striped className="Table table-striped table-bordered table-hover">
        <thead className="thead">
          <tr className=" fs-4">
            <th>#</th>
            <th>Task</th>
            <th>Hour</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((item, i) => (
            <tr>
              <td key={i}>
                <input type="checkbox" name="" id="" />
              </td>
              <td>{item.task}</td>
              <td>
                {item.hr} {item.hr === 1 ? "hr" : "hrs"}
              </td>
              <td className=" icons">
                <div className="d-flex justify-content-around">
                  <Button variant="danger">
                    {" "}
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>
                  <Button variant="primary">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
