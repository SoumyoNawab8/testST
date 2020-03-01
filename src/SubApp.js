import React, { Component } from 'react';

class SubApp extends Component {
    _isMounted=false;
    constructor(props){
        super(props);
        this.state={
            val:123
        };
    }
    componentDidMount(){
        var self = this;
        self._isMounted=true;
        var num=self.state.val;
        setInterval(()=>{
            if(self._isMounted===true)
                self.setState({val:num++});
        },100);
    }

    componentWillUnmount(){
        this._isMounted=false;
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