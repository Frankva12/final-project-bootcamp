import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import Login from './components/Login/Login';
import TableUsers from './components/Table/TableUsers';
import { MDBContainer } from 'mdb-react-ui-kit';
import FilterForm from './components/FilterForm/FilterForm';
import Profile from './components/Profile/Profile';
import TableAdmins from './components/Table/TableAdmins';

function App() {
  return (
    // <Login/>
    <MDBContainer className='container-user' fluid>
      <Profile/>
      <FilterForm/>
      {/* <TableUsers/> */}
      <TableAdmins/>
    </MDBContainer>
  );
}

export default App;
