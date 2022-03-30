import React, {Component} from 'react';
import NewsList from './components/newslist';

class App extends Component {
    render() {
        return (
            <NewsList newsList={this.state.newsList} />
        )
    }

    state = {
        newsList: []
    };

    componentDidMount() {
        fetch('https://hvpjaqxe10.execute-api.us-east-1.amazonaws.com/Prod/hello')
            .then(res => res.json())
            .then((data) => {
                this.setState({ newsList: data })
            })
            .catch(console.log)
    }
}

export default App;
