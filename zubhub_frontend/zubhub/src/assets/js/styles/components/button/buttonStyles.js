const styles = theme => ({
  primaryButtonStyle: {
    backgroundColor: '#00B8C4',
    borderRadius: 30,
    color: 'white',
    '&:hover': {
      backgroundColor: '#03848C',
    },
  },
  primaryButtonStyle2: {
    backgroundColor: '#FFD73D',
    '&:hover': {
      backgroundColor: '#EFBF06',
    },
  },
  primaryButtonStyle3: {
    backgroundColor: '#DC3545',
    border: '2px solid #FFCE0C',
    borderRadius: 30,
    color: 'white',
    '&:hover': {
      backgroundColor: '#B41423',
    },
  },
  secondaryButtonStyle: {
    borderRadius: 30,
    backgroundColor: 'white',
    color: '#00B8C4',
    '&:hover': {
      color: '#03848C',
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
  },
  dangerButtonStyle: {
    borderRadius: 30,
    backgroundColor: 'rgb(220, 0, 78)',
    color: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: '#9A0036',
    },
  },
  darkDangerButtonStyle: {
    borderRadius: 30,
    backgroundColor: '#9A0036',
    color: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: '#9A0036',
    },
  },
  mediaUploadButtonStyle: {
    '& MuiButton-label': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  customButtonStyle: {
    [theme.breakpoints.up('1600')]: {
      fontSize: '1.5rem',
    },
  },
  fullWidth: {
    width: '100%',
  },
});

export default styles;
