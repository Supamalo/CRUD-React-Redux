import React from 'react';
// import AddNewItem from '.././actions';

const deleteBtn = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Кнопка del');
    };
    return (
        <button onClick={handleClick}>del</button>
    );
}

export default deleteBtn;