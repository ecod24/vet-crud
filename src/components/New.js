import axios from "axios";
import React from "react";

class New extends React.Component {
	constructor() {
		super();
		this.state = {
			nameski: "",
			breedteezy: "",
		};
	}
	handleInput = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	handleSubmit = () => {
		//event.preventDefault();
		//make new object or sumn
		axios
			.post("https://localhost:3001/api/pets", {
				name: this.state.nameski,
				breed: this.state.breedteezy,
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => console.log(error));
	};
	render() {
		return (
			<div>
				<>
					<label>
						New pet name
						<input type="text" name="nameski" onChange={this.handleInput} />
					</label>
					<label>
						New pet Breed:
						<input type="text" name="breedteezy" onChange={this.handleInput} />
					</label>
					<button onClick={this.handleSubmit}>Save new pet</button>
				</>
			</div>
		);
	}
}

export default New;
