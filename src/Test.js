import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

const initialState = {
    valueFirst: '',
    valueSecond: ''
};
const constantsF = "FIRST_INPUT";
const constantsS = "SECOND_INPUT";
const changeSecondInput = (newSecondInput) => {
    return {
        type: constantsS,
        valueSecond: newSecondInput
    }
};
const changeFirstInput = (newFirstInput) => {
    return {
        type: constantsF,
        valueFirst: newFirstInput
    }
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case constantsF:
            return { ...state, valueFirst: action.value }
        case constantsS:
            return { ...state, valueSecond: action.value }
        default: return state
    }
}
export const store = createStore(reducer);

class Test extends Component {
    render() {
        const { changeSecondInput, changeFirstInput } = this.props;
        return (
            <Fragment>
                <input type="text"
                    onChange={(event) => {
                        changeFirstInput(event.target.value);
                    }}
                />
                <input type="text"
                    onChange={(event) => {
                        changeSecondInput(event.target.value);
                    }} />
                <div>{this.props.valueFirst}</div>
            </Fragment>
        );
    }
}
const putStateToProps = (state) => {
    return {
        valueFirst: state.valueFirst,
        valueSecond: state.valueSecond
    };
};

const putDispatchToAction = (dispatch) => {
    return {
        changeSecondInput: bindActionCreators(changeSecondInput, dispatch),
        changeFirstInput: bindActionCreators(changeFirstInput, dispatch)
    };
};

export default connect(putStateToProps, putDispatchToAction)(Test);