import React from 'react'
import { Grid, Button } from 'grommet'

interface IButtonsProps {}

const Buttons: React.FC<IButtonsProps> = () => {
  return (
    <Grid
      gap='small'
    >
      <Button primary label='label' />
      <Button secondary label='label' />
    </Grid>
  )
}

export default Buttons