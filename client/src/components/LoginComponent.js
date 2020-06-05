import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

    constructor(porps){
        super(porps);

        this.state = {
            email:'',
            password:'',
            disableBtn : false
        }
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(evt){
        //console.log(evt.target.name);
        this.setState({
          [evt.target.name] : evt.target.value
        });
      }

      handleLogin(e)
      {
          e.preventDefault();
          this.props.loginUser({email: this.state.email, password: this.state.password});
      }
  render(){
      return (
        <div className="container d-flex justify-content-center">
            <Card className="col-6 mt-10">
                <CardHeader className="card-header">
                    <h3>
                    Todo Login
                    </h3>
                </CardHeader>
                <CardBody>
                    <Form className="form" onSubmit={this.handleLogin}>
                        <FormGroup className="form-group row">
                            <Label className="form-group-label col-md-3 col-12">Email</Label>
                            <input className="form-control col-12 col-md-9"
                            placeholder="mail@example.com"
                            type="email"
                            value={this.state.email} 
                            name="email"
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Label className="form-group-label col-md-3 col-12">Password</Label>
                            <input className="form-control col-12 col-md-9"
                            placeholder="Password"
                            type="password"
                            value={this.state.password} 
                            name="password"
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                    
                        <button type="submit"  className="btn btn-success">Login</button>
                
                    </Form>
                </CardBody>
            </Card>
        </div>
      );
  }
}

export default Login;