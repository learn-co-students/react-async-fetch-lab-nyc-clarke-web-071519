// create your App component here
import React from 'react'

class App extends React.Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resource => resource.json())
        .then(data => console.log(data))
    }

    render() {
        return 'hi'
    }
}

export default App; 