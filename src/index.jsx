import React, { Component } from 'react'
import { render } from 'react-dom'
import './main.scss'
import { GlobalContextProvider, GlobalContext } from './context/GlobalContext'

class App extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    state = {
        persons: [
            { id: 1, name: 'Pinal Sheradiya', age: 23 },
            { id: 2, name: 'Chhagan Sheradiya', age: 24 }
        ],
        showPersons: false
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

    switchNameHandler = () => {
        let newPersons = [
            { name: 'Pinal Patel', age: 27 },
            { name: 'Saloni Sheradiya', age: 24 }
        ];
        this.setState({
            persons: newPersons
        })
    }

    render() {
        return (
            <>
                <div className='header'>

                    <button className='button' onClick={this.testconsolePrint}>Click Here !!</button>
                </div>
                {this.state.showPersons ? (
                    <GlobalContext.Consumer>
                        {globalContext => (
                            <>
                                {/* <Persons
                                    context={globalContext}
                                    persons={this.state.persons}
                                    click={this.deletePersonHandler}
                                    changed={this.nameChangeHandler}
                                /> */}
                            </>
                        )}
                    </GlobalContext.Consumer>
                ) : ''}
                <div> This is example.</div>
            </>
        )
    }

}

render(<GlobalContextProvider><App /></GlobalContextProvider>, document.getElementById("root"));