import React from 'react';

export const ToDoList = (props) => {
  return (
    <>
      <h2 className='mb-4'>My ToDo-list:</h2>
      <div className='d-grid gap-3 col-8 mx-auto justify-content-center'>
        <ul>
          <li>
            <h5>
              <strong>Task1:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
              <button className='btn btn-link mb-1'>Done</button>
            </h5>
          </li>
          <li>
            <h5>
              <strong>Task2:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
              <button className='btn btn-link mb-1'>Done</button>
            </h5>
          </li>
        </ul>
      </div>
    </>
  );
};
