import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export default function Pet() {
	const { id } = useParams();
	let pet;
	axios
		.get(`http://localhost:3001/api/pets/${id}`)
		.then((response) => {
			//console.log(response.data);
			pet = response.data;
		})
		.then((obj) => {
			pet = obj;
		});
	//fetch with pet id as param
	// const { patients } = this.props;
	// let thisPet = patients.find((each) => {
	// 	return each.id === id;
	// });
	//console.log(thisPet);
	//const { name, breed } = pet;
	console.log("after fech", pet);
	return (
		<div>
			<h2>{pet.name}</h2>
			<h4>{pet.breed}</h4>
			<h5>{id}</h5>
		</div>
	);
}
