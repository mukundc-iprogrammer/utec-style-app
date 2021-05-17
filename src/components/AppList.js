import React from 'react'
import { Table, Card, Button } from 'react-bootstrap';
import * as actionCreators from './store/actions/action';
import { connect } from 'react-redux';

const AppList = ({ history, listValues }) => {

    const listItemClickedHandler = (item) => {
        console.log(item)
        history.push(`/app-list/${item.unique_id}`)
    }

    console.log(listValues)
    return (
        <div>
            <header>AppList</header>
            <Card>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', marginRight: '50px', marginTop: '25px' }}>
                    <Button variant="primary" onClick={() => history.push('/app-add-style')} >Add Style</Button>
                </div>
                <Table striped bordered hover className='mt-3' size='sm' responsive>
                    <thead>
                        <tr>
                        <th>UNIQUE ID</th>
                        <th>SOURCE</th>
                        <th>ELEMENT TYPE</th>
                        <th>ELEMENT NAME</th>
                        <th>STYLE</th>
                        <th>MATERIAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listValues.map(item => (
                            <tr key={item.unique_id}
                                onClick={() => {listItemClickedHandler(item)}}>
                                <td>{item.unique_id}</td>
                                <td>{item.source}</td>
                                <td>{item.element_type}</td>
                                <td>{item.element_name ? item.element_name : ''}</td>
                                <td>{item.style ? item.style : ''}</td>
                                <td>{item.material ? item.material : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // ctr: state.ctr.counter,
        listValues: state.reducer.values
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onIncrementCounter: () => dispatch(actionCreators.increment()),
        // onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
        onSaveValues: (val) => dispatch(actionCreators.saveValues(val))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppList);
