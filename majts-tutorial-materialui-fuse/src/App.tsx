import { Button, Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', 
    },
    secondary: {
      main: '#60CAAD',  
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
       <Header />

        <Box textAlign="center" sx={{ height: '540px', backgroundColor: '#f9f9f9' ,paddingLeft:{ xs: '24px', md: 'none'},}}>
          <Box sx={{
            color: '#333',
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: { xs: 'left', sm: 'center', md: 'center' } ,
            paddingTop: { xs: '102px', sm: '120px',md: '169px' },
          }}>
            タイトルテキスト Heading 1
          </Box>
          <Box sx={{
            marginBottom: '30px',
            color: '#333',
            fontSize: '28px', 
            lineHeight: '1.8',
            fontWeight: '400',
            textAlign: { xs: 'left', sm: 'center', md: 'center' } 
          }}>
            サブのキャッチコピーキャッチコピーキャッチコピー
          </Box>
          <Button sx={{
            color: '#fff',
            padding: { xs: '13px 21px', sm: '17px 80px', md: '21px 140px' }, 
            fontSize: '20px',
            borderRadius: '4px',
            float: { xs: 'left', sm: 'none', md: 'none' } 
          }} variant="contained" color="secondary">
            ダウンロード
          </Button>
        </Box>

        <Box  sx={{ 
            backgroundColor: '#fff', 
            padding: { xs: '0 24px', sm: '20px', md: '40px 20px'}, 
            marginTop:'60px',
            height:{ xs: '601px', sm:'549px', md: '549px' }
            }}>

          <Box sx={{
            fontWeight: 700,
            color: '#333',
            fontSize:{ xs: '28px', sm: '36px',md: '28px' }, 
            marginBottom:{ xs: '15px', sm: '20px',md: '32px' }, 
            textAlign: { xs: 'left', sm: 'center',md: 'center' } 
          }}>
            タイトルテキスト Heading 2
          </Box>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center">
            <Box flex={1}  sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
              <Box
                component="img"
                src="src/assets/bg.png"
                sx={{
                  width: { xs: '342px', sm: '400px', md: '480px' },
                  height:  { xs: '230px', sm:'280px', md: '324px'},
                  objectFit: 'cover'
                }}
              />
              </Box>
            <Box flex={1}  sx={{
              color: '#333',
              fontSize:'16px',
              textAlign:{ xs: 'left', sm:'center', md: 'left'},
              paddingTop:{ xs: 'none', sm:'30px', md: 'none'},
              paddingRight:{ xs: 'none', sm:'none', md: '32px'},
              margin:{ xs: 'none', sm:'0 30px', md: 'none'}
            }}>
              <p>2カラムのテキスト。<br></br>複素数体であれば、任意のCM-タイプのAは、実際、数体である定義体（英語版）(fieldofdefinition)を持つ。自己準同型環の可能なタイプは、対合（ロサチの対合（英語版）(Rosatiinvolution）をもつ環として既に分類される。</p>
            </Box>
          </Box>
        </Box>

        <Box textAlign="center"  sx={{ backgroundColor: '#f5f5f5', padding: { xs: '24px', md: '60px'},height: { xs: '373px', md: '418px' } , }}>
          <Box sx={{
            fontWeight: 700,
            color: '#333',
            fontSize:'28px',
            marginTop:'72px',
            marginBottom: '20px',
            textAlign: { xs: 'left', sm: 'center', md: 'center' } ,
            
          }}>
            タイトルテキスト Heading 2
          </Box>
          <Box sx={{
            marginBottom:{ xs: '32px', sm: '64px', md: '98px' }  ,
            color: '#333',
            fontSize: '16px',
            lineHeight: '1.8',
            fontWeight: '400',
            textAlign: { xs: 'left', sm: 'center', md: 'center' } 
          }}>
            ダミーテキスト、ダミーテキスト、ダミーテキスト、ダミーテキスト。
          </Box>
          <Button sx={{
            color: '#fff',
            padding: { xs: '13px 21px', sm: '17px 80px', md: '21px 140px' }, 
            fontSize: '20px',
            borderRadius: '4px',
            float: { xs: 'left', sm: 'none', md: 'none' } 
          }} variant="contained" color="secondary">
            ダウンロード
          </Button>
        </Box>

        <Footer />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
