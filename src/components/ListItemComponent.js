import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/action';
import axios from 'axios';

const ListItemComponent = (props) => {
    const history = useHistory();
    const { uId } = useParams();

    console.log(props.listValues)
    const item = props.listValues.find(i => i.unique_id === uId)
    console.log(item)
    const token ="eyJraWQiOiI1WEhDQWNOWDV6NGhTUVwvRk9uUkVYMUt0ZWpwam9mcFkyTWM2aHltM1NlYz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxYjFmNDIyOS00YTYwLTRhYzQtOGE1Ny0zZDEyYjljYTMxYWQiLCJjb2duaXRvOmdyb3VwcyI6WyJzdXBlckFkbWluIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzdlQnJ4WklrVyIsImlzU3VwZXJBZG1pbiI6InRydWUiLCJjb2duaXRvOnVzZXJuYW1lIjoiMWIxZjQyMjktNGE2MC00YWM0LThhNTctM2QxMmI5Y2EzMWFkIiwiaXNBZG1pbiI6InRydWUiLCJhdWQiOiI2bXVvNDhqYzM0NjJjb2E4NTBjdGxuYzhrNyIsImV2ZW50X2lkIjoiNjQxMjE0MzktNmNkNC00M2ZkLTk0MDUtMzA5ZDQyYTJmNDNjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MTkwMTEyNDcsImV4cCI6MTYxOTAxNDg0NywiaWF0IjoxNjE5MDExMjQ3LCJlbWFpbCI6InNoc29uYXdhbmVAbWVya2xlaW5jLmNvbSJ9.Sjo1Fwya9UgOHDN_VhCx8mZOhHK8xBHBMJdT3VD-AJM0USuos96LZggucUfUHowTjOYn0bIrdbJHZ4jKNeR7CwbYM61rbn4IsdRBQzf88zEeBMmP_tG1u1CS0dW6VP3ErigR5V6ZMIYwUuFg_MwQYMxrCD7vVcrMck_49ixm7Di1e5BgW8wnVNW2VFwvqy31a_Iin3fBNzgZ66HWpUiDwtj9kRzvyGLjE7NRijb4GrFHo5zWUh_DGfeXzeQkvM6KWwoFcBl5d5bGXnmMa-zV_60HLE8QHCu_tqyuEf9h9DAYyBDc0x9k9fpfvqtN1NLDTubbkCCJkn7HNQ6d-jP10w"
    const headers = {
        'Authorization': `${token}`
    }

    const deleteHandler = () => {
        axios.post('https://14hdqvbxrb.execute-api.ap-south-1.amazonaws.com/Stage/v1/styles/delete',
            {
                unique_id: uId
            },{
                headers
            })
                .then(res => {
                    if(res.status === 200) {
                        console.log('deleted')
                        props.onDeleteValue(uId)
                        history.push('/')
                    }
                })
                .catch(err => console.log(err))
            
            history.push('/')
    }

    return (
        <Card className={'m-5'} style={{ boxShadow: "0px 0px 10px black" }}>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', marginRight: '50px', marginTop: '25px' }}>
                <Button variant="secondary" 
                    onClick={() => {
                        deleteHandler()
                    }} >DELETE</Button>
                <Button className={'mr-3'} variant="primary" 
                    onClick={() => {
                        props.onEdit()
                        history.push(`/edit-form/${uId}`)
                    }} >EDIT</Button>
                <Button className='mr-auto ml-3' variant="secondary" onClick={() => history.push('/')} >BACK</Button>
            </div>
            <Card className='m-2 p-5' style={{ textAlign: 'left' }}>
                    <div>Unique ID</div>
                    <div>{uId}</div>
            </Card>
            <Card className='m-2 p-5' style={{ textAlign: 'left' }}>
                    <Row className='m-3 p-1'>
                        <Col>
                            <div>Source</div>
                            <div>{item.source}</div>
                        </Col>
                        <Col>
                            <div>Element Type</div>
                            <div>{item.element_type}</div>
                        </Col>
                    </Row>
                    <Row className='m-3 p-1'>
                        <Col>
                            <div>Unique ID</div>
                            <div>{item.unique_id}</div>
                        </Col>
                        <Col>
                            <div>Element Name</div>
                            <div>{}</div>
                        </Col>
                    </Row>
                    <Row className='m-3 p-1'>
                        <Col>
                            <div>Style</div>
                            <div>{item.style}</div>
                        </Col>
                        <Col>
                            <div>Material</div>
                            <div>{item.material}</div>
                        </Col>
                    </Row>
            </Card>
        </Card>

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
        onDeleteValue: (val) => dispatch(actionCreators.deleteValue(val)),
        onEdit: () => dispatch(actionCreators.editValue())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemComponent);