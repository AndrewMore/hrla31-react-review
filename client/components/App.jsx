import React from 'react';
// var App = (props) => {
//   return <div>{props.firstName + props.lastName}</div>
// }
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName:'',
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    const { firstName, lastName } = this.props;
    return (
      <div>
        <div>{firstName} {lastName}</div>
        <form>
          <label>First Name
            <input type="text" name="firstName" onChange={this.onChangeHandler}/>
          </label>
          <label>Last Name
            <input type="text" name="lastName" onChange={this.onChangeHandler}/>
          </label>
        </form>
      </div>

    )
  }
}

export default App;