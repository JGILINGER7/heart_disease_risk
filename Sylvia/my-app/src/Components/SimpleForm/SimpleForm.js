import React, { useState } from "react"
import { Grid, TextField, FormControlLabel, FormControl, FormLabel, Select, Button, MenuItem, RadioGroup, Radio, Text, Typography } from "@material-ui/core"
import { render } from "@testing-library/react"

const SimpleForm = () => {

  const defaultFormValues = {
    gender: "",
    age: "",
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
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues);
    setIsSubmitted(!isSubmitted)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <TextField id="age" name="age" label="age" type="number" value={formValues.age} onChange={handleInputChange} required={true}/>
        </Grid>
        <Grid item xs={12}>
          <TextField id="BMI" name="BMI" label="BMI" type="number" value={formValues.BMI} onChange={handleInputChange} required={true}/>
        </Grid>
        <Grid item xs={12}>
          <TextField id="ap_hi" name="ap_hi" label="systolic blood pressure" type="number" value={formValues.ap_hi} onChange={handleInputChange} required={true}/>
        </Grid>
        <Grid item xs={12}>
          <TextField id="ap_lo" name="ap_lo" label="diostolic blood pressure" type="number" value={formValues.ap_lo} onChange={handleInputChange} required={true}/>
        </Grid>
        <Grid item xs={3}>
          <Typography>Man or woman?</Typography>
          </Grid>
          <Grid item xs={9}>
          <RadioGroup name="gender" value={formValues.gender} onChange={handleInputChange} row>
            <FormControlLabel key="Man" value="2" control={<Radio size="small" required={true} />} label="Man" />
            <FormControlLabel key="Woman" value="1" control={<Radio size="small" />} label="Woman" />
          </RadioGroup>
          </Grid>
        <Grid item xs={2}>
          <Typography>How is your cholesterol level?</Typography>
          </Grid>
          <Grid item xs={10}>
          <RadioGroup name="cholesterol" value={formValues.cholesterol} onChange={handleInputChange} row>
            <FormControlLabel key="Normal" value="1" control={<Radio size="small" required={true} />} label="Normal" />
            <FormControlLabel key="Above normal" value="2" control={<Radio size="small" />} label="Above normal" />
            <FormControlLabel key="Well above normal" value="3" control={<Radio size="small" />} label="Well above normal" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <Typography>How is your glucose level?</Typography>
          </Grid>
          <Grid item xs={9}>
          <RadioGroup name="gluc" value={formValues.gluc} onChange={handleInputChange} row>
            <FormControlLabel key="Normal" value="1" control={<Radio size="small" required={true} />} label="Normal" />
            <FormControlLabel key="Above normal" value="2" control={<Radio size="small" />} label="Above normal" />
            <FormControlLabel key="Well above normal" value="3" control={<Radio size="small" />} label="Well above normal" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <Typography>Do you smoke?</Typography>
          </Grid>
          <Grid item xs={9}>
          <RadioGroup name="smoke" value={formValues.smoke} onChange={handleInputChange} row>
            <FormControlLabel key="Yes" value="1" control={<Radio size="small" required={true} />} label="Yes" />
            <FormControlLabel key="No" value="0" control={<Radio size="small" />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <Typography>Do you drink alcohol?</Typography>
          </Grid>
          <Grid item xs={9}>
          <RadioGroup name="alco" value={formValues.alco} onChange={handleInputChange} row>
            <FormControlLabel key="Yes" value="1" control={<Radio size="small" required={true} />} label="Yes" />
            <FormControlLabel key="No" value="0" control={<Radio size="small" />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography>Are you active?</Typography>
          </Grid>
          <Grid item xs={6}>
          <RadioGroup name="active" value={formValues.active} onChange={handleInputChange} row>
            <FormControlLabel key="Yes" value="1" control={<Radio size="small" required={true} />} label="Yes" />
            <FormControlLabel key="No" value="0" control={<Radio size="small" />} label="No" />
          </RadioGroup>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          {isSubmitted ? `Hide Results` : `Submit`}
        </Button>
      </Grid>
      <Typography id="results" hidden={!isSubmitted}>{`The values gathered are: ${JSON.stringify(formValues, null, 2)}`}</Typography>
    </form>
  )

}

export default SimpleForm
