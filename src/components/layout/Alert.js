import React, { useContext } from 'react';
import alertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext1 = useContext(alertContext);

  const { alert } = alertContext1;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.message}
      </div>
    )
  );
};

export default Alert;
