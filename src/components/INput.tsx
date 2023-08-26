type inputtypes = {
    type: string,
    onChange: any
}


export default function INput(props: inputtypes) {
    const { type, onChange } = props
    return (
        <>
            <div className="input">
                <h2 className="components-heading">Input Component 1</h2>
                <input style={{ width: "300px" }} type={props.type} onChange={props.onChange} />
            </div>
        </>
    )
}