"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function NavLink({ url }: { url: string }) {
    const name = useSearchParams()
    return (
        <Link href={`?name=${url}`} className={`px-5 py-2 border border-d-60 rounded-full ${name.get("name") === url ? "bg-d-100" : "bg-d-80"}`}>
            {url}
        </Link>
    )
}
