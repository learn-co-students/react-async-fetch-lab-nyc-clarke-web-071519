// create your App component here
import React, {Component} from 'react'

class App extends Component {
    state = {
        "people": [],
        "name": ' ',
        "craft": " "

    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(peopleData => {
                this.setState({
                    people: peopleData.people
                })
            })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default App