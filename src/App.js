
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Address';

import {Navbar,Nav,Form,FormControl,Button,}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  
    <div className="App">
      <div className="navy">
       <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Profil</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">First Articl</Nav.Link>
      <Nav.Link href="#pricing">Second Articl</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  
</>
      </div>
      {/* <BsFillHeartFill/> */}
      <header className="App-header">
        <ProfilPhoto/>
        <FullName/>
        <Adress/>
        
      </header>
    </div>
  );
}

export default App;
