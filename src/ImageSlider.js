import React, {Component} from 'react';

class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    // increment = () => {
    //     newNum = this.state.currentSlideIndex + 1;
    //     this.setState({
    //         currentSlideIndex: newNum
    //     })
    // }

    render() {
        return <h1>I am on slide {this.state.currentSlideIndex}</h1>
    }

}

export default ImageSlider;