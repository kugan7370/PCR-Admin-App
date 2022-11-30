import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ArticleTable from "../../Components/Common/ArticleTable";
import Tables from "../../Components/Common/UserTables";
import { auth, db } from "../../Firebase";
import { DataGrid } from "@material-ui/data-grid";
import Moment from "react-moment";
import { DeleteForeverOutlined } from "@material-ui/icons";
import { Button, Modal } from "react-bootstrap";
import { async } from "@firebase/util";
import { useConfirm } from "material-ui-confirm";
function Posts() {
  const [PostData, setPostData] = useState([]);
  const confirm = useConfirm();

  const handleDelete = async (id) => {
    confirm({ description: "This action is permanent!" })
      .then(() => {
        const docRef = doc(db, "blogs", id);
        deleteDoc(docRef)
          .then(() => {
            console.log("deleted successfully.");
          })
          .catch((error) => {
            console.log(error);
          });

        console.log(id);
      })
      .catch(() => {
        /* ... */
      });
  };

  useEffect(() => {
    let isMounted = true;
    const ref = collection(db, "blogs");
    const q = query(ref, orderBy("createAt", "desc"));
    const snap = onSnapshot(q, (snapshot) => {
      let PostData = [];
      if (isMounted) {
        snapshot.docs.map((doc) => {
          PostData.push({ ...doc.data(), id: doc.id });
        });
      }
      setPostData(PostData);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const columns = [
    // { field: 'id', headerName: 'id', width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <div>
          {/* <img style={{ height: 30, width: 30, borderRadius: 10, marginRight: 10 }} src={params.row.titleImage} alt="" /> */}
          {params.row.title}
        </div>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      editable: true,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
      editable: true,
    },
    {
      field: "user",
      headerName: "User",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <div className="">
          <img
            style={{ height: 30, width: 30, borderRadius: 15, marginRight: 10 }}
            src={params.row.UserPic}
            alt=""
          />
          {params.row.username}
        </div>
      ),
    },
    {
      field: "usermail",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "createAt",
      headerName: "CreateAt",
      width: 200,
      editable: true,
      renderCell: (params) => (
        <div className="">
          <Moment format="LLL">{params.row.createAt.toDate()}</Moment>
        </div>
      ),
    },

    {
      field: "Delete",
      headerName: "Delete",
      width: 150,
      editable: true,

      renderCell: (params) => (
        <div
          onClick={() => handleDelete(params.row.id)}
          className="text-center p-2 bottom-0"
        >
          <DeleteForeverOutlined className="text-danger" />
        </div>
      ),
    },
  ];

  return (
    // <ArticleTable PostData={PostData} />
    <div className="mt-2" style={{ height: "95%", width: "100%" }}>
      <h4>Posts</h4>
      <div style={{ height: "100%", width: "100%" }}>
        {PostData && (
          <DataGrid
            rows={PostData}
            columns={columns}
            pageSize={7}
            checkboxSelection
            disableSelectionOnClick
          />
        )}
      </div>
    </div>
  );
}

export default Posts;
