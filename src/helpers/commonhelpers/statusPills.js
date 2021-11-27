import React from 'react'
import {
    Badge,
    Button
  } from "reactstrap"



export const statusPillsBool =(link,value, pill)=> {

    let colorStatus =""
    let colorText =""

    if (link === true ){colorStatus="success";colorText="green"}
    else  if (link === false ){colorStatus="danger";colorText="red"}
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

