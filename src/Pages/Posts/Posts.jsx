import {
  collection,
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

function Posts() {
  const [PostData, setPostData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    console.log(id);
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
      headerName: "title",
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
      field: "title",
      headerName: "title",
      width: 150,
      editable: true,
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
        <>
          <Button variant="white" onClick={handleShow} className="text-center">
            <DeleteForeverOutlined className="text-danger" />
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
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
