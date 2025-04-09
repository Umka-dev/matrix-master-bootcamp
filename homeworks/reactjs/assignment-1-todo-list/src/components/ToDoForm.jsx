import React from 'react';

export const ToDoForm = ({ title, description, handleChange, handleClick }) => {
  console.log('Title: ', title, 'Description: ', description);
  return (
    <>
      <h1 className='mb-4'>New Task:</h1>
      <form className='d-flex flex-column align-items-center mb-4'>
        <div className='d-grid gap-2 col-3 mx-auto justify-content-center'>
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
            placeholder='Your task'
            style={{ width: 300 }}
          />
          <textarea
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='Describe it...'
            style={{ height: 60, width: 300 }}
          ></textarea>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};
