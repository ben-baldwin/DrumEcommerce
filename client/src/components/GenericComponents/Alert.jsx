import React, { useState } from 'react';

const Alert = ({ alertMessages }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert ? (
        <div className='text-md my-6 font-semibold uppercase text-red-600'>
          {alertMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
          {/* <button onClick={handleCloseAlert}>Close</button> */}
        </div>
      ) : null}
      
    </>
  );
};

export default Alert;