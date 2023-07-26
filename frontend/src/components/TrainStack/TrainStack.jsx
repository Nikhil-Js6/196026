import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Train from '../TrainCard/Train';

const width = window.innerWidth > 720 ? '65%' : '90%';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width,
  height: '50%',
  alignSelf: 'center',
}));

export default function TrainStack({ trains }) {
  return (
    <Box sx={{ width: '100%', alignSelf: 'center' }}>
      <Stack spacing={2}>
        {
          trains.map(train => (
            <Item>
               <Train train={train}/>
            </Item>
          ))
        }
      </Stack>
    </Box>
  );
}
