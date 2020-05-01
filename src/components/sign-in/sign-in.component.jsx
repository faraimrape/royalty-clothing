import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  //Handle submit method
  handleSubmit = (event) => {
    event.preventDefault();
  };

  //handle input change method for both email and password
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            required
            handleChange={this.handleChange}
          />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
