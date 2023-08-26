type buttonTypes = {
    label: string,
    onClick: any
}


export default function Button(props: buttonTypes) {
    const { label, onClick } = props;

    return (
        <>
            <div className="border my-2 p-2">

                <h2 className="components-heading">Button Component 2</h2>
                <button className="btn btn-warning" onClick={props.onClick}>{props.label}</button>
            </div>
        </>
    )

}