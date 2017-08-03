import React from 'react';
import styled from 'styled-components';
import Validator from 'validator';
import { isEmpty } from 'lodash';
import axios from 'axios';

const Container = styled.div`
  background: url(/images/backgrounds/desk.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 500px;
`;

const Error = styled.div`
  margin-top: 5px !important;
  background: transparent !important;
`;

const FormField = ({ label, name, type, placeholder, errors, onChange }) => (
  <div className={`required field ${errors[name] ? 'error' : ''}`}>
    <label>{label}</label>
    <input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  { errors[name] && typeof errors[name] === 'string' &&
    <Error className="ui pointing red basic label">{errors[name]}</Error> }
  </div>
);

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      _subject: '',
      message: '',
      submitted: '',
      submitMessage: '',
      errors: {}
    }
  }

  handleChange = (e) => {
    const { errors } = this.state;
    delete errors[e.target.name];
    this.setState({ [e.target.name]: e.target.value, errors, submitted: '' });
  }

  handleSubmit = (e) => {
    let form = document.querySelector('form');
    e.preventDefault();
    if (this.isValid()) {
      axios.post('https://formspree.io/pweinberg633@gmail.com', {
        data: {
          name: this.state.name,
          email: this.state.email,
          _subject: this.state._subject,
          message: this.state.message
        }
      }).then(response => {
        console.log('form sucessfully submitted');
        this.setState({
          submitted: true,
          submitMessage: 'Thanks! I\'ll get back to you as soon as I can.'
        });
        form.reset();
      }).catch(err => {
        console.error('There was an error submitting this message: ' + err);
        this.setState({
          submitted: false,
          submitMessage: 'There was an error with this submission. Please try again.'
        });
      })
    };

  }

  isValid = () => {
    const { errors } = this.state;

    if (!Validator.isEmail(this.state.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (this.state._name === '') {
      errors.name = 'Please enter your name';
    }

    if (this.state.email === '') {
      errors.email = 'Please enter your email address so I can get back to you';
    }

    if (this.state._subject === '') {
      errors._subject = 'Don\'t leave me hanging! What\'s your message about?';
    }

    if (isEmpty(errors)) {
      return true;
    } else {
      this.setState({ errors });
      return false;
    }

  }

  render() {
    const { errors } = this.state;
    return (
      <Container>
        <Form className="ui form">
          <FormField
            errors={errors}
            label="Name"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            type="text"
          />
          <FormField
            errors={errors}
            label="Email"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            type="email"
          />
          <FormField
            errors={errors}
            label="Subject"
            name="_subject"
            onChange={this.handleChange}
            placeholder="Name"
            type="text"
          />
          <div className="field">
            <label>Message</label>
            <textarea onChange={this.handleChange} name="message" rows="5" placeholder="Say some cool stuff here..."></textarea>
          </div>
          <button onClick={this.handleSubmit} className="ui button">Submit!</button>

        { typeof this.state.submitted === 'boolean' &&
          <label className={`ui ${this.state.submitted ? 'green' : 'red'} basic label`}>
            {this.state.submitMessage}
          </label> }
        </Form>
      </Container>
    );
  }
}

export default ContactMe;
