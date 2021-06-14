// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.handleClick}>


            </button>
        )
    }
}

export default CoordinatesButton
