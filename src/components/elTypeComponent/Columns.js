import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap'; 

const Door = (props) => {
    const [style, setStyle] = useState(props.style ? props.style : '')
    const [material, setMaterial] = useState(props.material ? props.material : '')

    const sendChangedValueToParent = (inpField, val) => {
        const obj = {
            'style': inpField === 'style' ? val : style,
            'material': inpField === 'material' ? val : material,
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
             <Form.Group as={Col} controlId="formGridMaterial">
                <Form.Label>Material Finish</Form.Label>
                <Form.Control as="select"
                    value={material}
                    onChange={(e) => {
                        setMaterial(e.target.value)
                        console.log('material', e.target.value)
                        sendChangedValueToParent('material', e.target.value)
                    }}>
                    <option>Choose...</option>
                    <option>Brick</option>
                    <option>Stone</option>
                    <option>Wood</option>
                    <option>Concrete</option>
                    <option>Plain Plaster</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default Door
