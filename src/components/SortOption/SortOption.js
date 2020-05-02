import React from 'react';
import './SortOption.scss';

const sortOption = (props) => {

    return (
        <div className='sortOptionContainer'>
        {
          props.sortOptionList.map(item => (
            <label key={item.id} className={item.checked? 'bold': ''}>
                <input type='checkbox' name={item.displayName} checked={item.checked} onChange={() => props.checkedSortItem(item)} />
              {item.displayName}
            </label>
          ))
        }
      </div>
    );
}

export default sortOption;