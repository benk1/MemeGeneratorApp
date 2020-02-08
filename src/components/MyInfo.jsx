import React from 'react';
const MyInfo = ({name,age}) => {
  return (
    <div>
<h3 className="green-text text-lighten-1">My Name is {name}</h3>
  <p style={{color: 'blue',fontSize: 23}}>This is a short Paragraph about me...I'm {age} yrs old</p>
      <h4 className="yellow-text text-darken-3">Country I want to visits are:</h4>
      <ul className='collection black-text text-darken-4'>
        <li className='collection-item '>Tanzania</li>
        <li className='collection-item'>Kenya</li>
        <li className='collection-item'>Uganda</li>
      </ul>
    </div>
  );
};

export default MyInfo;
