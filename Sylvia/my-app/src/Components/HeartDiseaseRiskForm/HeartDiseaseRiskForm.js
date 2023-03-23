import React, { useState, useEffect } from "react"
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
  const defaultBMIData = {
    weight: "",
    height: "",
    isMetric: "false"
  }

  const [formValues, setFormValues] = useState(defaultFormValues)
  const [bMIData, setBMIData] = useState(defaultBMIData)
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

  const calculateBMI = (e) => {
    const { name, value } = e.target
    if(name === "isMetric") {
      setBMIData({
        ...defaultBMIData,
        [name]: value
      })
    } else {
      setBMIData({
        ...bMIData,
        [name]: value
      })
    }
  }

  useEffect(() => {
    if (bMIData.weight > 0 && bMIData.height > 0) {
      let bMIResults = 0
      if (bMIData.isMetric === "true") {
        bMIResults = Number(bMIData.weight) / Number(Math.pow(bMIData.height, 2))
      }
      else {
        bMIResults = (Number(bMIData.weight) / Number(Math.pow(bMIData.height, 2))) * 703
      }
      bMIResults = Math.round(bMIResults * 10) / 10
      setFormValues({
        ...formValues,
        BMI: bMIResults
      })
    }
  }, [bMIData])

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
      .catch((res) => setResults(`Error! See: ${res}`))
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
        <form onSubmit={handleSubmit} style={{ "paddingLeft": "50px", "paddingRight": "50px" }}>
          <Typography variant="h4">Heart Disease Risk</Typography>
          <Grid container alignItems="baseline" direction="column" spacing={1}>
            <Grid item >
              <TextField style={{"marginBottom": "10px"}} id="age" name="age" label="Age" type="number" value={formValues.age} onChange={handleInputChange} required={true} />
            </Grid>
            <Grid item >
              <RadioGroup name="isMetric" value={bMIData.isMetric} onChange={calculateBMI} row>
                <FormControlLabel key="Calcuate BMI with m and kg" value="true" control={<Radio size="small" />} label="Calcuate BMI with m and kg" />
                <FormControlLabel key="Calculate BMI with in and lbs" value="false" control={<Radio size="small" />} label="Calculate BMI with in and lbs" />
              </RadioGroup>
            </Grid>
            <Grid item >
              <TextField style={{"marginTop": "-20px"}} id="height" name="height" label={bMIData.isMetric === "true" ? "Height (m)" : "Height (in)"} type="number" value={bMIData.height} onChange={calculateBMI} required={false} />
            </Grid>
            <Grid item >
              <TextField id="weight" name="weight" label={bMIData.isMetric === "true" ? "Weight (kg)" : "Weight (lbs)"} type="number" value={bMIData.weight} onChange={calculateBMI} required={false} />
            </Grid>
            <Grid item >
              <TextField id="BMI" name="BMI" label="BMI" type="number" value={formValues.BMI} onChange={handleInputChange} required={true} />
            </Grid>
            <Grid item>
              <TextField id="ap_hi" name="ap_hi" label="Systolic Blood Pressure" type="number" value={formValues.ap_hi} onChange={handleInputChange} required={true} />
            </Grid>
            <Grid item>
              <TextField id="ap_lo" name="ap_lo" label="Diastolic Blood Pressure" type="number" value={formValues.ap_lo} onChange={handleInputChange} required={true} />
            </Grid>
            <Grid container alignItems="center" spacing={1} direction="row" >
              <Grid item xs={4} >
                <Typography align="left">Man or woman?</Typography>
              </Grid>
              <Grid item xs={8} >
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
