import React from 'react';
import NFTCardAfterMinting from './NFTCardAfterMinting';
import { Grid, Container, Typography } from '@mui/material';

export default function MyNfts() {

    const nfts = [
        {
            id: 1,
            name: "NFT 1",
            description: "This is NFT 1",
            url: "https://th.bing.com/th/id/R.032efb2c147c40ae0fb68be28e58b0e7?rik=OkYVtftedB9Tgg&riu=http%3a%2f%2fwww.coinsnews.net%2fwp-content%2fuploads%2f2021%2f03%2fnft2-1024x576.jpg&ehk=ZN1GRGcUHhKM%2fHnWEaY7TATVlNcLlSL%2bHVqem4ZAonQ%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            id: 2,
            name: "NFT 2",
            description: "This is NFT 2",
            url: "https://i0.wp.com/thekoffeetable.com/wp-content/uploads/2021/06/nft-token-eth-scaled.jpg?fit=2560%2C1707&ssl=1"
        },
        {
            id: 3,
            name: "NFT 3",
            description: "This is NFT 3",
            url: "https://th.bing.com/th/id/OIP.UJX8WqUc9B-TCMO8KvxuHgHaEK?pid=ImgDet&rs=1"
        },
        {
            id: 4,
            name: "NFT 4",
            description: "This is NFT 4",
            url: "https://th.bing.com/th/id/OIP.X5e5SlSauuCaILUR32CXVgHaEL?pid=ImgDet&rs=1"
        },
    ]

    const nftItems = nfts.map((nft) =>
        <Grid item xs={6} md={4} key = {nft.id.toString()}>
            <NFTCardAfterMinting nft = {nft}></NFTCardAfterMinting>
        </Grid>
    ); 

  return (
    <Container>
        <Typography variant="h4" component="h2">
            My NFTs 
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {nftItems}
        </Grid>
    </Container>
  )
}
