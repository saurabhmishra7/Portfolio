import React from 'react';
import GridDemo from "../GridDemo/GridDemo"
import { Grid } from '@mui/material';

const Project = () => {
  const items = [
    {
      title : " First project",
      description : "Minor project",
    },
    {
      title : " First project",
      description : "Minor project",
    },
    {
      title : " First project",
      description : "Minor project",
    },
    {
      title : " First project",
      description : "Minor project",
    },
    {
      title : " First project",
      description : "Minor project",
    },
    {
      title : " First project",
      description : "Minor project",
    },
    {
      title : " First project",
      description : "Minor project",
    },
    {
      title : " First project",
      description : "Minor project",
    },
    {
      title : " First project",
      description : "Minor project",
    },
    {
      title : " First project",
      description : "Minor project",
    },
  ]
  return (
    <div className='content'>
      Projects
      <Grid container>
        {
          items.map((item) => {
            return (
              <Grid item xs={4}>
                <GridDemo/>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}

export default Project;
