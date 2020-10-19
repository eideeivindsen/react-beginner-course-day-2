import React from "react"

const Avatar = ({ name, imageUrl, className }) => {
    return <div className="avatar">
        <img className={`profilepic ${className}`} src={imageUrl} />
        <p className="name">{name}</p>
    </div>
}

export default Avatar;