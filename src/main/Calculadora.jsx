import React, { useState, Component } from 'react';
import './Calculadora.css';
import Button from '../components/Button.jsx';
import Display from '../components/Display.jsx';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values:[0,0],
    current: 0   
}


export default class Calculadora extends Component {


    state = { ...initialState}

    constructor(props){
        super(props)
        
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }
    

    clearMemory(){
        this.setState({...initialState});
    }

    setOperation(operation){
         if(this.state.current === 0 ) {
             this.setState({operation, current:1, clearDisplay: true});
         }else{
             const equals = operation === '=';
             const currentOperation = this.state.operation;

             const values = [...this.state.values];
             try{
                 values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
             }catch(e){
                values[0] = this.state.values[0]
             }
             values[1] = 0;

             this.setState({
                 displayValue: values[0],
                 operation: equals ? null : operation,
                 current: equals ? 0 : 1,
                 clearDisplay: !equals,
                 values
             })
         }
    }

    addDigit(number){
        
        if(number === '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0' 
                || this.state.clearDisplay == true;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + number;

        this.setState({displayValue, clearDisplay: false})


        if( number !== '.'){

            const i = this.state.current; //variavel recebendo o valor do current do estado
            const newValue = parseFloat(displayValue); //transformando os valores de texto para float
            const values = [...this.state.values]; //values[0,0]
            values[i] = newValue; // passagem dos valores para o array criado acima
            this.setState({values});  // colocando no setState
            console.log(values); //Imprimindo na tela
        }
    }

    render() {
        return(
            <div className="calculadora">
                <Display value={this.state.displayValue} />
                <Button label='AC' triple click={this.clearMemory} /> 
                <Button label='/' operation click={this.setOperation}></Button>
                <Button label='7' click={this.addDigit}></Button>
                <Button label='8' click={this.addDigit}></Button>
                <Button label='9' click={this.addDigit}></Button>
                <Button label='*' operation click={this.setOperation}></Button>
                <Button label='4' click={this.addDigit}></Button>
                <Button label='5' click={this.addDigit}></Button>
                <Button label='6' click={this.addDigit}></Button>
                <Button label='-' operation click={this.setOperation}></Button>
                <Button label='1' click={this.addDigit}></Button>
                <Button label='2' click={this.addDigit}></Button>
                <Button label='3' click={this.addDigit}></Button>
                <Button label='+' operation click={this.setOperation}></Button>
                <Button label='0' double click={this.addDigit}></Button>
                <Button label='.' click={this.addDigit}></Button>
                <Button label='=' operation click={this.setOperation}></Button>
            </div>
        )
    }

}