// react
import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// styles
import { searchPlayerStyles as styles} from '../styles';

class SearchPlayer extends Component {
  constructor(props) {
    super(props);
    const { name, position, age } = props.filters;
    this.state = {
       name,
       position,
       age
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (propertie) => (event) => {
    this.setState({
      [propertie]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.position, Number(this.state.age));
  }

  render() {
    const { classes, positions } = this.props;
    return (
      <Paper className={classes.paper}>
        <form onSubmit={this.handleSubmit} className={classes.container} autoComplete="off">
          <TextField id="name" label="Name" type="text" value={this.state.name} className={classes.textField} onChange={this.onChange('name')} />
          <TextField id="position" label="Position" select value={this.state.position} className={classes.textField} onChange={this.onChange('position')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}>
            {positions.map((position, index) => (
              <MenuItem key={index} value={position}>
                {position}
              </MenuItem>
            ))}
          </TextField>
          <TextField id="age" label="Age" type="number" value={this.state.age} className={classes.textField} onChange={this.onChange('age')} inputProps={{ min: "18", max: "40" }} />
          <Button type="submit" variant="contained" color="secondary" className={classes.button}>
            Search
          </Button>
        </form>
      </Paper>
    )
  }
};

export default withStyles(styles)(SearchPlayer);