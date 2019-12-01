import React, { Component } from 'react'
// import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Gift extends Component {
    state = {
        person: '',
        present: ''
    }

    // inputChangedHandler = (event, input) => {
    //     const value = event.target.value

    //     this.setState({[input]: value})
    // }

    render() {
        return (
            <div className='gift'>
                <Form>
                    <Form.Group>
                        <Form.Label>Person</Form.Label>
                        <Form.Control
                            className='input-person'
                            onChange={event => this.setState({ person: event.target.value })}/>
                            {/* onChange={event => this.inputChangedHandler(event, 'person')}/> */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Present</Form.Label>
                        <Form.Control
                            className='input-present'
                            onChange={event => this.setState({ present: event.target.value })}/>
                            {/* onChange={event => this.inputChangedHandler(event, 'person')}/> */}
                    </Form.Group>
                </Form>
                <Button
                    className='btn-remove'
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                    >
                        Remove Gift</Button>
            </div>
        )
    }

}

export default Gift
