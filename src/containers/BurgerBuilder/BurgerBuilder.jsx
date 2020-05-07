import React from 'react'
import Auxs from '../../hoc/Auxs'
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render() {
        return (
            <Auxs>
                <div>Burger</div>
                <div><Burger ingredients={this.state.ingredients} /></div>
                <div>Build Controls</div>
            </Auxs>
        );
    }
}

export default BurgerBuilder;