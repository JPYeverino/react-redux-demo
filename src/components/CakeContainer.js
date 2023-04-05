import React from 'react';

function CakeContainer() {
    return (
        <>
            <h2>Number of cakes</h2>
            <button>Buy Cake</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.numberOfCakes
    }
};

export default CakeContainer;