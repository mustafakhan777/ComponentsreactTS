type cardtypes = {
    Name: string,
    // fatherName: string,
    Learning: string,
    isApproved: string,
    phone: string
}




export default function card(props: cardtypes) {
    const { Name, Learning, isApproved, phone } = props
    return (
        <>
            <h2 className="components-heading">Card Component 4</h2>

            <div className="card">
                <p> Name :{props.Name}</p>
                <p>Learning:{props.Learning}</p>
                <p>Status:{props.isApproved}</p>
                <p>Phone:{props.phone}</p>

            </div>




        </>
    )
}