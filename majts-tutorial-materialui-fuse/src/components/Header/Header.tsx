import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}  
      sx={{
      width: '100%',
      height: '80px',
    }}>
      <Toolbar 
        sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            paddingLeft: '0',
            paddingRight: '0'
            }}>
        <Box 
          sx={{ 
              backgroundColor: '#C4C4C4', 
              color: '#000', 
              width: '118px',
              height: '44px',
              fontWeight: 'bold', 
              fontSize: '28px', 
              textAlign:'center',
              margin: { xs: '18px 12px', md: '14px 144px' },
              }}>
          LOGO
        </Box>
        <Button
          sx={{
            color: '#fff',
            width: '160px',
            height: '52px',
            fontSize: '20px',
            borderRadius: '4px',
            margin:{ xs: '14px 12px', md: '14px 144px' }, 
            '&:hover': { backgroundColor: '#59a37b' },
          }}
          variant="contained"
          color="secondary"
        >
          ダウンロード
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
