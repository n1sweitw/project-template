import React from 'react'
import { Grid, Button } from 'grommet'

interface ITestProps {}

const Test: React.FC<ITestProps> = () => {
  return (
    <Grid
      gap='small'
    >
      <Button primary label='label' />
      <Button secondary label='label' />
    </Grid>
  )
}

export default Test