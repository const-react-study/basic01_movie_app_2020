import React, { Component } from 'react';

class App05_2 extends Component {
    state = {
        isLoading : true,
        movies : []
    };
    componentDidMount(){
        // 영화 데이터 로딩
        setTimeout(()=>{
            this.setState(current =>({isLoading:false}));
        }, 6000)

    }
    render() {
        const { isLoading } = this.state;

        return (
            <div>
                {isLoading ? 'Loading...' : 'We are ready'}
            </div>
        );
    }
}

export default App05_2;
