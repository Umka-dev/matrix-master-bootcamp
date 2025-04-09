import React from 'react';

export const ToDoList = ({ taskList, handleClickDone }) => {
  console.log('Task list:', taskList);
  return (
    <>
      <h2 className='mb-4'>My ToDo-list:</h2>
      <div className='d-grid gap-3 col-8 mx-auto justify-content-center'>
        <ul>
          {taskList.map((item) => {
            return (
              <li key={item.id}>
                <h5>
                  <strong>{item.title}:</strong> {item.description}
                  <button
                    className='btn btn-link mb-1'
                    onClick={() => handleClickDone(item.id)} // with callback send item ID to handleClickDone
                  >
                    Done
                  </button>
                </h5>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
