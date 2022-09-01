import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";

import nft from '../images/NFT-Purple.jpg';

export default function AddNFTCard() {
  return (
    <Card sx={{ maxWidth: 345, }}>
      <CardMedia
        component="img"
        image={nft}
        alt="NFT"
      />
      <CardContent>
        <TextField
        id="outlined-name"
        label="Name"
        fullWidth 
        value = ""
        sx={{ marginY: "0.2cm", }}
      />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          fullWidth
          sx={{ marginY: "0.2cm", }}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" style={{width: "100%"}}>Mint NFT</Button>
      </CardActions>
    </Card>
  )
}
