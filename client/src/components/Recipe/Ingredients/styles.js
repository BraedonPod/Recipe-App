import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  isChecked: {
    textDecoration: 'line-through !important',
  },
  notChecked: {
    textDecoration: 'none !important',
  }
}));