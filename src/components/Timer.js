import React,{ Component } from 'react'

class Timer extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            time : 0,
        };
    }
  componentDidMount(){
    this.timerId=setInterval(() => {
       this.setState(prevState => ({
        time:prevState.time +1,
       })); 
    },1000);
  }

  render(){
    return(
  <div>

    <h2>Timer</h2>
    <p>Time: {this.state.time}</p> 
   </div>
    );
    }
  


}
export default Timer