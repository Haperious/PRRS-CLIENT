import React, {useState} from 'react'
import SweetAlert from "react-bootstrap-sweetalert"
import swal from 'sweetalert'
const EmailAlert = (isEmailSuccess,setEmailStatus) => {
    const [basic, setbasic] = useState(false)

    return (
        <>
             {isEmailSuccess===true ?
           <SweetAlert
           title="Email Resent Successfully"
           success
           confirmBtnBsStyle="success"
           cancelBtnBsStyle="danger"
           onConfirm={() => {
            setEmailStatus(null)
           }}
          
         > </SweetAlert>
        :
       null
      }


      {isEmailSuccess===false ?
            <SweetAlert
            title="Something went wrong. Email Not Sent"
            error
  
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() => {
                setEmailStatus(null)
            }}
           > </SweetAlert>
        :
       null
      }

        </>
    )
}


export default EmailAlert
