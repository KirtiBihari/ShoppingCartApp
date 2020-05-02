import React from 'react';
import './SortList.scss';
import SortOption from '../SortOption/SortOption';

const sortList = (props) => {

    return (
        <div className='sortListContainer'>
            <label>Sort By </label>
            <SortOption
                sortOptionList={props.sortOptionList}
                checkedSortItem={props.handleSorting}
            />
        </div>
    );
}

export default sortList;