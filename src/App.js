// create your App component here
import React, { Component } from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    peopleInSpace: json.people
                })
            })
    }

    render() {
        return (
            this.state.peopleInSpace.map((person,idx) => {
                return <div key={idx}>{person.name}</div>
            })
        )
    }
}

export default App