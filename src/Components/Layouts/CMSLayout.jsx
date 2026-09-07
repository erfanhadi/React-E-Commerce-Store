import React from 'react'
import { Outlet } from 'react-router'

function CMSLayout() {
    return (
        <div>
            CMS layout
            <Outlet/>
        </div>
    )
}

export default CMSLayout