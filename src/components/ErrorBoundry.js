import React, { Component } from 'react';


// cu ErrorBoundry daca apare orice eroare o va afisa pe display
// ErrorBoundry este bun cind aplicatia este in productie, aceasta eroare apare la clienti
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {      // cream property
            hasError: false
        }
    }

    componentDidCatch(error, info) {        // prinde block javascript daca apare eroare
        this.setState({ hasError: true })   // daca este eroare atunci render h1 Oooops
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. Seems to be an error.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;
