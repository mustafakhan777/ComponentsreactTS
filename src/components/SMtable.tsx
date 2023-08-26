type tabletypes = {

    datasource: any[];
    cols: any[];
}
export default function SMtabel(props: tabletypes) {
    const { datasource, cols } = props;
    return (

        <>
            <h2 className="components-heading">Table Component 5</h2>
            <table border={1} className="table" >
                <thead>
                    <tr>
                        {
                            cols.map((x, i) => <th>{x.heading}</th>)
                        }

                    </tr>
                </thead>
                <tbody>
                    {datasource.map((row, i) => <tr>
                        {
                            cols.map((col, i) => <td>{row[col.key]}</td>)
                        }
                    </tr>)}
                    <tr>

                    </tr>
                </tbody>


            </table>
        </>
    )
}