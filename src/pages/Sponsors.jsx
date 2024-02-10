import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';

import tata from '../assets/Images/logos/tata.png'
import cairn from '../assets/Images/logos/cairn.png'
import SBI from '../assets/Images/logos/SBI.jpg'
import vodafone from '../assets/Images/logos/vodafone.png'
import dominos from '../assets/Images/logos/dominos.png'
import lensfit from '../assets/Images/logos/lensfit.png'
import pepsi from '../assets/Images/logos/pepsi.png'
import Indian_oil from '../assets/Images/logos/Indian_oil.png'
import pantaloons from '../assets/Images/logos/pantaloons.png'
import ntpc from '../assets/Images/logos/ntpc.png'
import Reliance from '../assets/Images/logos/Reliance.png'
import ojas from '../assets/Images/logos/ojas.png'
import gail from '../assets/Images/logos/gail.png'
import american_swan from '../assets/Images/logos/american_swan.png'
import volvo from '../assets/Images/logos/volvo.jpg'
import shell from '../assets/Images/logos/shell.png'
import canara_bank from '../assets/Images/logos/canara_bank.png'

export default function Sponsers() {
	const StyledImg = styled('img')({
		width: '130px',
		height: '100px',
	});

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					padding: '40px 0px',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Typography variant="body1" sx={{ color: '#858584' }}>
					Have a look
				</Typography>
				<Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
					<Typography
						sx={{
							color: 'black',
							typography: { sm: 'h6', xs: 'h6', lg: 'h4' },
						}}
					>
						Special thanks to
					</Typography>
					<Typography
						sx={{
							color: '#13ADB7',
							typography: { sm: 'h6', xs: 'h6', lg: 'h4' },
						}}
					>
						Our Sponsers
					</Typography>
				</Box>
				<Box sx={{ padding: '5px', marginTop: '18px' }}>
					<Grid container spacing={2}>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg
								src="https://resources.redbull.com/logos/redbullcom/v3/redbullcom-logo.svg"
								alt="logo"
							/>
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={cairn} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={tata} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={SBI} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={vodafone} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={dominos} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={lensfit} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={pepsi} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={Indian_oil} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={pantaloons} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={ntpc} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={Reliance} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={canara_bank} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={ojas} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={shell} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={gail} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={volvo} alt="logo" />
						</Grid>
						<Grid
							item
							xs={6}
							sm={4}
							lg={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<StyledImg src={american_swan} alt="logo" />
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
