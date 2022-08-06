import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const UserSelect = () => {
	const [ value, setValue ] = React.useState('Tenant');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ width: '100%' }}>
			<Tabs
				value={value}
				onChange={handleChange}
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="secondary tabs example"
			>
				<Tab value="Tenant" label="Tenant" />
				<Tab value="User" label="As User" />
			</Tabs>
		</Box>
	);
};

export default UserSelect;
