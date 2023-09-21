import { Container, Link, Typography } from '@mui/material';
import SignUp from '../components/Forms/SignUp';

function LandingPage() {

return (
    <>
    <Container component="main">
    <Typography variant="h5" component="div" style={{ margin: '5%' }}>
        Welcome to codennect!
      </Typography>
      <Typography variant="h7" component="div" style={{ margin: '2%' }}>
        Create an account or&nbsp;
        <Link href="/login" variant="body1">
            login
         </Link>
         &nbsp;to connect with fellow developers.
      </Typography>
    </Container>
    <SignUp/>
    </>
  );
}

export default LandingPage;