import { Box, Container, Grid, Card, CardActions } from "@mui/material";
import Lottie from "lottie-react";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectJobs, selectgetjobStatus } from "../../../redux/Jobs/JobSlice";
import {useNavigate } from "react-router-dom";

import React, { useEffect } from "react";
import { getJobsAsync } from "../../../redux/Jobs/JobSlice";

import { loadingAnimation, notfoundAnimation } from "../../animation";

function JobPage() {
  const navigate = useNavigate();
  const stutu = useSelector(selectgetjobStatus);
  const handlejobClick = (JobId) => {
    navigate("/offers", { state: { JobId } });
  };

  const dispatch = useDispatch();
  const jobss = useSelector(selectJobs);
  useEffect(() => {
    dispatch(getJobsAsync());
  }, [dispatch]);
  return (
    <Container>
      <Box sx={{ marginBlock: "5rem" }}>
        {stutu === "rejected" || jobss?.length < 0 ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Lottie
              style={{ width: "14rem", height: "16rem" }}
              animationData={notfoundAnimation}
              loop={false}
            />
          </Box>
        ) : (
          <>
            {stutu === "pending" ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Lottie
                  style={{ width: "14rem", height: "16rem" }}
                  animationData={loadingAnimation}
                  loop={true}
                />
              </Box>
            ) : (
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 6 }}
              >
                {jobss?.map((job, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={job.photo}
                          alt={job.name}
                          sx={{
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            sx={{ fontWeight: "bold" }}
                            component="div"
                          >
                            {job.name}
                          </Typography>

                          <Box sx={{ display: "flex", gap: "1" }}>
                            {job?.categories?.map((item, index) => (
                              <p
                                key={index}
                                style={{ fontSize: "0.6rem", color: "#616161",padding:"0.2rem",borderRadius:"0.5rem",backgroundColor:"#f5f5f5" }}
                              >
                                {item.name}
                              </p>
                            ))}
                          </Box>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          onClick={() => {
                            handlejobClick({
                              JobId: job._id,
                              jobName: job.name,
                            });
                          }}
                          sx={{ width: "100%" }}
                          color="secondary"
                          variant="outlined"
                        >
                          view offers
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </Box>
    </Container>
  );
}

export default JobPage;
