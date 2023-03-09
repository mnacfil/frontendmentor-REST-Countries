import React from 'react'

const ListItem = ({ region, setRegion}) => {
    return (
        <li onClick={() => setRegion(region)}>{region}</li>
    )
}

export default ListItem;
