import React from 'react';

const Input = ({name , value , label , onInputChange}) => {
    return ( 
        <div className="pt-3 form-group">
            <label htmlFor={name}>
                {label}
            </label>
            <input onChange={onInputChange}
              name={name} 
              value={value} 
              id={name} 
              type="text" 
              className="mt-2 form-control" 
              />
        </div>
     );
}
 
export default Input;