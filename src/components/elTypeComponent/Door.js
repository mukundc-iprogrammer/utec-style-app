import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap'; 

const Door = (props) => {
    const [style, setStyle] = useState(props.style ? props.style : '')
    const [shape, setShape] = useState(props.shape ? props.shape : '')
    const [material, setMaterial] = useState(props.material ? props.material : '')
    const [locationOne, setLocation] = useState(props.locationOne ? props.locationOne : '')
    const [shutter, setShutter] = useState(props.shutter ? props.shutter : '')
    const [operation, setOperation] = useState(props.operation ? props.operation : '')

    const sendChangedValueToParent = (inpField, val) => {
        const obj = {
            'style': inpField === 'style' ? val : style,
            'shape': inpField === 'shape' ? val : shape,
            'material': inpField === 'material' ? val : material,
            'location': inpField === 'location' ? val : locationOne,
            'shutter': inpField === 'shutter' ? val : shutter,
            'operation': inpField === 'operation' ? val : operation
        }
        props.onChange(obj)
    }


    return (
        <Form style={{ textAlign: 'left', margin: '20px' }}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridStyle">
                <Form.Label>Style</Form.Label>
                <Form.Control as="select" 
                    value={style}
                    onChange={(e) => {
                        setStyle(e.target.value)
                        console.log('style', e.target.value)
                        sendChangedValueToParent('style', e.target.value)
                    }}>
                    <option>Choose...</option>
                    <option>Traditional</option>
                    <option>Classic</option>
                    <option>Modern</option>
                    <option>Artistic</option>
                </Form.Control>
                </Form.Group>
             <Form.Group as={Col} controlId="formGridShape">
                <Form.Label>Shape</Form.Label>
                <Form.Control as="select"
                    value={shape}
                    onChange={(e) => {
                        setShape(e.target.value)
                        console.log('shape', e.target.value)
                        sendChangedValueToParent('shape', e.target.value)
                    }}>
                    <option>Choose...</option>
                    <option>Rectangular</option>
                    <option>Arched</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridMaterial">
                <Form.Label>Material</Form.Label>
                <Form.Control as="select"
                    value={material}
                    onChange={(e) => {
                        setMaterial(e.target.value)
                        console.log('material', e.target.value)
                        sendChangedValueToParent('material', e.target.value)
                    }}>
                    <option>Choose...</option>
                    <option>Wood</option>
                    <option>Metal</option>
                    <option>Aluminum</option>
                    <option>Glass</option>
                </Form.Control>
                </Form.Group>
             <Form.Group as={Col} controlId="formGridLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control as="select"
                    value={locationOne}
                    onChange={(e) => {
                        setLocation(e.target.value)
                        console.log('location', e.target.value)
                        sendChangedValueToParent('location', e.target.value)
                    }}>
                    <option>Choose...</option>
                    <option>Main Door</option>
                    <option>Interior Door</option>
                    <option>Back Door</option>
                    <option>Balcony Door</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridShutter">
                <Form.Label>Shutter</Form.Label>
                <Form.Control as="select"
                    value={shutter}
                    onChange={(e) => {
                        setShutter(e.target.value)
                        console.log('shutter', e.target.value)
                        sendChangedValueToParent('shutter', e.target.value)
                    }}>
                    <option>Choose...</option>
                    <option>Single Shutter</option>
                    <option>Double Shutter</option>
                    <option>Multi Shutter</option>
                </Form.Control>
                </Form.Group>
             <Form.Group as={Col} controlId="formGridOperation">
                <Form.Label>Operation</Form.Label>
                <Form.Control as="select"
                    value={operation}
                    onChange={(e) => {
                        setOperation(e.target.value)
                        console.log('operation', e.target.value)
                        sendChangedValueToParent('operation', e.target.value)
                    }}>
                    <option>Choose...</option>
                    <option>Hinged</option>
                    <option>Sliding</option>
                    <option>Folding</option>
                    <option>Sliding Folding</option>
                    <option>Pocket</option>
                    <option>Pivoted</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default Door
