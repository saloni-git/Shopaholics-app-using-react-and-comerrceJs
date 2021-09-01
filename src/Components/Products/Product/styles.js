import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: 375,
    margin: "auto",
    transition: "0.3s",
    maxHeight:'auto',
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    }
      
  },
  media: {
    height: 10,
    paddingTop: '95%', // 16:9
    alignItems:'center',
    "&:hover" : {
      position:'relative',
      top:'-25px',
      left:'-35px',
      width:'500px',
      height:'auto',
      display:'block',
      zIndex:999,
  

    }
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));