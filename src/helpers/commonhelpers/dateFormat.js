import React from 'react'
import moment from 'moment'

export default function dateFormat(date) {
    return (
        <div>
            {moment(date).format("DD MMM YYYY, h:mm:ss a")}{" "}
        </div>
    )
}
