import React from 'react'
type StatusProps ={
    status:'Loading' | 'error' | 'success'
}
export const Status = ({status}:StatusProps) => {
    let message
    if(status === 'Loading'){
         message ='Loading'
    }else if(status === 'success'){
         message='Data fetched successfuly!'
    }
    else if(status === 'error'){
         message='Error fetching data'
    }
  return (
    <div>
         Status:{message}
    </div>
  )
}

