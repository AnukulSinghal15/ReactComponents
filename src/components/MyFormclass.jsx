import React, { Component } from 'react'
import MyNavbar from './MyNavbar'
import './cssFiles/MyForm.css'


export default class MyFormclass extends Component {
    constructor(props) {
         super(props);
        this.state = {
            username: '',
            age: "",
            checked: false,
            displayDetails: false
          }
        this.onInputchangeHandler = this.onInputchange.bind(this);
        this.handleCheckBoxHandler = this.handleCheckBox.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
      }

      //triggered once after the component is rendered for the first time
      componentDidMount(){
        console.log("Component has loaded.")
      }

      //triggered on every change/re-render
      componentDidUpdate(){
        console.log("component re-rendered")
      }

      //triggered before every re-render. Component is first unmounted before being re-rendered.
      componentWillUnmount(){
        console.log("Component has unmounted before re-render")
      }

      onInputchange(event) {
        this.setState({ [event.target.name]: event.target.value })
      }

      handleCheckBox(event){
        this.setState({checked:[event.target.checked]})
    }

      onSubmitForm(event) {
        event.preventDefault()
        if(!this.state.checked){
            alert("Please accept terms and conditions!")
        }else{
            alert(this.state.username);
            this.setState({
                displayDetails:true
            })
        }
      }
      
  render() {
    return (
      <div>
        <MyNavbar/>
        <div className='container'>
            <h2 className="Signup-title" tabIndex="0" aria-label="Sign Up form">{this.props.title}</h2>
            <form className="form-wrapper" onSubmit={this.onSubmitForm}>
                <fieldset>
                    <legend>User Details</legend>
                    <div className="form-group">
                        <label id="username_label" htmlFor="username" className="form-group-label">Enter Name: </label>
                        <input 
                            type="text" 
                            className="form-group-input" 
                            name="username"
                            //value={this.state.username}
                            onChange={this.onInputchangeHandler}
                            placeholder="Your name here"
                            aria-labelledby="username_label"
                            // required 
                            aria-required="true" />
                    </div>
                    <div className="form-group">
                        <label id="age_label" className="form-group-label">Enter Age: </label>
                        <input 
                            type="number"
                            name="age"
                            //value={this.state.age}
                            onChange={this.onInputchangeHandler}
                            placeholder="Your age here"
                            aria-labelledby="age_label"
                            // required 
                            aria-required="true" />
                    </div>
                    <div className="form-group">
                        <div id="checkBox_desc" hidden>Please read our terms and conditions carefully before accepting!</div>
                        <label id="checkbox_label" className="form-group-label">Accept Terms and conditions?: </label>
                        <input 
                            type="checkbox"
                            name="terms"
                           // value={this.state.checked}
                            onChange={this.handleCheckBoxHandler}
                            aria-describedby="checkBox_desc"
                            aria-labelledby="checkbox_label" />
                    </div>
                    

                </fieldset>
                

                <input aria-label="Submit my details" className="form-submit" type="submit"></input>
                <input disabled aria-disabled="true" tabIndex="-1" className="form-submit-disabled" type="submit"></input>
            </form> 

            {this.state.displayDetails &&
                <div id="details"><span>Username: {this.state.username} age:{this.state.age}</span></div>
            } 
        </div>
      </div>
    )
  }
}
