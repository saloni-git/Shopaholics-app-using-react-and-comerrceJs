import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginTop:'50px',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    gap:'1rem',
    paddingTop:'100px',
    gridTemplateColumns: 'repeat(4, 1fr)',
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing.unit
    }},
}));
