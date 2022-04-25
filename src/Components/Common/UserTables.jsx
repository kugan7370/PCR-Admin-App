import React from 'react'

function UserTables({ userData }) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Pic</th>
                    <th scope="col">Email</th>

                </tr>
            </thead>
            <tbody>
                {userData && userData.map((doc, i) => (<tr>
                    <td>{i}</td>

                    <td>
                        <img style={{ height: 50, width: 50, borderRadius: 25 }} src={doc.pro_pic} alt="" />
                    </td>
                    <td>{doc.username}</td>
                    <td>{doc.email}</td>
                </tr>))}


            </tbody>
        </table>
    )
}

export default UserTables