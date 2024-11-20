import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const VehicleTable = ({ vehicles, handleDeleteVehicle, handleClickOpen }) => {
  return (
    <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Vehicle ID</TableCell>
            <TableCell>Vehicle Type</TableCell>
            <TableCell>Fuel Type</TableCell>
            <TableCell>Fuel Used</TableCell>
            <TableCell>Distance Travelled</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={6} align="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
              >
                Add Item
              </Button>
            </TableCell>
          </TableRow>
          {vehicles.map((vehicle, index) => (
            <TableRow key={index}>
              <TableCell>{vehicle.vehicleId}</TableCell>
              <TableCell>{vehicle.vehicleType}</TableCell>
              <TableCell>{vehicle.fuelType}</TableCell>
              <TableCell>{vehicle.fuelUsed}</TableCell>
              <TableCell>{vehicle.distanceTravelled}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleDeleteVehicle(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VehicleTable;
