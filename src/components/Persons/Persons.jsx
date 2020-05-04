import React from 'react'
import Person from './Person/Person'

class Persons extends React.Component {
    render() {
        console.log(this.props.context.state)
        return (this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    click={() => this.props.click(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                />)
        }));
    }
}

export default Persons;