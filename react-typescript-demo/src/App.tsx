import './App.css';
import { Text } from './Components/Polymorphic/Text';
// import { Button } from './Components/html/Button';
// import { Input } from './Components/html/Input';
// import { Counter } from './Components/State/Counter'; 
// import { ThemcontextProvider } from './Components/Context/ThemeContext';
// import { Box } from './Components/Context/Box';
// import { UsercontextProvider } from './Components/Context/UserContext';
// import { User } from './Components/Context/User';
// import { MutableRef } from './Components/ref/MutableRef';
// import Counter from './Components/class/Counter';
// import { Private } from './Components/auth/Private';
// import { Profile } from './Components/auth/Profile';
// import { List } from './Components/generics/List';
// import RandomNumber from './Components/restriction/RandomNumber';
// import { Toast } from './Components/Templateliterals/Toast';
function App() {

  return (
    <div className="App" >
           {/* <Counter /> */}
           {/* <ThemcontextProvider>
                   <Box />
           </ThemcontextProvider> */}
           {/* <UsercontextProvider> */}
                  {/* <User /> */}
           {/* </UsercontextProvider> */}
           {/* <MutableRef /> */}
           {/* <Counter message='The Count Value is:'/> */}
           {/* <Private  isLoggedIn={true} component={Profile}/> */}
           {/* <List items={[1,'Superman','Wonder Women']} onClick={(item)=> console.log(item)}/> */}
            {/* <List 
                items={[
                     {
                      id:1,
                      first:"Bruce",
                      last:'wayne'
                     },
                     {
                      id:4,
                       first:'Clark',
                       last:'Kent'
                     },
                     {
                      id:5,
                      first:'Princess',
                      last:'Diana'
                     }
                ]}
                onClick={(item)=>console.log(item)}
            /> */}
            {/* <RandomNumber value={10} ispositive /> */}
             {/* <Toast position='center'/> */}
             {/* <Button variant='primary' >
                Label
             </Button> */}
             {/* <Input>
                  <div>Primary button</div>
             </Input> */}
             {/* <button>
                 <div>Primary button</div>
             </button> */}
             {/* <Button variant='primary' onClick={()=> console.log('clicked')}>
                 primary
             </Button> */}
            <Text size='sm' as='h1'>Heading</Text>
            <Text size='md' as='p'>Paragraph</Text>
            <Text size='sm' as='label' color='secondary' htmlFor='someId'>Label</Text>
    </div>
  );
}
export default App;
