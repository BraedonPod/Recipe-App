import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  starOverlay: {
    color: '#fdbc05',
    display: 'flex',
    paddingLeft: 16,
    fontWeight: 600,
    '& svg': {
      width: '18px !important',
    },
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 16px 0px',
  },
  title: {
    padding: '0 16px',
    marginTop: 6,
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  favBtn: {
    color: '#f50000',
    '&:hover' : {
      color: '#4a4a4a8f',
    },
  },
  notfavBtn: {
    color: '#4a4a4a8f',
    '&:hover' : {
      color: '#f50000',
    },
  },
});