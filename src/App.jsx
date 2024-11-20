import React, { useState } from 'react';
import VehicleTable from './VehicleTable';
import VehicleGraph from './VehicleGraph';
import AddVehicleDialog from './AddVehicleDialog';
import './App.css';

const vehicleTypes = ['Car', 'Truck', 'Bike'];
const fuelTypes = ['Petrol', 'Diesel', 'Electric'];

function App() {
  const [open, setOpen] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    vehicleId: '',
    vehicleType: '',
    fuelType: '',
    fuelUsed: '',
    distanceTravelled: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({ ...newVehicle, [name]: value });
  };

  const handleAddVehicle = () => {
    setVehicles([...vehicles, newVehicle]);
    setNewVehicle({
      vehicleId: '',
      vehicleType: '',
      fuelType: '',
      fuelUsed: '',
      distanceTravelled: ''
    });
    setOpen(false);
  };

  const handleDeleteVehicle = (index) => {
    setVehicles(vehicles.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="header-right">
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" />
              <button className="search-button">🔍</button>
            </div>
            <div className="settings-icon">⚙️</div>
          </div>
        </header>

        <VehicleTable
          vehicles={vehicles}
          handleDeleteVehicle={handleDeleteVehicle}
          handleClickOpen={handleClickOpen}
        />

        <VehicleGraph vehicles={vehicles} />

        <AddVehicleDialog
          open={open}
          handleClose={handleClose}
          handleChange={handleChange}
          handleAddVehicle={handleAddVehicle}
          newVehicle={newVehicle}
          vehicleTypes={vehicleTypes}
          fuelTypes={fuelTypes}
        />
      </main>
    </div>
  );
};

export default App;
