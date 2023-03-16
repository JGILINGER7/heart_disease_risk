import React, { useState } from "react"
import { Grid, TextField, FormControlLabel, Button, RadioGroup, Radio, Typography } from "@material-ui/core"
import { Container, Paper } from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core"

const HeartDiseaseRiskForm = () => {
  const navigate = useNavigate();
  const defaultFormValues = {
    age: "",
    gender: "",
    BMI: "",
    ap_hi: "",
    ap_lo: "",
    cholesterol: "",
    gluc: "",
    smoke: "",
    alco: "",
    active: ""
  }

  const [formValues, setFormValues] = useState(defaultFormValues)
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState("You have not submitted data so you really shouldn't be seeing this")


  const handleClose = () => {
    setOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:5000/predict_api",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        },
        method: "POST",
        body: JSON.stringify(formValues)
      })
      .then((res) => res.json())
      .then((data) => setResults(data.results))
      .then(() => setOpen(true))
      .catch((res) => console.log(res))
  }

  const routeChange = () => {
    let path = `/BehindTheScenes`
    navigate(path)
  }

  return (
    <Container maxWidth="md" disableGutters={false} className="App">
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {"Heart Risk Results"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {results}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
      <Paper>
        <form onSubmit={handleSubmit} style={{ "padding-left": "50px", "padding-right": "50px" }}>
          <Typography variant="h4">Heart Disease Risk</Typography>
          <Grid container alignItems="baseline" justifyContent="left" direction="column" spacing={1}>
            <Grid item justifyContent="flex-start">
              <TextField id="age" name="age" label="Age" type="number" value={formValues.age} onChange={handleInputChange} required={true} />
            </Grid>
            <Grid item justifyContent="flex-start">
              <TextField id="BMI" name="BMI" label="BMI" type="number" value={formValues.BMI} onChange={handleInputChange} required={true} />
            </Grid>
            <Grid item>
              <TextField id="ap_hi" name="ap_hi" label="Systolic Blood Pressure" type="number" value={formValues.ap_hi} onChange={handleInputChange} required={true} />
            </Grid>
            <Grid item>
              <TextField id="ap_lo" name="ap_lo" label="Diostolic Blood Pressure" type="number" value={formValues.ap_lo} onChange={handleInputChange} required={true} />
            </Grid>
            <Grid container alignItems="center" spacing={1} direction="row" >
              <Grid item xs={4} >
                <Typography align="left">Man or woman?</Typography>
              </Grid>
              <Grid item xs={8} justifyContent="flex-end">
                <RadioGroup name="gender" value={formValues.gender} onChange={handleInputChange} row>
                  <FormControlLabel key="Man" value="2" control={<Radio size="small" required={true} />} label="Man" />
                  <FormControlLabel key="Woman" value="1" control={<Radio size="small" />} label="Woman" />
                </RadioGroup>
              </Grid>
              <Grid item xs={4}>
                <Typography align="left">How is your cholesterol level?</Typography>
              </Grid>
              <Grid item xs={8} >
                <RadioGroup name="cholesterol" value={formValues.cholesterol} onChange={handleInputChange} row>
                  <FormControlLabel key="Normal" value="1" control={<Radio size="small" required={true} />} label="Normal" />
                  <FormControlLabel key="Above normal" value="2" control={<Radio size="small" />} label="Above normal" />
                  <FormControlLabel key="Well above normal" value="3" control={<Radio size="small" />} label="Well above normal" />
                </RadioGroup>
              </Grid>
              <Grid item xs={4}>
                <Typography align="left">How is your glucose level?</Typography>
              </Grid>
              <Grid item xs={8}>
                <RadioGroup name="gluc" value={formValues.gluc} onChange={handleInputChange} row>
                  <FormControlLabel key="Normal" value="1" control={<Radio size="small" required={true} />} label="Normal" />
                  <FormControlLabel key="Above normal" value="2" control={<Radio size="small" />} label="Above normal" />
                  <FormControlLabel key="Well above normal" value="3" control={<Radio size="small" />} label="Well above normal" />
                </RadioGroup>
              </Grid>
              <Grid item xs={4}>
                <Typography align="left">Do you smoke?</Typography>
              </Grid>
              <Grid item xs={8}>
                <RadioGroup name="smoke" value={formValues.smoke} onChange={handleInputChange} row>
                  <FormControlLabel key="Yes" value="1" control={<Radio size="small" required={true} />} label="Yes" />
                  <FormControlLabel key="No" value="0" control={<Radio size="small" />} label="No" />
                </RadioGroup>
              </Grid>
              <Grid item xs={4}>
                <Typography align="left">Do you drink alcohol?</Typography>
              </Grid>
              <Grid item xs={8}>
                <RadioGroup name="alco" value={formValues.alco} onChange={handleInputChange} row>
                  <FormControlLabel key="Yes" value="1" control={<Radio size="small" required={true} />} label="Yes" />
                  <FormControlLabel key="No" value="0" control={<Radio size="small" />} label="No" />
                </RadioGroup>
              </Grid>
              <Grid item xs={4}>
                <Typography align="left">Are you active?</Typography>
              </Grid>
              <Grid item xs={8}>
                <RadioGroup name="active" value={formValues.active} onChange={handleInputChange} row>
                  <FormControlLabel key="Yes" value="1" control={<Radio size="small" required={true} />} label="Yes" />
                  <FormControlLabel key="No" value="0" control={<Radio size="small" />} label="No" />
                </RadioGroup>
              </Grid>
              <Button variant="contained" color="primary" type="submit" fullWidth={true}>
                {`Submit`}
              </Button>
              <Button variant="contained" color="secondary" fullWidth={true} onClick={routeChange}>
                Click here to learn more
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default HeartDiseaseRiskForm
