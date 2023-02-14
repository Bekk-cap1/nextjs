

import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function PageNotFound() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>
                <Link href='/'>home Page</Link>
            </p>
        </div>
    )
}

export default PageNotFound