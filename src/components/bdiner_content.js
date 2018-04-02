import React, { Component } from 'react';

class BDMenu extends Component {
    render() {
        this.count = 1
        const data = this.props.data;
        return (
            <div className={data.completedForm ? 'showContent' : 'hideContent'}>
                <div className="content-wrapper">
                    Thank you for your order, Your Entree is: {this.renderLabel(data.entree)}, your first side is
                    {this.renderLabel(data.sideOne)} and your second side is: {this.renderLabel(data.sideTwo)}, or {this.renderLabel(data.chefsChoice)} for Chef's Choice. Is this right?...That sounds delicious! Your order total is:
                </div>
            </div>
        )
    }
    renderLabel = function(state) {
        return (
            <span>
                <label className="black-label">{this.count++}</label><b className="bold-text">{state}</b>
            </span>
        )
    }.bind(this)
}



export default BDMenu;