import React, {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Button } from "reactstrap"

 export const copyLink_Toast= (link) => {

    const [success_msg, setsuccess_msg] = useState(false)
    const [copyLink, setCopyLink] =useState ({
        value: '',
        copied: false,
      })

    return (
        <div>
                         <CopyToClipboard text= {link}
                                onCopy={() => setCopyLink({copied: true})}>  
                          </CopyToClipboard>    


                          {success_msg ? (
                                <SweetAlert
                                title="Link Copied! Paste Now"
                                success
                            
                                confirmBtnBsStyle="success"
                                cancelBtnBsStyle="danger"
                                onConfirm={() => {
                                    setsuccess_msg(false)
                                }}
                              
                                >
                                {link}
                                </SweetAlert>
                            ) : null}
        </div>

      
    )
}


