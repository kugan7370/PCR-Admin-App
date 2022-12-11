import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import UserTables from "../../Components/Common/UserTables";
import { DataGrid } from "@material-ui/data-grid";
import { auth, db } from "../../Firebase";

function User() {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const ref = collection(db, "users");
    const snap = onSnapshot(ref, (snapshot) => {
      let userData = [];
      if (isMounted) {
        snapshot.docs.map((doc) => {
          userData.push({ ...doc.data(), id: doc.id });
        });
      }
      setuserData(userData);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 400 },
    {
      field: "user",
      headerName: "Username",
      width: 250,

      renderCell: (params) => (
        <div className="">
          <img
            style={{ height: 30, width: 30, borderRadius: 15, marginRight: 20 }}
            src={params.row.pro_pic}
            alt=""
          />
          {params.row.username}
        </div>
      ),

      editable: true,
    },

    {
      field: "email",
      headerName: "Email",
      width: 350,
      editable: true,
    },
  ];

  // const rows = [
  //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

  return (
    <div className="mt-2" style={{ height: "95%", width: "100%" }}>
      <h4>Users</h4>
      <div style={{ height: "100%", width: "100%" }}>
        {userData?.length > 0 && (
          <DataGrid
            rows={userData}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        )}
      </div>

      {/* <div className="user-analysis-image">
                <img src="https://i0.wp.com/www.rwdigital.ca/wp-content/uploads/2022/03/Search-Engine-Optimization-SEO.png?fit=421%2C295&ssl=1" height="350px" alt="" srcset="" />
            </div> */}
    </div>
    // <UserTables userData={userData} />
  );
}

export default User;
