import React from 'react';
import { ButtonNew } from './Search.js';

export default function Search () {
  return (
    <div>
        <form className='form  w-100'>
          <div className='input-group ml-2'>
            <span className='input-group-text' id='basic-addon1'>
              <i className='fas fa-search'></i>
            </span>
              <input
                type='search'
                className='form-control'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='basic-addon1'
                // onChange={props.onHandlerChange}
                // value={props.query}
              />
          </div>
        </form>
        <div className='text-center'>
          <ButtonNew>Chat nuevo</ButtonNew>
        </div>
    </div>
  );
}
