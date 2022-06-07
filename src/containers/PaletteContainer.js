import React, { Component } from "react";
import Palette from "../components/Palette";  // .하나는 자기자신, ..두개는 부모

class PaletteContainer extends Component {
    handleSelect = color => {
        const {changeColor } = this.props;
        console.log('what');
        changeColor(color);
    };
    render(){
        const { color } = this.props;
        return <Palette onSelect={this.handleSelect} selected={color} />;
    }
}

export default PaletteContainer;
