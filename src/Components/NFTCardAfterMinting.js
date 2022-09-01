import React from 'react';
import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function NFTCardAfterMinting(props) {
    const nft = props.nft;

  return (
    <Card sx={{ maxWidth: 345, }}>
      <CardMedia
        component="img"
        image={nft.url}
        alt="NFT"
      />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {nft.name} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {nft.description}
            </Typography>
      </CardContent>
    </Card>
  )
}
