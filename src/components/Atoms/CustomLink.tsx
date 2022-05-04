import Link from 'next/link';

const CustomLink = ({
    as,
    href,
    ...otherProps
}: {
    as: string;
    href: string;
})=>
    href.startsWith('/') || href === '' ? (
        <Link href={href} passHref>
            <a {...otherProps}/>
        </Link>
    ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" {...otherProps}/>
    );

export default CustomLink;