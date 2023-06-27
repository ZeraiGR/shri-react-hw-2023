export default function Detail ({title, value}: {title: string, value: string | number}) {
    return (
        <>
            {!!value && <li><strong>{title}:</strong> {value}</li>}
        </>
    )
}
