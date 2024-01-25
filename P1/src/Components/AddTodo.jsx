import React from "react";

export default function AddTodo() {
  return (
    <div className="pt-4 pb-4">
      <form>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              defaultValue="Add Task.."
            />
          </div>

          <div className="col-5">
            <input
              type="date"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="col-2">
            <div class="d-grid gap-2">
              <button class="btn btn-success" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
