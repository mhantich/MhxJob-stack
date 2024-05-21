import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { useDispatch, useSelector } from "react-redux";
import { selectwrokerOfferss, wrokerOffercasync } from "../../../redux/offerce/offeresSlice";
import { selectLoggedInUser } from "../../../redux/auth/AuthSlice";

const columns = [
  { field: "_id", headerName: "_id", width: 150 },
  { 
    field: "date", 
    headerName: "date", 
    width: 150, 

  },
  { 
    field: "status", 
    headerName: "status", 
    width: 150, 

  },
  { 
    field: "workOfferId", 
    headerName: "workOfferId", 
    width: 150, 

  },
  { field: "createdAt", headerName: "createdAt", width: 200 },
  { field: "updatedAt", headerName: "updatedAt", width: 200 },
];
;




const JobsDataGrid = () => {
 
  const currentUser = useSelector(selectLoggedInUser);
  const jobss = useSelector(selectwrokerOfferss);
  console.log(jobss)

  // Map each row to include a unique `id` property
  const rowsWithIds = jobss?.map((row) => ({
    ...row,
    id: row._id, // Assuming `_id` is a unique identifier
  }));



  const dispatch = useDispatch();

  useEffect(() => {
    if (jobss===null){
      dispatch(wrokerOffercasync(currentUser._id));
    }
  
  }, [dispatch]);
console.log(jobss)
  return (
    <>

<h1>data</h1>

    {jobss === null && <h1>no data</h1>}
      {jobss?.length > 0 && (
        <div style={{ height: 400, width: "100%",marginBlockStart:'2rem' }}>
        
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

export default JobsDataGrid;
