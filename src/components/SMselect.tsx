type selectbox = {
    label: string,
    options: any[],
    getValue: any

}


export default function SMSelect(props: selectbox) {
    const { options, label, getValue } = props;

    let selectChange = (val: string) => {
        getValue(val);


    };

    return (
        <>
            <div className="select">
                <h2 className="components-heading">Select Component 2</h2>
                <p className="label">{label}</p>
                <select onChange={(e) => selectChange(e.target.value)}>
                    {options &&
                        Array.isArray(options) &&
                        options.map((x, i) => (
                            <option key={i} value={x.value}>
                                {x.displayName}
                            </option>
                        ))}
                </select>


            </div>
        </>
    );
}