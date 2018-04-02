import React, {Component}from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';
import _ from 'lodash';

import BDMenu from './bdiner_content';

function GuestInput(props) {
    return (
        <Col md="3" className="input-wrapper">
            <Row>
                <Col md="2">
                    <label className="blue-label">{props.index}</label>
                </Col>
                <Col md="10">
                    <input placeholder={props.placeholder} value={props.state} type='text' onChange={props.onChange} />
                </Col>    
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col md="10">
                    <div className="input-description">{props.placeholder}</div>
                </Col>
            </Row>    
        </Col>
    );
  }



class BDin_Menu extends Component {


    constructor(props) {
        super(props)

        this.state = {
            completedForm: false,
            entree: '',
            sideOne: '',
            sideTwo: '',
            chefsChoice: '',
            orderTotal: 0
        }
    }


    guestChoice = function(props) {
        return function (event) {
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this)
    }

    handleSubmit = function(event) {
        this.setState({completedForm: true});
        event.preventDefault();
    }.bind(this);

    handleClick = function() {
        this.setState({
            completedForm: false,
            entree: '',
            sideOne: '',
            sideTwo: '',
            chefsChoice: '',
            orderTotal: 0
        });
    }.bind(this)

    renderButton = function() {
        if(this.state.completedForm) {
            if (this.state.entree == 'omelet') {
                this.state.orderTotal += 10
            } else if (this.state.entree == 'pasta') {
                this.state.orderTotal += 12
            } else if (this.state.entree == 'sandwich') {
                this.state.orderTotal += 10
            } else if (this.state.entree == 'hamburger') {
                this.state.orderTotal += 12
            } else if (this.state.entree == 'biscuits & gravy') {
                this.state.orderTotal += 12
            } else if (this.state.entree == 'parmesan chicken') {
                this.state.orderTotal += 12
            } else if (this.state.entree == 'pancakes') {
                this.state.orderTotal += 8
            } else if (this.state.entree == 'chicken tenders') {
                this.state.orderTotal += 8
            } else if (this.state.entree == 'roast beef') {
                this.state.orderTotal += 14
            } 
            if (this.state.chefsChoice == 'yes') {
                this.state.orderTotal += 10
            }
            return <a className="clear-button" onClick={this.handleClick}>Clear Order</a>
        }
        this.state.orderTotal = 0
        return <input type="submit" className="generate-button" value="Generate Order Total" />
        
    }
    
    render() {

        this.inputData = [
            {placeholder: 'Entree', prop: 'entree', state: this.state.entree},
            {placeholder: 'Side #1', prop: 'sideOne', state: this.state.sideOne},
            {placeholder: 'Side #2', prop: 'sideTwo', state: this.state.sideTwo},
            {placeholder: 'Chefs Choice(Mark Yes)', prop: 'chefsChoice', state: this.state.chefsChoice},

            
        ]


        return (
            <div className="card-wrapper">
                <Card>
                    <form onSubmit={this.handleSubmit} id="guestChoice-form">
                        <Row style={{textAlign: 'center', color: 'white'}}>
                            {
                                _.map(this.inputData, (data, indexKey) => {
                                    return <GuestInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.guestChoice({inputTitle:data.prop})} />
                                })
                            }
                        
                        </Row>
                        <Row>
                            <Col md="12" className="button-wrapper">
                                {this.renderButton()}
                            </Col>
                        </Row> 
                    </form>   
                    <BDMenu data={this.state}/>
                </Card>
            </div>
        
        );
    }
}

export default BDin_Menu

