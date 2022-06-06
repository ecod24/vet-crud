import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Patients from './components/Patients';
import Pets from './components/Pets';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myPatients: [],
    };
  }

  addPatient = (newPatient) => {
    let updatedPatients = [...this.state.myPatients, newPatient];
    this.setState({ myPatients: updatedPatients });
  };

  render() {
    return (
      <div className="App">
        <div className="nav">
          <Link to="/">Patients</Link>
          <Link to="/pets">Pets</Link>
        </div>
        <Routes>
          <Route path="/" element={<Patients patient_list={this.state.myPatients} />} />
          <Route path="/pets" element={<Pets add_patient={this.addPatient} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
