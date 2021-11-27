import React from 'react'
import {
    Badge,
    Button
  } from "reactstrap"

export const paymentRequestStatus =(status)=> {

    if(status){
    let colorStatus =""
    let colorText =""


    if (status.includes("Success")){colorStatus="success";colorText="green"}
    else if (status === "Failed"){colorStatus="danger";colorText="red"}
    else {colorStatus="warning";colorText="yellow"} 

    return <Badge
    className={"font-size-13 badge-soft-" + colorStatus}
    color={colorText}
    pill
    >
    {status}
    </Badge>
    }
}


export const paymentRequestLinkStatus =(link,value, pill)=> {

    let colorStatus =""
    let colorText =""

    if (link === "Active" ){colorStatus="success";colorText="green"}
    else  if (link === "Expired"){colorStatus="danger";colorText="red"}
    else {colorStatus="warning";colorText="yellow"} 

    if(pill===true){
        return <Badge
        className={"font-size-13 badge-soft-" + colorStatus}
        color={colorText}
        pill
        >
        {value}
        </Badge>
    }else{
        return <Badge
        className={"font-size-13 badge-soft-" + colorStatus}
        color={colorText}
        >
        {value}
        </Badge>
    }

      
}


export const payNowStatus=(paymentRequestStatus, linkStatus)=>{

    if(paymentRequestStatus?.includes("Success")){
        return  <Button className="w-lg btn btn-success waves-effect waves-light ">
        <i className="fas fa-check font-size-16 align-middle mr-2"></i>{" "}
        PAID
        </Button>
    }
    else{

        if(linkStatus==="Inactive"){

            return  <Button className="w-lg btn btn-danger waves-effect waves-light ">
            <i className="fas fa-unlink font-size-16 align-middle mr-2"></i>{" "}
            LINK EXPIRED
            </Button> 

        }
        else{
        return  <Button className="w-lg btn btn-success waves-effect waves-light ">
        <i className="fas fa-credit-card font-size-16 align-middle mr-2"></i>{" "}
        PAY NOW
        </Button> 
        }
    }
}

