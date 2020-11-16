import React from 'react';

class Signup extends React.Component {
	state = {
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		const { username, email, password, confirmPassword } = this.state;
		return (
			<div className='container'>
				<div className='row'>
					<h2>Signup</h2>
					<form className='form row'>
						<div className='row'>
							<input
								type='text'
								name='username'
								placeholder='username'
								onChange={this.handleChange}
								value={username}
							/>
						</div>
						<div className='row'>
							<input
								type='email'
								name='email'
								placeholder='email'
								onChange={this.handleChange}
								value={email}
							/>
						</div>
						<div className='row'>
							<input
								type='password'
								name='password'
								placeholder='password'
								onChange={this.handleChange}
								value={password}
							/>
						</div>
						<div className='row'>
							<input
								type='password'
								name='confirmPassword'
								placeholder='confirm password'
								onChange={this.handleChange}
								value={confirmPassword}
							/>
						</div>

						<button type='submit' className='button-primary'>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Signup;
