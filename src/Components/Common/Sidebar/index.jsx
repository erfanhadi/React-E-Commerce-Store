import React from 'react'
import ModeratorLinks from '../../Templates/Dashboard/ModeratorLinks'
import Logout from '../../Templates/Dashboard/logout'

function index() {
    return (
        <aside className="w-70 bg-white shadow-xl flex flex-col justify-between h-dvh! sticky top-0! right-0 border-l border-zinc-200">
            <div>
                <main className="p-3 space-y-1.5">
                    <ModeratorLinks />
                </main>
            </div>
            <Logout />
        </aside>
    )
}

export default index