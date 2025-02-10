import React from 'react'
import { TextField, Box, Typography, Paper, Grid, Button } from '@mui/material'

interface FormState {
  name: string
  email: string
  description: {
    address: string
    city: string
  }
}

interface Props {
  form: FormState
  name: string
  changeVue3Form: (form: FormState) => void
}

const Home: React.FC<Props> = ({ form, name, changeVueForm }) => {
  const handleChange = (field: string, value: string) => {
    const newForm = { ...form }
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      newForm[parent][child] = value
    } else {
      newForm[field] = value
    }
    changeVueForm(newForm)
  }

  return (
    <Box sx={{ margin: 2 }}>
      <Typography variant="h6">username-text: {name}</Typography>

      <Paper sx={{ p: 2, mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Username" value={name} onChange={(e) => handleChange('name', e.target.value)} />
            <Typography variant="caption" sx={{ mt: 1 }}>
              This component shows the communication between the Vue3 and React components
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              value={form.description.address}
              onChange={(e) => handleChange('description.address', e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              value={form.description.city}
              onChange={(e) => handleChange('description.city', e.target.value)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Home
