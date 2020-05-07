import React, { Component } from 'react'
import { render } from 'react-dom'
import './main.scss'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    state = {

    }

    testconsolePrint = () => {
        console.log("this is from method")
    }

    componentDidMount() {
        this.testconsolePrint();
    }

    componentDidUpdate() {
        console.log("in component did update")
    }

    render() {
        return (
            <Layout>
                <div>Hello There..</div>
                <BurgerBuilder />
            </Layout>
        )
    }

}

render(<App />, document.getElementById("root"));