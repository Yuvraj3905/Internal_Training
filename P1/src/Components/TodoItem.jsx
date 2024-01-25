import React from 'react'

export default function TodoItem({todos}) {
  

  return (
   <>
          <tr>
            <th className="col-2">1</th>
            <td className="col-4">{todos.name}</td>
            <td className="col-6">
              <div className="row">
                <div className="col-8">
                  <p>
                    {todos.desc}
                  </p>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr> 
   </>
  )
}
