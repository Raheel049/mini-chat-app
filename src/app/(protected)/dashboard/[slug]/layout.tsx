
import Sidebar from '@/src/components/global/sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: { slug: string }
}

const Layout = ({ children, params }: Props) => {
    return (
        <div className='p-3'>
            {/* Sidebar */}
            <Sidebar slug={params.slug} />
            {/* navbar */}
            {children}
        </div>
    )
}

export default Layout