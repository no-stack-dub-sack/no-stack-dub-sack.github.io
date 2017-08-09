import React from 'react';
import styled from 'styled-components';
import Validator from 'validator';
import { isEmpty } from 'lodash';
import axios from 'axios';
import {
  Buttons as SmallerButtons,
  Link as InlineLink,
  IconWrap as iconWrap,
} from './Home';

const Container = styled.div`
  background: url(/images/backgrounds/mailbox.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`;

const Column = styled.div`
  height: 100vh;
  width: 49vw;
  display: inline-block;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    width: 100vw;
    height: 100vh;
    &.right {
      display: none;
    }
  }
`;

const LeftColumn = Column.extend`
  float: left;
`;

const RightColumn = Column.extend`
  float: right;
`;

const SmallButtonContainer = styled.div`
  display: none;
  margin-top: 40px;
  @media (max-width: 750px) {
    display: block;
  }
`;

const ButtonContainer = styled.div`
  width: 200px;
`;

const Link = InlineLink.extend`
  display: inline-block;
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
    transform: scale(1.4);
    box-shadow: 5px 5px 60px 1px black;
  }
`;

const Form = styled.form`
  width: 60%;
  z-index: 1;
  input,
  textarea,
  button {
    box-shadow: 5px 5px 60px 1px black !important;
  }
`;

const Error = styled.div`
  margin-top: 5px !important;
  background: transparent !important;
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
    return (
      <Container id="contact">
        <LeftColumn className="left">
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
              <textarea onChange={this.handleChange} name="message" rows="5" placeholder="Say some cool stuff here..."></textarea>
            </div>
            <button onClick={this.handleSubmit} className="ui button">Submit!</button>

          { typeof this.state.submitted === 'boolean' &&
            <label className={`ui ${this.state.submitted ? 'green' : 'red'} basic label`}>
              {this.state.submitMessage}
            </label> }
          </Form>
          <SmallButtonContainer>
            <SmallerButtons />
          </SmallButtonContainer>
        </LeftColumn>

        <RightColumn className="right">
          <ButtonContainer>
            <Button label="LinkedIn" href="https://www.linkedin.com/in/peter-weinberg-b7911a9b" icon="linkedin" />
            <Button label="GitHub" href="https://github.com/no-stack-dub-sack" icon="github" />
            <Button label="freeCodeCamp" href="https://www.freecodecamp.com/no-stack-dub-sack" icon="free-code-camp" />
            <Button label="CodePen" href="https://codepen.io/collection/DoMvpy/" icon="codepen" />
          </ButtonContainer>
        </RightColumn>

      </Container>
    );
  }
}

export default ContactMe;
