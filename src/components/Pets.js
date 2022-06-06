import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Pets extends React.Component {
	constructor() {
		super();
		this.state = {
			petList: [],
		};
	}

	componentDidMount() {
		axios.get("http://localhost:3001/api/pets").then((result) => {
			this.setState({ petList: result.data });
		});
	}

	render() {
		const spinner = (
			<div className="list spinner">
				<div className="loading" />
			</div>
		);

		const petList = (
			<>
				<header>Pet List</header>
				<div className="list">
					{this.state.petList.map(({ id, name, breed }) => {
						return (
							<div key={id} className="item">
								<Link to={`/pets/${id}`}>
									<h3>{name}</h3>
								</Link>
								<h5>{breed}</h5>
								<button onClick={() => this.props.add_patient({ id, name, breed })}>
									Add Patient
								</button>
							</div>
						);
					})}
				</div>
			</>
		);

		return this.state.petList.length > 0 ? petList : spinner;
	}
}

export default Pets;
