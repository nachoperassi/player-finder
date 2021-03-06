import React from 'react';

// material-ui
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Player = ({ player, index }) => (
  <TableRow key={index}>
    <TableCell>{player.name}</TableCell>
    <TableCell>{player.position}</TableCell>
    <TableCell>{player.nationality}</TableCell>
    <TableCell numeric>{player.age}</TableCell>
  </TableRow>
)

export default Player;