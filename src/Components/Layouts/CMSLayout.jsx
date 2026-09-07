import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Common/Sidebar'

function CMSLayout() {
    return (
        <main id="application" className="flex gap-10 min-h-dvh bg-zinc-50">
            <Sidebar />
            <section className="container mx-auto  py-4" id="content">
                <Outlet />
            </section>
        </main>
    )
}

export default CMSLayout