import React from 'react';
import { buyIcecream } from '../redux';
import { connect } from 'react-redux';

const IcecreamContainer = (props) => {
    return (
        <>
            <h2>Number of icecreams - {props.numberOfIcecreams}</h2>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        numberOfIcecreams: state.icecream.numberOfIcecreams
    }
}

function mapDispatchToProps(dispatch) {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);