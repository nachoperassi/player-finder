import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import ErrorMessage from './ErrorMessage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// components
import Player from './Player';

// styles
import { playerListStyles as styles } from '../styles';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const PlayerList = ({ classes, players, status }) => (
  <Paper className={classes.paper}>
    {status.isLoading? <LinearProgress/> : null}
    {status.error? 
      <ErrorMessage errorMessage={status.errorMessage} /> : 
      players.length === 0 && !status.isLoading?
        <ErrorMessage errorMessage="No results. Please change the filters" /> :
        null  
    }
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <CustomTableCell>Player</CustomTableCell>
          <CustomTableCell>Position</CustomTableCell>
          <CustomTableCell>Nationality</CustomTableCell>
          <CustomTableCell numeric>Age</CustomTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {players.map((player, index) => (
          <Player player={player} key={index} />
        ))}
      </TableBody>
    </Table>
  </Paper>
)

export default withStyles(styles)(PlayerList);