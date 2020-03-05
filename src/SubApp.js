import React, { Component } from 'react';
import clearCounter from './hoc/clearCounter'

class SubApp extends Component {
    _processingInterval="";
    constructor(props){
        super(props);
        this.state={
            val:123,
        };
    }
    componentDidMount(){
        this.props.onMount(this)
        var self = this;
        self._isMounted=true;
        var num=self.state.val;
        this._processingInterval=setInterval(()=>{
                console.log('counter running')
                self.setState({val:num++});
        },100);
    }

    clear(){
        clearInterval(this._processingInterval);
        console.log('Counter Stopped at '+this.state.val);
    }
    
    render() {

        return (
            <div ref={this.props.innerRef}>
                {this.state.val}
            </div>
        );
    }
}

export default clearCounter(SubApp);