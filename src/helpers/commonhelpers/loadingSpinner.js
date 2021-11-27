import React from 'react'
import { Spinner } from "reactstrap"

const LoadingSpinnerThreeDots=()=> {

    return (
        <div className="mt-4 d-flex justify-content-center " > 
        <Spinner type="grow" className="mr-2" color="primary" />
        <Spinner type="grow" className="mr-2" color="success" />
        <Spinner type="grow" className="mr-2" color="danger" />
        </div>
    )
}
  
export default LoadingSpinnerThreeDots


