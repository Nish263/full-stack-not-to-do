import React from "react";
import Table from "react-bootstrap/Table";

export const TaskList = () => {
  return (
    <div>
      <Table striped className="Table table-striped ">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Hour</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Driving</td>
            <td>20</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cooking</td>
            <td>10</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Driving</td>
            <td>20</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cooking</td>
            <td>10</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Driving</td>
            <td>20</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cooking</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
