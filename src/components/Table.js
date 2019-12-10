import React, { Component } from 'react'
import TableItem from './TableItem'
import TableHeader from './TableHeader'
import { connect } from 'react-redux'
import { AddNewItem } from '../redux/actions'
class Table extends Component {
    render() {
    return(
            <table>
                <TableHeader/>
                <TableItem text={this.props.text}/>
                {/* AddNewItem={this.props.id} 
                id={this.props.id} 
                name={this.props.name} 
                address={this.props.address} 
                owner={this.props.owner} 
                isType={this.props.isType} 
                isActivity={this.props.isActivity} */}
            </table>
    );}
}
const mapStateToProps = state => {
    return {
        text:state.new.text
        // id: state.new.id,
        // name: state.new.name,
        // address: state.new.address,
        // owner: state.new.owner,
        // isType: state.new.isType,
        // isActivity: state.new.isActivity
    };
};
const mapDispatchToAction = {
    AddNewItem
};
export default connect(mapStateToProps, mapDispatchToAction)(Table);