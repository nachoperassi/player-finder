// react
import React from 'react';

// material-ui
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { errorMessageStyles as styles } from '../styles';

const ErrorMessage = ({ classes, errorMessage }) => (
  <SnackbarContent
    className={classes.snackbar}
    message={
      <span className={classes.message}>
        <ErrorIcon className={classNames(classes.icon, classes.iconVariant)}/>
        {errorMessage}
      </span>
    }
  />
)

export default withStyles(styles)(ErrorMessage);