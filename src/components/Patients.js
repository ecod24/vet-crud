import React from 'react';
const Patients = (props) => {
  return (
    <>
      <header>My Patients</header>
      <div className="list">
        {props.patient_list.map(({ id, name, breed }) => {
          return (
            <div key={id} className="item">
              <h3>{name}</h3>
              <h5>{breed}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Patients;
