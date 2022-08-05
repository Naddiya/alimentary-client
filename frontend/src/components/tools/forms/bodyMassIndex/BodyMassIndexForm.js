import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateBmi,
  updateHeight,
  updateWeight,
  clearBmiForm,
} from "../../../../redux/bmiSlice";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Card,
  Paper,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

const BodyMassIndexForm = () => {
  const { bmi, height, weight } = useSelector((state) => state.bmi);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBmi());
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearBmiForm());
  };

  return (
    <>
      <h2>Calculer l'indice de masse corporelle</h2>
      <Card className="tools-bmi" component="form" onSubmit={handleSubmit}>
        <FormControl variant="outlined">
          <InputLabel>Taille</InputLabel>
          <OutlinedInput
            type="number"
            id="height"
            name="height"
            value={height}
            label="Taille"
            onChange={(e) => dispatch(updateHeight(e.target.value))}
            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
            inputProps={{
              "aria-label": "Taille",
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel aria-labelledby="Poids">Poids</InputLabel>
          <OutlinedInput
            type="number"
            id="weight"
            name="weight"
            value={weight}
            label="Poids"
            onChange={(e) => dispatch(updateWeight(e.target.value))}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            inputProps={{
              "aria-label": "Poids",
            }}
          />
        </FormControl>
        <Paper className="tools-bmi-result">Resultat {bmi}</Paper>
        <Box className="tools-bmi-action">
          <Button
            id="tools-bmi-action-calculate"
            variant="outlined"
            color="success"
            type="submit"
          >
            Calcul du BMI
          </Button>
          <Button
            id="tools-bmi-action-clear"
            variant="outlined"
            color="warning"
            className="button-clear"
            onClick={handleClear}
          >
            Initialiser
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default BodyMassIndexForm;
