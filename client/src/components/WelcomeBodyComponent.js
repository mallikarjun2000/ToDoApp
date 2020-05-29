import React, { Component } from 'react';
import { WelcomeImage } from './Assets/welcome_image.jpg';
import './css/welcomebody.css';
import { Card, CardHeader,CardBody, Form, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

class WelcomeBody extends Component {

  constructor(props){
    super(props);

    this.state = {
      username:'',
      email:'',
      password:'',
      confirmPassword:'',
      message: null,
      disableBtn: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    //console.log(evt.target.name);
    this.setState({
      [evt.target.name] : evt.target.value
    });
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.setState({disableBtn: !this.state.disableBtn});
    const url = 'https://todolist-arjun.herokuapp.com/register'
    const data = {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }
    }
    axios.post(url,{
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    })
    .then((res)=>{
      alert(res.data.message);
      console.log(' res : ',res.data.message);
      this.setState({message: res.data.message});
      this.setState({disableBtn: !this.state.disableBtn});
    }).catch((err)=>{
      alert('Error Occured Refresh your Browser');
    })
  }

  render(){
      return (
        <div className="container d-flex flex-column welcome-div">
            <div className="container welcome-div-left m-20">
                <h2 className="h2">Todo List</h2>
                <p>Find your way of arranging tasks and schedules. Track all your time and productivity rate</p>
                <button className="btn wel-get-btn mt-5 ml-20">
                  <a className="text-light welcome-btn" href='#getstarted'>Get Started</a>
                </button>
            </div>
            <div className="container welcome-space-out d-flex">
              
            </div>
            <div className="container welcome-div-right d-flex justify-content-center row">
              <Card className="card m-2 bg-transparent border-success col-8 offset-4" id="getstarted">
                <CardHeader className="card-header">Register Here! Today</CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="row form-group">
                      <Label className="form-group-label col-12 col-md-3">Username</Label>
                      <input className="form-control border-success input col-12 col-md-9 bg-transparent"
                      placeholder="Username"
                      type="text"
                      value={this.state.username} 
                      name="username"
                      onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="row form-group">
                      <Label className="form-group-label col-12 col-md-3">Email</Label>
                      <input className="form-control border-success input col-12 col-md-9 bg-transparent"
                      placeholder="mail@example.com"
                      type="email"
                      value={this.state.email} 
                      name="email"
                      onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="row form-group">
                      <Label className="form-group-label col-12 col-md-3">Password</Label>
                      <input className="form-control border-success input col-12 col-md-9 bg-transparent"
                      placeholder="Password"
                      type="password"
                      value={this.state.password} 
                      name="password"
                      onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="row form-group">
                      <Label className="form-group-label col-12 col-md-3">Confirm Password</Label>
                      <input className="form-control border-success input col-12 col-md-9 bg-transparent"
                      placeholder="Confirm Password"
                      type="password"
                      value={this.state.confirmPassword} 
                      name="confirmPassword"
                      onChange={this.handleChange}/>
                    </FormGroup>
                    <button className="btn btn-success" disabled={this.state.disableBtn} type="submit">Submit</button>
                  </Form>
                </CardBody>
                <text>{this.state.message}</text>
              </Card>
            </div>
        </div>
      );
  }
}

export default WelcomeBody;