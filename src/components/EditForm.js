import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/action';
import AppAddStyle from './AppAddStyle';

const EditForm = (props) => {
    const { uId } = useParams();
    const item = props.listValues.find(i => i.unique_id === uId)
    console.log('editform item', item)
    return (
        <div>
            <AppAddStyle {...item} {...props} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // ctr: state.ctr.counter,
        listValues: state.reducer.values,
        isEdit: state.reducer.isEdit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onIncrementCounter: () => dispatch(actionCreators.increment()),
        // onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
        onSaveValues: (val) => dispatch(actionCreators.saveValues(val)),
        onDeleteValue: (val) => dispatch(actionCreators.deleteValue(val))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);