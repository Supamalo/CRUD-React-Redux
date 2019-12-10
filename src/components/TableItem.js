import React, { Fragment, Component } from 'react';



class TableItem extends Component {
 
    handleNewItem(e) {
        e.preventDefault();
        console.log(this.props)
    }
    render() {

        return (
            <Fragment>
                <tbody>
                    <tr>
                        
                    </tr>
                </tbody>
                <button onClick={this.handleNewItem.bind(this)}>+</button>

            </Fragment>
        );
    }
}
export default TableItem;