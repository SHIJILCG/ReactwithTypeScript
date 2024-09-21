import {ContainerProps} from './Person.types'
export const Container = ({styles}:ContainerProps) => {
    console.log(styles)
  return (
    <div>
        <div style={styles}>
             Text Context goes here
        </div>
    </div>
  )
}
