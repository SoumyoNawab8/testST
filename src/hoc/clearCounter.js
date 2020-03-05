import React, { Component} from 'react';

const clearCounter=(WrappedComponent)=>{
     class HOC extends Component {
       
        componentWillUnmount(){
            this.componentRef.clear();
        }

        render() {
           
            return <><WrappedComponent  ref="componentRef" onMount={(ref) => this.componentRef=ref} clear={()=>this.clear()} /></>;   
        }
    }

    return HOC;
}

export default clearCounter;