import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectwrokerOfferss, wrokerOffercasync } from "../../../redux/offerce/offeresSlice";
import { selectLoggedInUser } from "../../../redux/auth/AuthSlice";

const OfferceGrid = () => {
  const selectwrokerOffers = useSelector(selectwrokerOfferss);
  const currentUser = useSelector(selectLoggedInUser);


  const columns = [
    { field: "_id", headerName: "_id", width: 150 },
    { field: "jobId", headerName: "jobId", width: 150 },


    { 
      field: "photo", 
      headerName: "photo", 
      width: 150, 
      renderCell: (params) => (
        <img src={params.value} alt="Job" style={{ width: '100px', height: 'auto' }} />
      ) 
    },

    { field: "status", headerName: "status", width: 200 },
    { field: "country", headerName: "country", width: 200 },
    { field: "city", headerName: "city", width: 200 },
    { field: "salary", headerName: "salary", width: 200 },
    { field: "createdAt", headerName: "createdAt", width: 200 },
    { field: "updatedAt", headerName: "updatedAt", width: 200 },
  ];
  ;
  
  // Map each row to include a unique `id` property
  const rowsWithIds = selectwrokerOffers?.map((row) => ({
    ...row,
    id: row._id, // Assuming `_id` is a unique identifier
  }));

  const dispatch = useDispatch();

  useEffect(() => {
   
      dispatch(wrokerOffercasync(currentUser?._id));
   
  
  }, [dispatch,currentUser]);

  return (
    <>
      {selectwrokerOffers?.length > 0 && (
        <div style={{ height: 400, width: "100%" }}>
          <Link to="/admin/post">
            <Button>create new job</Button>
          </Link>
          <DataGrid
            rows={rowsWithIds} // Pass rows with unique `id` property
            columns={columns}
            pageSize={5}
            pagination
          />
        </div>
      )} 

    </>
  );
};

export default OfferceGrid;
