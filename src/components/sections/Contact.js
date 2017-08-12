import React from 'react';
import styled from 'styled-components';
import Validator from 'validator';
import { isEmpty } from 'lodash';
import { Popup as popUp } from 'semantic-ui-react';
import axios from 'axios';
import {
  Link as InlineLink,
  IconWrap as iconWrap,
} from './Home';

const Container = styled.div`
  background: url(http://res.cloudinary.com/dmvcjmjkn/image/upload/q_auto/v1502320461/mailbox_fybcfr.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const ButtonContainer = styled.div`
  @media (max-width: 1090px) {
    width: 290px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
  }
`;

const Link = InlineLink.extend`
  display: inline-block;
  margin: 6px;
  width: auto;
  @media (max-width: 1090px) {
    display: table;
  }
`;

const IconWrap = iconWrap.extend`
  width: auto;
  height: auto;
  justify-content: space-around;
  text-shadow: 2px 2px 10px black;
  box-shadow: 1px 1px 30px 1px black;
  span {
    margin: 10px;
    font-family: Montserrat;
    font-size: 22px;
    font-weight: bold;
  }
  i {
    margin: 10px;
  }
  &:hover {
    transform: scale(1.3);
    box-shadow: 5px 5px 60px 1px black;
  }
`;

const Form = styled.form`
  margin: 15px;
  label {
    font-family: monospace !important;
  }
`;

const Error = styled.div`
  margin-top: 5px !important;
  background: transparent !important;
`;

const PopupTrigger = IconWrap.extend`
  color: white;
  cursor: pointer;
  display: inline-block;
  margin: 6px;
  &:hover {
    transform: none;
  }
  @media (max-width: 1090px) {
    width: 150px;
  }
  &:hover div {
    opacity: 1;
    left: 133px;
  }
  @media (max-width: 1090px) {
    &:hover div {
      left: 147px;
    }
  }
  @media (max-width: 750px) {
    &:hover div {
      left: 50%;
    }
  }
`;

const Popup = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  box-shadow: 5px 5px 20px 1px black;
  cursor: default;
  left: 1000px;
  opacity: 0.01;
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  transition: all 500ms;
  width: 500px;
  @media (max-width: 1090px) {
    width: 350px;
  }
  @media (max-width: 750px) {
    width: 300px;
    transform: translate(-30%, -50%);
  }
`;

const Button = ({ href, icon, label }) => (
  <Link href={href} rel="noopener noreferrer" target="_blank">
    <IconWrap>
      <i className={`fa fa-${icon} fa-2x`} aria-hidden="true" />
      <span>{label}</span>
    </IconWrap>
  </Link>
);

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
          submitMessage: 'Thanks! I\'ll get back to you as soon as I can.',
          name: '',
          email: '',
          _subject: '',
          message: ''
        });
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

    if (this.state.name === '') {
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
    const form = (
      <Form className="ui inverted form">
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
          <textarea
            onChange={this.handleChange}
            name="message"
            rows="5"
            placeholder="Say some cool stuff here..."
          />
        </div>
        <button onClick={this.handleSubmit} className="ui button">Submit!</button>
      { typeof this.state.submitted === 'boolean' &&
        <label className={`ui ${this.state.submitted ? 'green' : 'red'} basic label`}>
          {this.state.submitMessage}
        </label> }
      </Form>
    );
    return (
      <Container id="contact">
        <ButtonContainer>
          <Button label="LinkedIn" href="https://www.linkedin.com/in/peter-weinberg-b7911a9b" icon="linkedin" />
          <Button label="GitHub" href="https://github.com/no-stack-dub-sack" icon="github" />
          <PopupTrigger>
            <i className="fa fa-envelope fa-2x" />
            <span>Email</span>
            <Popup>
              { form }
            </Popup>
          </PopupTrigger>
          <Button label="CodePen" href="https://codepen.io/collection/DoMvpy/" icon="codepen" />
          <Button label="freeCodeCamp" href="https://www.freecodecamp.com/no-stack-dub-sack" icon="free-code-camp" />
        </ButtonContainer>
      </Container>
    );
  }
}

export default ContactMe;

// <Container id="contact">
//     <ButtonContainer>
//       <Button label="LinkedIn" href="https://www.linkedin.com/in/peter-weinberg-b7911a9b" icon="linkedin" />
//       <Button label="GitHub" href="https://github.com/no-stack-dub-sack" icon="github" />
//       <Button label="freeCodeCamp" href="https://www.freecodecamp.com/no-stack-dub-sack" icon="free-code-camp" />
//       <Button label="CodePen" href="https://codepen.io/collection/DoMvpy/" icon="codepen" />
//       <Popup
//         basic
//         content={form}
//         flowing
//         hoverable
//         position="left center"
//         trigger={
//           <PopupTrigger>
//             <i className="fa fa-envelope fa-2x" />
//             <span>Email</span>
//           </PopupTrigger>}>
//       </Popup>
//     </ButtonContainer>
// </Container>
