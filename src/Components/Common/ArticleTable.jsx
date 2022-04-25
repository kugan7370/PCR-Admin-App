import React from 'react'

function ArticleTable({ PostData }) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Title Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Email</th>
                    <th scope="col">Category</th>

                </tr>
            </thead>
            <tbody>
                {PostData && PostData.map((doc, i) => (<tr>
                    <td>{i + 1}</td>

                    <td>
                        <img style={{ height: 50, width: 50, borderRadius: 10 }} src={doc.titleImage} alt="" />
                    </td>
                    <td>{doc.title.length > 15 ? doc.title.slice(0, 15) + '....' : doc.title}</td>

                    <td>{doc.usermail}</td>
                    <td>{doc.category}</td>
                </tr>))}


            </tbody>
        </table>
    )
}

export default ArticleTable