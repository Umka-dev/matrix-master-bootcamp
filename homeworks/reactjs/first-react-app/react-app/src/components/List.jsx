import React from 'react';
import { Button } from './Button';

export const List = (props) => {
  // console.log('data:', props.data);
  return (
    <div>
      <ul>
        {/* If you have any data then loop through this data and for each values return its value */}
        {props.data &&
          props.data.map((val) => {
            return <li>{val}</li>;
          })}
      </ul>
      <Button title='From List' />
    </div>
  );
};
