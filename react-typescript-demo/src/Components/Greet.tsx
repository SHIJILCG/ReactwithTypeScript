
type GreetPops ={
     name:string
     messageCount:number
     isLoggedIn:boolean
}
export const Greet = ({name,messageCount,isLoggedIn}:GreetPops) => {
  return (
    <div >
        {
            isLoggedIn ? <h2>Welcome {name}! you have {messageCount} unreaded messages</h2> : <h2>Hello Guest</h2>
        }
    </div>
  )
}