import React, { useState } from 'react';
import { Card, Button, Form, Col } from 'react-bootstrap';
import * as elTypeCompo from './elTypeComponent';
import * as actionCreators from './store/actions/action';
import { connect } from 'react-redux';
import axios from 'axios';



const AppAddStyle = (props) => {
    console.log(props)
    const [source, setSource] = useState(props.source ? props.source : '')
    const [elementType, setElementType] = useState(props.element_type ? props.element_type : '')
    const [uniqueId, setUniqueId] = useState(props.unique_id ? props.unique_id : '')
    const [elTypeDisabled, setElTypeDisabled] = useState(props.unique_id ? false : true)


    const token ="eyJraWQiOiI1WEhDQWNOWDV6NGhTUVwvRk9uUkVYMUt0ZWpwam9mcFkyTWM2aHltM1NlYz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxYjFmNDIyOS00YTYwLTRhYzQtOGE1Ny0zZDEyYjljYTMxYWQiLCJjb2duaXRvOmdyb3VwcyI6WyJzdXBlckFkbWluIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzdlQnJ4WklrVyIsImlzU3VwZXJBZG1pbiI6InRydWUiLCJjb2duaXRvOnVzZXJuYW1lIjoiMWIxZjQyMjktNGE2MC00YWM0LThhNTctM2QxMmI5Y2EzMWFkIiwiaXNBZG1pbiI6InRydWUiLCJhdWQiOiI2bXVvNDhqYzM0NjJjb2E4NTBjdGxuYzhrNyIsImV2ZW50X2lkIjoiNjQxMjE0MzktNmNkNC00M2ZkLTk0MDUtMzA5ZDQyYTJmNDNjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MTkwMTEyNDcsImV4cCI6MTYxOTAxNDg0NywiaWF0IjoxNjE5MDExMjQ3LCJlbWFpbCI6InNoc29uYXdhbmVAbWVya2xlaW5jLmNvbSJ9.Sjo1Fwya9UgOHDN_VhCx8mZOhHK8xBHBMJdT3VD-AJM0USuos96LZggucUfUHowTjOYn0bIrdbJHZ4jKNeR7CwbYM61rbn4IsdRBQzf88zEeBMmP_tG1u1CS0dW6VP3ErigR5V6ZMIYwUuFg_MwQYMxrCD7vVcrMck_49ixm7Di1e5BgW8wnVNW2VFwvqy31a_Iin3fBNzgZ66HWpUiDwtj9kRzvyGLjE7NRijb4GrFHo5zWUh_DGfeXzeQkvM6KWwoFcBl5d5bGXnmMa-zV_60HLE8QHCu_tqyuEf9h9DAYyBDc0x9k9fpfvqtN1NLDTubbkCCJkn7HNQ6d-jP10w"
    const headers = {
        'Authorization': `${token}`
    }
    console.log('I am rendering...')
    

    let values
    const onChildValueChangedHandler = (obj) => {
        values = {
            ...obj,
            source,
            elementType,
            uniqueId
        }
        // props.noEdit()
        console.log(values)
    }

    const onSaveHandler = async () => {
        
        if(values === undefined) {
            return
        }
        // props.onSaveValues(values)

        let keys = Object.keys(values)
        console.log('keys>>>', keys)
        let vals = Object.values(values)
        let newObj = keys.map(key => {
            function camelToUnderscore(key) {
                var result = key.replace( /([A-Z])/g, " $1" );
                return result.split(' ').join('_').toLowerCase();
             }
             
            //  console.log(camelToUnderscore(key));
            return camelToUnderscore(key);
        })
        console.log(newObj,vals)
        let valsObj = newObj.map((item,i) => {
            
            return {
                [item]: vals[i]
            }
        })
        // console.log(valsObj)
        let objPassed = Object.assign({}, ...valsObj)
        console.log(objPassed)
        let url = ''
        if(props.isEdit){
            url = 'https://14hdqvbxrb.execute-api.ap-south-1.amazonaws.com/Stage/v1/styles/update'
        }else{
            url  = 'https://14hdqvbxrb.execute-api.ap-south-1.amazonaws.com/Stage/v1/styles/add'
        }
        await axios.post(url,
            {
                ...objPassed,
                "plot_details": {"plot_width": 0},
            },
            {
                headers
            })
                .then(res => {
                    if(props.isEdit) {
                        props.onUpdateValues(Object.assign({},objPassed,{"plot_details": {"plot_width": 0}}))
                        props.noEdit()
                        props.history.push('/')
                    }else {
                        console.log(res)
                        props.onSaveValues(res)
                        props.noEdit()
                        props.history.push('/')
                    }
                })
                .catch(err => console.log(err))
    }

    const sourceChangedHandler = (e) => {
        setSource(e.target.value)
        let src = ''
        if(e.target.value === 'Styles Gallery') {
            src = 'SG'
        }else if(e.target.value === 'Service Delivery') {
            src =  'SD'
        }else if(e.target.value === 'Crowd Sourced') {
            src =  'CS'
        }else if(e.target.value === 'Campaigns') {
            src =  'C'
        }
        console.log(src)
        axios.post('https://14hdqvbxrb.execute-api.ap-south-1.amazonaws.com/Stage/v1/generateUniqueId',
            {
                "source":`${src}`,
                "event_for":"styles"
            },
            {
                headers
            })
                .then(res => {
                    setUniqueId(res.data.payload[0])
                    if (uniqueId !== undefined || uniqueId !== '') {
                        setElTypeDisabled(false)
                    }
                })
                .catch(err => console.log(err))

        console.log('source', e.target.value)
        // setUniqueId(Math.floor(Math.random() * 1000))
        
    }

    const renderElTypeForm = (elementType) => {
        if(!elementType || elementType === 'Choose...')
            return null
        const Component = elTypeCompo[elementType]

        return <Component {...props} onChange={onChildValueChangedHandler} />
    }
    // console.log(elTypeCompo)
    return (
        <Card className={'m-5'} style={{ boxShadow: "0px 0px 10px black" }}>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', marginRight: '50px', marginTop: '25px' }}>
                <Button variant="secondary" onClick={() => props.history.push('/')} >Cancel</Button>
                <Button className={'mr-3'} variant="primary" 
                    // disabled={props.isEdit ? true : false }
                    onClick={() => {
                        onSaveHandler()
                        // props.noEdit()
                        // props.history.push('/')
                    }} >{props.isEdit ? 'UPDATE' : 'SAVE'}</Button>
            </div>
            <Form style={{ textAlign: 'left', margin: '20px' }}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSOurce">
                    <Form.Label>Source</Form.Label>
                    <Form.Control as="select" 
                        value={source}
                        onChange={sourceChangedHandler}>
                        <option>Choose...</option>
                        <option>Styles Gallery</option>
                        <option>Service Delivery</option>
                        <option>Crowd Sourced</option>
                        <option>Campaigns</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridElementType">
                    <Form.Label>Element Type</Form.Label>
                    <Form.Control as="select"
                        value={elementType}
                        disabled={elTypeDisabled}
                        onChange={(e) => {
                            setElementType(e.target.value)
                            console.log('Element Type', e.target.value)
                        }}>
                        <option>Choose...</option>
                        <option>Door</option>
                        <option>Columns</option>
                    </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridUniqueId">
                    <Form.Label>Unique Id</Form.Label>
                    <Form.Control type="text" value={uniqueId} 
                        onChange={e => {
                        }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridElementName">
                    <Form.Label>Element Name</Form.Label>
                    <Form.Control type="text" placeholder="Element Name" />
                    </Form.Group>
                </Form.Row>
            </Form>
            {renderElTypeForm(elementType)}
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        // ctr: state.ctr.counter,
        isEdit: state.reducer.isEdit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onIncrementCounter: () => dispatch(actionCreators.increment()),
        // onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
        onSaveValues: (val) => dispatch(actionCreators.saveValues(val)),
        onUpdateValues: (val) => dispatch(actionCreators.updateValues(val)),
        editValue: () => dispatch(actionCreators.editValue()),
        noEdit: () => dispatch(actionCreators.noEdit())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppAddStyle);
