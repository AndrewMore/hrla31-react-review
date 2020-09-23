import React from 'react';
// var App = (props) => {
//   return <div>{props.firstName + props.lastName}</div>
// }
class App extends React.Component {
  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log('App:', this.state))
  }
  render(){
    return (
      <div>{props.firstName + props.lastName}</div>
    )
  }
}

export default App;