import React from 'react';
// import AddNewItem from '.././actions';

const editBtn = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Кнопка -');
    };
    return (
        <button onClick={handleClick}>-</button>
    );
}

export default editBtn;