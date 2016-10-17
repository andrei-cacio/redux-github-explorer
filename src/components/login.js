import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { ENTER_KEY } from '../modules/core/constants';
import injectTapEventPlugin from 'react-tap-event-plugin';

const style = {
  paper: {
    height: 320,
    width: 314,
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    top: '20%'
  },
  button: {
    margin: 12,
    display: 'block'
  },
  logo: {
    display: 'block',
    margin: '0 auto'
  }
};

export default class Login extends Component {
  login() {
    console.log('enter pushed');
  }
  handleKeyPress(e) {
    if (e.charCode === ENTER_KEY) {
      this.login();
    }
  }
  componentDidMount() {
    injectTapEventPlugin();
  }
  render() {
    const { isLoading, authFailedReason } = this.props;
    return (
      <Paper style={style.paper}>
        <img style={style.logo} width="200" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
        <TextField onKeyPress={this.handleKeyPress.bind(this)} ref={(i) => this.usernameInput = i} hintText="Username" />
        {
          isLoading ? <CircularProgress /> :
            <RaisedButton onMouseUp={this.login.bind(this)}
                          label="Login"
                          style={style.button}
            />
        }
        {
          authFailedReason ? <ErrorText message={authFailedReason} /> : ''
        }
      </Paper>
    );
  }
}