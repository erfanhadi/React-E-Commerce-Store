import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Common/Sidebar'
import AuthProvider from '../../context/AuthProvider'
import { Toaster } from 'sonner'

function CMSLayout() {
    return (
        <AuthProvider>
            <Toaster position="top-right" richColors toastOptions={{
                style: {
                    fontFamily: "IRANSansX",
                },
            }} />
            <main id="application" className="flex gap-10 min-h-dvh bg-zinc-50">
                <Sidebar />
                <section className="container mx-auto  py-4" id="content">
                    <Outlet />
                </section>
            </main>
        </AuthProvider>
    )
}

export default CMSLayout