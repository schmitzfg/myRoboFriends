import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './Robots';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({robots: users}));
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
       
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return !this.state.robots.length ?        // daca este zero - false, > Loading
            <h1>Loading...</h1> :
                (                             // daca este true se executa asta
                <div className='app'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
// cu ErrorBoundry daca apare orice eroare o va afisa pe display
// ErrorBoundry este bun cind aplicatia este in productie, aceasta eroare apare la clienti
export default App;