import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';

class App extends Component {
	render() {
		return (
			<Container>
				<div style={{backgroundColor: "#ddd", borderRadius: "5px", marginBottom: "1rem", padding: "0.5rem"}}>hello world</div>
			</Container>
		);
	}
}

export default App;
