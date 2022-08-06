import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const TimeLine = ({ product }) => {
	const { approval } = product;
  
	const steps = [ 'Submitted', 'Forwarded to Workforce', approval ];
	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={approval === 'Approved'||approval === 'Rejected' ? 3 : 2} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
};

export default TimeLine;
