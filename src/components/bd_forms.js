import React, {Component}from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';
import _ from 'lodash';

import MadlibContent from './bdiner_content';

function MadlibInput(props) {
    return (
        <Col md="3" className="input-wrapper">
            <Row>
                <Col md="2">
                    <label className="green-label">{props.index}</label>
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
        });
    }.bind(this)

    renderButton = function() {
        if(this.state.completedForm) {
            return <a className="clear-button" onClick={this.handleClick}>Clear Order</a>
        }
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
                    <form onSubmit={this.handleSubmit} id="madlib-form">
                        <Row style={{textAlign: 'center', color: 'white'}}>
                            {
                                _.map(this.inputData, (data, indexKey) => {
                                    return <MadlibInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.guestChoice({inputTitle:data.prop})} />
                                })
                            }
                        
                        </Row>
                        <Row>
                            <Col md="12" className="button-wrapper">
                                {this.renderButton()}
                            </Col>
                        </Row> 
                    </form>   
                    <MadlibContent data={this.state}/>
                </Card>
            </div>
        
        );
    }
}

export default BDin_Menu;
