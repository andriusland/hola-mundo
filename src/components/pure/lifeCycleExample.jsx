/**
 * Ejemplo de componente de tipo clase que dispon de los 
 * métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor -> Componente instanciado.')

    }

    componentWillMount() {
        console.log('componentWillMount  -> Antes del montaje del componente.')
    }

    componentDidMount() {
        console.log('componentDidMount  -> Justo antes del montaje del componente.')
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps  -> Si va a recibir props.')

    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Sirve para controlar si el componente debe o no actualizarse
         * return true/false
         */
        

    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate  -> Justo antes de actulizarse.')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate  -> Justo después de actulizarse.')

    }

    componentWillUnmount() {
        console.log('componentWillUnmount  -> Justo antes de desaparecer.')

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifeCycleExample.propTypes = {

};

export default LifeCycleExample;

