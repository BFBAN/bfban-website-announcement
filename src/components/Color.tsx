export default function Color({child, color}) {
    return (
        <span style={{
            backgroundColor: color
        }}>
            {child}
        </span>
    )
}
