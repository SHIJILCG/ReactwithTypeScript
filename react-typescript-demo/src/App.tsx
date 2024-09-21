
import './App.css';
import { Container } from './Components/Container';
// import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Counter } from './Components/State/Counter';
import { LoggedIn } from './Components/State/LoggedIn';
import { User } from './Components/State/User';
// import { Greet } from './Components/Greet';
// import { Heading } from './Components/Heading';
// import { Oscar } from './Components/Oscar';
// import { Person } from './Components/Person';
// import { PersonList } from './Components/PersonList';
// import { Status } from './Components/Status';
 
function App() {
  //  const nameList =[
  //     {
  //       first:'Bruce',
  //       last:'wayne'
  //     },
  //     {
  //       first:'Clark',
  //       last:'Kent'
  //     },
  //     {
  //       first:'Princess',
  //       last:'Diana'
  //     }
  //  ]
  // const handleClick =()=>{
  //    console.log('buttons clicked',)
  // }
  return (
    <div className="App" >
           {/* <Greet name={'shijil'} messageCount={100} isLoggedIn={true}/> */}
           {/* <Person nameList={nameList} /> */}
           {/* <PersonList nameList={nameList} /> */}
           {/* <Status status='Loading' /> */}
           {/* <Heading>
                <Oscar />
           </Heading>
           <Greet name='shijil' isLoggedIn={true}/> */}
           {/* <Button handleClick={(event,id)=> console.log("button is clicked ",event,id)}/> */}
           {/* <Input value='' handleonChange={event =>  console.log(event)} /> */}
           {/* <Container  styles={{border:'1px solid black',padding:'1rem'}}/> */}
           {/* <LoggedIn /> */}
           {/* <User /> */}
           <Counter />
    </div>
  );
}

export default App;
