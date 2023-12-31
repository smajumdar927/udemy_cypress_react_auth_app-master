import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFailed: false,
            fields: {
                username: '',
                password: ''
            }
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputChange(event) {
        const fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props
            .login(this.state.fields.username, this.state.fields.password)
            .catch((err) => {
                console.log(err);
                this.loginFailed();
            });
    }

    loginFailed() {
        this.setState({
            loginFailed: true,
            fields: {
                username: '',
                password: ''
            }
        });
    }

    render() {
        return (
            <div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    Username:
                    <br />
                    <input
                        data-cy="email-field"
                        className="login-input"
                        onChange={this.onInputChange}
                        placeholder="Enter username"
                        name="username"
                        value={this.state.fields.username}
                        type="text"
                    />
                    Password:
                    <br />
                    <input
                        data-cy="password-field"
                        className="login-input"
                        onChange={this.onInputChange}
                        placeholder="Enter password"
                        name="password"
                        value={this.state.fields.password}
                        type="password"
                    />
                    <input
                        data-cy="login-button"
                        className="login-button"
                        type="submit"
                        value="Login"
                        
                    />
                </form>

                {this.state.loginFailed && (
                    <h3>Username or password incorrect.</h3>
                )}

                <h4>Sample Users</h4>
                <ul>
                    <li>User: user/user</li>
                    <li>Admin: admin/admin</li>
                </ul>
            </div>
        );
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginForm;
