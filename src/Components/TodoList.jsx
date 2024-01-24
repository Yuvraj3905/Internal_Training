import React from "react";

export default function TodoList() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col-2">S.NO</th>
            <th scope="col-4">Title</th>
            <th scope="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="col-2">1</th>
            <td className="col-4">Sleep</td>
            <td className="col-6">
              <div className="row">
                <div className="col-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
                <div className="col-4">
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th className="col-2">2</th>
            <td className="col-4">Dream</td>
            <td className="col-6">
              <div className="row">
                <div className="col-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
                <div className="col-4">
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th className="col-2">3</th>
            <td className="col-4">Work</td>
            <td className="col-6">
              <div className="row">
                <div className="col-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
                <div className="col-4">
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
