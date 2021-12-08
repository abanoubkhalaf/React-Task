const Table = (props) => {


    const headers = [
       "Name" ,"Phone" , "Email", "UserName" , "City" , "Company"
    ]

    
    return (
        <div>
            <table className='table-auto w-full'>
                <thead>
                <tr className='bg-gray-100 h-10 w-full'>
                        {headers.map((title) => {
                            return <td className='text-center border-r-2 border-green-200 p-0.5	' key={Math.random()}>{title} </td>
                })}
                </tr>
                </thead>
                {props.data.map((member) => {
                    return (<tbody key={member.id}>
                        <tr >
                        <td className='text-sm text-left border-r-2 border-green-200 p-2'>{member.name}</td>
                        <td className='text-sm text-left border-r-2 border-green-200 p-2 '>{member.phone}</td>
                        <td className='text-sm text-left border-r-2 border-green-200 p-2 '>{member.email}</td>
                        <td className='text-sm text-left border-r-2 border-green-200 p-2'>{member.username}</td>
                        <td className='text-sm text-left border-r-2 border-green-200 p-2'>{member.address.city}</td>
                        <td className='text-sm text-left border-r-2 border-green-200 p-2'>{member.company.name}</td>
                        </tr>
                    </tbody>)
                })}
            </table>
        </div>
    )
}


export default Table;