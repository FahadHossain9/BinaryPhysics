
import { Grid,  } from '@mui/material';

const HomePage = () => {
  return (
    <Grid container style={{ height: '100vh' }}>
      <Grid item xs={12} sm={8}>
        {/* Content for the first part (80%) */}
      </Grid>
      <Grid item xs={12} sm={4} style={{ backgroundColor: 'white', marginLeft: '-1rem' }}>
        
      </Grid>
    </Grid>
  );
};

export default HomePage;




// import {Grid} from '@mui/material';

// const HomePage = () => {
//     return(<>
//     <Grid container style={{ height: '100vh' }}>
//       <Grid item xs={12} sm={8} style={{ backgroundColor: '#f0f0f0' }}>
        
//       </Grid>
//       <Grid item xs={12} sm={4} style={{ backgroundColor: '#e0e0e0' }}>
//         {/* Content for the second part (20%) */}
//       </Grid>
//     </Grid>
//         {/* <Grid container xs={12} spacing={2}>
//             <Grid item xs={8}>
//                 <Grid direction="column" container xs={12} style={{backgroundColor:'#f2f4f5', height:'150px',justifyContent:'center',alignItems:'center'}}>
//                     <Grid><h1>Starting OLO as Your Home Based Business</h1></Grid>
//                     <Grid style={{}}><p1>{`by Fahad Ahmed        |       Bangla      |   (8 Rating)`}</p1></Grid>
//                 </Grid>
//             </Grid>
//             <Grid item xs={4} style={{background:'green'}}>
//                 <Grid direction="column" container xs={12} style={{backgroundColor:'#f2f4f5', height:'100px'}}>
//                     <h1>Home Page</h1>
//                     <h1>Home Page</h1>
//                 </Grid>
//             </Grid>    
//         </Grid> */}
//     </>)
// }

// export default HomePage;