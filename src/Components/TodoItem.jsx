import React from 'react'

export default function TodoItem() {
  return (
   <>
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
   </>
  )
}
