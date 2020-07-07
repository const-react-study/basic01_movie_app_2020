import React from 'react';

class App extends React.Component {
    state = {
        count: 0
    };
    constructor(props) {
        super(props);
        console.log("hello");
    }
    componentDidMount(){
        console.log("world!");
    }
    componentDidUpdate(){
        console.log("Update!!!!!");
    }
    add = () => {
        this.setState(current => ({
            count: current.count + 1
        }));
    }
    minus = () => {
        this.setState(current => ({
            count: current.count -1
        }));
    }

    render() {
        console.log("react");
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;