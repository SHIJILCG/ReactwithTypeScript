import {name} from './Person.types'
 type PersonListProps ={
     nameList:name[]
 }
export const PersonList = ({nameList}:PersonListProps) => {
  return (
    <div>
         {
            nameList.map(names => (
                <div>{names.first} {names.last}</div>
            ))
         }
    </div>
  )
}
