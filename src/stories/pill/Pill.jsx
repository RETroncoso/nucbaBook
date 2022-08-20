import React from 'react'
import PropTypes from "prop-types"
import "./pill.css"
import {AiOutlineCheck, AiOutlineWarning} from "react-icons/ai"
import {MdOutlineCancel} from "react-icons/md"


export const Pill = ({status}) => {
  return (
    <span
        className={status}
    >
        {status === "correct" && <AiOutlineCheck/>}
        {status === "warning" && <AiOutlineWarning/>}
        {status === "alert" && <MdOutlineCancel/>}
    </span>
  )
}

Pill.propTypes = {
    status: PropTypes.string,
}

Pill.defaultProps = {
    status: "correct"
}
