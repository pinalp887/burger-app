import React from 'react';
import "./Burger.scss";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

class Burger extends React.Component {

    state = {
        transformedIngredients: [],
        name: ""
    };

    componentDidMount () {
        // this.handleTransformIngredients();
    }

    handleTransformIngredients = () => {
        let transformedIngredients = Object.keys(this.props.ingredients).map((key,value) => {

            // console.log(this.props.ingredients[key] + "  " + key);

            return [...Array(this.props.ingredients[key])].map((_, i) => {
                // console.log(key+i);
                return <BurgerIngredient key={key + i} type={key} />
            });
        });
        
        console.log(typeof transformedIngredients);
        console.log(typeof this.state.transfromedIngredients);

        this.setState((state) => {
            return {transformedIngredients: transformedIngredients}
        });
    }

    render() {
        console.log(this.state.transformedIngredients);
        // console.log(this.state.name)
        // this.handleTransformIngredients();

        return (
            <>
                <>
                    <button onClick={this.handleTransformIngredients}>Click here</button>
                </>
                <div className="burger">
                    <BurgerIngredient key="1" type="bread-top" />
                    {this.state.transformedIngredients}
                    <BurgerIngredient key="2" type="bread-bottom" />
                </div>
            </>
        );
    }
}

export default Burger;