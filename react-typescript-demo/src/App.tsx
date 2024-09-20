
import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
 
function App() {
   const PersonName ={
     first:'Bruce',
     last:'wayne'
   }
  return (
    <div className="App" >
           <Greet name={'shijil'} messageCount={100} isLoggedIn={true}/>
           <Person name={PersonName} />
    </div>
  );
}

export default App;
