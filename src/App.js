
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Address';
import { BsFillHeartFill } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <BsFillHeartFill/>
      <header className="App-header">
        <ProfilPhoto/>
        <FullName/>
        <Adress/>
        
      </header>
    </div>
  );
}

export default App;
