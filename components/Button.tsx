import Link from "next/link"

type ButtonLinkProps = {
    text: string
    href: string
}

export default function ButtonLink({ text, href }: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className=" 
            px-5 py-2.5 
            text-xs 
            font-bold 
            tracking-[0.15em] 
            uppercase 
            text-blue-400 
            border 
            border-blue-500/40 
            rounded-lg 
            hover:bg-blue-500 
            hover:text-white 
            transition-all 
            duration-200 
            cursor-pointer
            ">
            {text}
        </Link>
    )
}