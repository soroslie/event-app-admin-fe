import React from 'react';
import style from '../assets/styles/components/Spinner.module.css';

function Spinner() {
  return (
    <div className="w-full flex">
      <div className="mx-auto">

        <div className={style.lds_ring}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export default Spinner;
