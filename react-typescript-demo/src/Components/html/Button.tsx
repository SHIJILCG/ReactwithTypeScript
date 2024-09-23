type buttonPros={
    variant:'primary' |'secondary'
    children:string
} & Omit<React.ComponentProps<'button'>,'children'>

export const Button = ({variant,children,...rest}:buttonPros) => {
  return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}
