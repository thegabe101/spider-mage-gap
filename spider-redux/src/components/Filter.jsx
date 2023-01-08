import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/slices/filterSlice';

export const Filter =() => {
    const filter = useSelector(
        (state) => state.productFilter.filter
    );
    const dispatch = useDispatch();
return (
    <div style={{background: 'blue'}}>
        <input
            onChange={(e)=> 
               dispatch(setFilter(e.target.value))
            }
            value={filter}
            placeholder="filter by name"
        ></input>
    </div>
);   
};