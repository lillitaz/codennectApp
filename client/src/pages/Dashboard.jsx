import { Container } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { fetchAllUsers } from "../api/userFetches";

function Dashboard() {

const users = getAllUsers();

    async function getAllUsers() {
  try {
  const users = await fetchAllUsers();
  console.log(users[0]);
  } catch (error) {
  console.error(error);
  }
}
    return (
        <>
         <Container component="main">
            <CssBaseline />
          Dashboard
          </Container>
        </>
      );
    };
    
export default Dashboard;