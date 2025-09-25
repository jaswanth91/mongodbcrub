'use clinet'
import Link from "next/link";


export default function Navbar(){
    return (
        <>
        <nav>
            <Link href={'/'} className="logo">Mowsding</Link>
            <Link href={'/addTopic'} className="topics">Add Topic</Link>
        </nav>
        </>
    )
}