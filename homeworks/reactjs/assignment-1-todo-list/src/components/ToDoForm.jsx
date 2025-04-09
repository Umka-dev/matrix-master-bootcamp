import React from 'react';

export const ToDoForm = (props) => {
  return (
    <>
      <h1 className='mb-4'>New Task:</h1>
      <form className='d-flex flex-column align-items-center mb-4'>
        <div class='d-grid gap-2 col-3 mx-auto justify-content-center'>
          <input
            type='text'
            name='task-title'
            value=''
            placeholder='Your task'
            style={{ width: 300 }}
          />
          <textarea
            type='text'
            name='task-discribtion'
            value=''
            placeholder='Describe it...'
            style={{ height: 60, width: 300 }}
          ></textarea>
          <button type='submit' class='btn btn-primary'>
            Add
          </button>
        </div>
      </form>
    </>
  );
};
