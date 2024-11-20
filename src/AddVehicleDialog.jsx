import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem
} from '@mui/material';

const AddVehicleDialog = ({
  open,
  handleClose,
  handleChange,
  handleAddVehicle,
  newVehicle,
  vehicleTypes,
  fuelTypes
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Vehicle</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Vehicle ID"
          name="vehicleId"
          value={newVehicle.vehicleId}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          select
          margin="dense"
          label="Vehicle Type"
          name="vehicleType"
          value={newVehicle.vehicleType}
          onChange={handleChange}
          fullWidth
        >
          {vehicleTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          margin="dense"
          label="Fuel Type"
          name="fuelType"
          value={newVehicle.fuelType}
          onChange={handleChange}
          fullWidth
        >
          {fuelTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="dense"
          label="Fuel Used"
          name="fuelUsed"
          value={newVehicle.fuelUsed}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Distance Travelled"
          name="distanceTravelled"
          value={newVehicle.distanceTravelled}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddVehicle} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddVehicleDialog;
