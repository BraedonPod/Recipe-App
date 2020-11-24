import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  imgBlock: {
    display: 'block !important',
    margin: 'auto',
  },
  w100: {
    maxWidth: '100%',
    maxHeight: 400,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  carousel: {
    background: 'black',
  }
}));