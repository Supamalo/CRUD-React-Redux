import React, { Component } from 'react';
const title = ['Название', 'Адрес', 'Владелец', 'Тип', 'Активность', ''];

class TableHeader extends Component {
    render() {
        const headerRender = title.map((value, index) =>
            <th key={index}>{value}</th>
        );
        return (
            <thead>
                <tr>
                    {headerRender}
                </tr>
            </thead>
        );
    }
}
export default TableHeader;