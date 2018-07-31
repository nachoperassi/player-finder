export const errorMessageStyles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.error.dark,
    maxWidth: '100%'
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

export const playerListStyles = theme => ({
  paper: {
    margin: '10px',
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});