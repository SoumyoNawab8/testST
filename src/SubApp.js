import React, { Component } from 'react';

class SubApp extends Component {
    constructor(props){
        super(props);
        this.state={
            val:123
        };
    }
    componentDidMount(){
        var self = this;
        var num=self.state.val;
        setInterval(()=>{
            self.setState({val:num++});
        },100);
    }
    render() {
        return (
            <div>
                {this.state.val}
            </div>
        );
    }
}

export default SubApp;