import {
  Box,
  Container,
  Grid,
  Card,
  CardActions,
  MenuItem,

  FormGroup,
  FormControlLabel,
  Checkbox,
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Stack,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";

import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link, useLocation, useNavigate } from "react-router-dom";

import React, { useEffect } from "react";
import {
  getofferessAsync,
  selectgetofferesStatus,
  selectofferess,
} from "../../../redux/offerce/offeresSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectCatis } from "../../../redux/cati/CatiSlice";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { loadingAnimation, notfoundAnimation } from "../../animation";
import Lottie from "lottie-react";
function Offerce() {

  const location = useLocation();
  const [filters, setFilters] = useState({});
  const [jobDeatls, setJobDetails] = useState(location.state?.JobId);
  const [sort, setSort] = useState(null);
  const brands = ["morocco", "usa", "egypit", "france", "canada", "germany"];
  const city = ["new york", "paris", "casa", "London"];
  const handleBrandFilters = (e) => {
    const country = e.target.value;
    const isChecked = e.target.checked;

    // If 'isChecked' is true, the brand is being checked, so we add it to the filter
    if (isChecked) {
      // If 'filters.brand' exists, concatenate the new brand to the existing brand array
      // If not, create a new array with the new brand
      setFilters((prevFilters) => ({
        ...prevFilters,
        country: country,
      }));
    } else {
      setFilters(({ country, ...prevFilters }) => ({
        ...prevFilters,
      }));
    }
  };
  const handlecityFilters = (e) => {
    const city = e.target.value;
    const isChecked = e.target.checked;

    // If 'isChecked' is true, the brand is being checked, so we add it to the filter
    if (isChecked) {
      // If 'filters.brand' exists, concatenate the new brand to the existing brand array
      // If not, create a new array with the new brand
      setFilters((prevFilters) => ({
        ...prevFilters,
        city: city,
      }));
    } else {
      // If 'isChecked' is false, the brand is being unchecked, so we remove it from the filter
      // Use filter method to remove the unchecked brand from the array
      setFilters(({ city, ...prevFilters }) => ({
        ...prevFilters,
      }));
    }
  };
  const handleCatiFilters = (e) => {
    const cati = e.target.value;
    const isChecked = e.target.checked;

    // If 'isChecked' is true, the cati is being checked, so we add it to the filter
    if (isChecked) {
      // If 'filters.cati' exists, concatenate the new cati to the existing cati array
      // If not, create a new array with the new cati
      setFilters((prevFilters) => ({
        ...prevFilters,
        cati: cati,
      }));
    } else {
      // If 'isChecked' is false, the cati is being unchecked, so we remove it from the filter
      // Use filter method to remove the unchecked cati from the array
      setFilters(({ cati, ...prevFilters }) => ({
        ...prevFilters,
      }));
    }
  };
  const dispatch = useDispatch();
  const cati = useSelector(selectCatis);
  const offerce = useSelector(selectofferess);
  const [isProductFilterOpen, setToggle] = useState(false);
  const sortOptions = [
    { name: "Price: low to high", sort: "salary", order: "asc" },
    { name: "Price: high to low", sort: "salary", order: "desc" },
  ];

  const stutu = useSelector(selectgetofferesStatus);


  useEffect(() => {
    const finalFilters = { ...filters };
    finalFilters["sort"] = JSON.parse(sort);
    if (jobDeatls) {
      finalFilters["JObid"] = jobDeatls.JobId;
    }

    dispatch(getofferessAsync(finalFilters));
  }, [filters, sort, jobDeatls,dispatch]);
  const navigate = useNavigate();
  const handlerest = () => {
    setFilters("");
    setJobDetails("");
    setSort(null);
    navigate("/Offers", { state: { JobId: "" } });
  };
  return (
    <Container>
      <Box sx={{ marginBlock: "5rem" }}>
        <motion.div
          style={{
            position: "fixed",
            backgroundColor: "white",
            top: "0%",
            height: "100vh",
            padding: "1rem",
            overflowY: "auto",
            width: "25rem",
            zIndex: 500,
          }}
          variants={{ show: { left: 0 }, hide: { left: -500 } }}
          initial={"hide"}
          transition={{ ease: "easeInOut", duration: 0.7, type: "spring" }}
          animate={isProductFilterOpen === true ? "show" : "hide"}
        >
          <Button
            onClick={() => {
              setToggle(false);
            }}
          >
            <CloseIcon />
          </Button>

          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="brand-filters"
              id="brand-filters"
            >
              <Typography>Country</Typography>
            </AccordionSummary>

            <FormGroup onChange={handleBrandFilters}>
              {brands?.map((brand) => (
                <div style={{ width: "fit-content" }} key={brand}>
                  <AccordionDetails sx={{ p: 0 }}>
                    <FormControlLabel
                      sx={{ ml: 1 }}
                      control={
                        <Checkbox
                          checked={filters?.country === brand}
                          onChange={handleBrandFilters}
                          value={brand}
                        />
                      }
                      label={brand}
                    />
                  </AccordionDetails>
                </div>
              ))}
            </FormGroup>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="brand-filters"
              id="brand-filters"
            >
              <Typography>city</Typography>
            </AccordionSummary>

            <FormGroup onChange={handlecityFilters}>
              {city?.map((city) => (
                <div style={{ width: "fit-content" }} key={city}>
                  <AccordionDetails sx={{ p: 0 }}>
                    <FormControlLabel
                      sx={{ ml: 1 }}
                      control={
                        <Checkbox
                          checked={filters?.city === city}
                          onChange={handlecityFilters}
                          value={city}
                        />
                      }
                      label={city}
                    />
                  </AccordionDetails>
                </div>
              ))}
            </FormGroup>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="cati-filters"
              id="cati-filters"
            >
              <Typography>cati</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ p: 0 }}>
              <FormGroup onChange={handleCatiFilters}>
                {cati?.map((cati) => (
                  <div style={{ width: "fit-content" }} key={cati._id}>
                    <FormControlLabel
                      sx={{ ml: 1 }}
                      control={
                        <Checkbox
                          checked={filters?.cati === cati._id}
                      
                          value={cati._id}
                        />
                      }
                      label={cati.name}
                    />
                  </div>
                ))}
              </FormGroup>
            </AccordionDetails>

            <AccordionDetails sx={{ p: 0 }}></AccordionDetails>
          </Accordion>
          

          <Stack
            flexDirection={"row"}
            mr={"2rem"}
            mt={"2rem"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            columnGap={5}
          >
            <Stack alignSelf={"flex-end"} width={'100%'}>
              <FormControl fullWidth>
                <label id="sort-dropdown">Sort</label>
                <Select
                  variant="standard"
                  labelId="sort-dropdown"
                  label="Sort"
                  onChange={(e) => setSort(e.target.value)}
                  value={sort || ""}
                >
                  <MenuItem bgcolor="text.secondary" value={null}>
                    Reset
                  </MenuItem>
                  {sortOptions.map((option, index) => (
                    <MenuItem key={index} value={JSON.stringify(option)}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Stack>

          {/* {jobDeatls && (
            <TextField
              id="standard-basic"
              label="job saerched"
              variant="standard"
              value={jobDeatls.jobName || ""}
            />
          )} */}
          <Button mt={1} sx={{width:'100%',marginBlock:'2rem'}} onClick={handlerest}>Rest</Button>
        </motion.div>
        <Button
          mt={2}
          onClick={() => {
            setToggle(true);
          }}
        >
      
          <FilterListIcon /> Filter
        </Button>
        <Box sx={{ marginBlock: "5rem" }}>
        {stutu === "rejected" || offerce?.length === 0 ? (
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
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
{offerce?.map((offerce, index) => (
  <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={offerce.photo}
          alt={offerce.name}
          sx={{
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <CardContent>
          <Box>
                <Typography gutterBottom variant="h5" sx={{fontWeight:'bold'}} component="span">
              {offerce.name}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontSize: "0.6rem" }}
              component="span"
            >
              {offerce.country}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontSize: "0.6rem" }}
              component="span"
            >
              {offerce.city}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontSize: "0.6rem" }}
              component="span"
            >
              {offerce.salary}/1H
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontSize: "0.6rem" }}
              component="span"
            >
              {offerce.hoursWork} Hours
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1",
            }}
          >
    

            <Box sx={{ display: "flex", gap: "1" }}>
              {offerce?.categories?.map((item, index) => (
                 <p
                 key={index}
                 style={{ fontSize: "0.6rem", color: "#616161",padding:"0.2rem",borderRadius:"0.5rem",backgroundColor:"#f5f5f5" }}
               >
                 {item.name}
               </p>
              ))}
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{ width: "100%" }}
          color="secondary"
          variant="outlined"
        >
          <Link to={`/offers/${offerce._id}`}> Hire Now </Link>
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
      </Box>
    </Container>
  );
}

export default Offerce;
