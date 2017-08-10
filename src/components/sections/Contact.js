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
  @media (max-width: 1090px) {
    display: inline-block;
  }
`;

const Form = styled.form`
  z-index: 1;
  margin: 10px;
`;

const Error = styled.div`
  margin-top: 5px !important;
  background: transparent !important;
`;

const FormTrigger = IconWrap.extend`
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
`;

const Popup = styled(popUp)`
  background: rgba(0, 0, 0, 0.6) !important;
  border: none !important;
  box-shadow: 5px 5px 20px 1px black !important;
  transition: all 500ms !important;
  width: 500px !important;
  @media (max-width: 650px) {
    width: 250px !important;
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

const FormField = ({ label, name, type, placeholder, errors, onChange, value }) => (
  <div className={`required field ${errors[name] ? 'error' : ''}`}>
    <label>{label}</label>
    <input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
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
    const form = (
      <Form className="ui inverted form">
        <FormField
          errors={errors}
          label="Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="Name"
          type="text"
        />
        <FormField
          errors={errors}
          label="Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          placeholder="Email"
          type="email"
        />
        <FormField
          errors={errors}
          label="Subject"
          name="_subject"
          onChange={this.handleChange}
          value={this.state._subject}
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
            value={this.state.message}
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
            <Button label="freeCodeCamp" href="https://www.freecodecamp.com/no-stack-dub-sack" icon="free-code-camp" />
            <Button label="CodePen" href="https://codepen.io/collection/DoMvpy/" icon="codepen" />
            <Popup
              basic
              content={form}
              flowing
              hoverable
              onMount={this.handlePopupClose}
              position="left center"
              trigger={
                <FormTrigger>
                  <i className="fa fa-envelope fa-2x" />
                  <span>Email</span>
                </FormTrigger>}>
            </Popup>
          </ButtonContainer>
      </Container>
    );
  }
}

export default ContactMe;


// <Container id="contact">
//   <LeftColumn className="left">
    // <Form className="ui inverted form">
    //   <FormField
    //     errors={errors}
    //     label="Name"
    //     name="name"
    //     onChange={this.handleChange}
    //     placeholder="Name"
    //     type="text"
    //   />
    //   <FormField
    //     errors={errors}
    //     label="Email"
    //     name="email"
    //     onChange={this.handleChange}
    //     placeholder="Email"
    //     type="email"
    //   />
    //   <FormField
    //     errors={errors}
    //     label="Subject"
    //     name="_subject"
    //     onChange={this.handleChange}
    //     placeholder="Name"
    //     type="text"
    //   />
    //   <div className="field">
    //     <label>Message</label>
    //     <textarea onChange={this.handleChange} name="message" rows="5" placeholder="Say some cool stuff here..."></textarea>
    //   </div>
    //   <button onClick={this.handleSubmit} className="ui button">Submit!</button>
    //
    // { typeof this.state.submitted === 'boolean' &&
    //   <label className={`ui ${this.state.submitted ? 'green' : 'red'} basic label`}>
    //     {this.state.submitMessage}
    //   </label> }
    // </Form>
//     <SmallButtonContainer>
//       <SmallerButtons />
//     </SmallButtonContainer>
//   </LeftColumn>
//
//   <RightColumn className="right">
//     <ButtonContainer>
//       <Button label="LinkedIn" href="https://www.linkedin.com/in/peter-weinberg-b7911a9b" icon="linkedin" />
//       <Button label="GitHub" href="https://github.com/no-stack-dub-sack" icon="github" />
//       <Button label="freeCodeCamp" href="https://www.freecodecamp.com/no-stack-dub-sack" icon="free-code-camp" />
//       <Button label="CodePen" href="https://codepen.io/collection/DoMvpy/" icon="codepen" />
//     </ButtonContainer>
//   </RightColumn>
//
// </Container>
