import {
  Accordion,
  
  AccordionDetails,
  AccordionSummary,
  Box,
 
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PeopleTho() {
  const data = [
    "whats shipping methode",
    "how to pay",
    "how to get refund",
    "do you ship internationally",
  ];
  return (
    <Box sx={{paddingBlock:'5rem'}}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                flexDirection: "Column",
                justifyContent: "center",
              }}
            >
              <Box>
              <Typography sx={{ fontWeight: "bold",  fontSize: { xs: "1rem", md: "2rem" },}} variant="h4">
              
                  thing people often ask
                </Typography>
                <Typography sx={{ fontWeight: "bold",color:'secondary.main', fontSize: { xs: "1rem", md: "2rem" },}} variant="h4">

                  about job
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: { xs: "0.5rem", md: "0.8rem" }
                   
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                  eos.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                width: {xs:'100%',md:'50%'},
                borderRadius: "0.5rem",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  transition: "all 0.6s ease-in-out",
                  color: "white",
                },
              }}
              m={1}
              p={1}
            >
              <Typography sx={{ fontWeight: "bold",  fontSize: { xs: "0.7rem", md: "1rem" },}}> 1 shopping methoods</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                width: {xs:'100%',md:'50%'},
                borderRadius: "0.5rem",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  transition: "all 0.6s ease-in-out",
                  color: "white",
                },
              }}
              m={1}
              p={1}
            >
              <Typography sx={{ fontWeight: "bold",  fontSize: { xs: "0.7rem", md: "1rem" },}}> 2 payment methoods</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                width: {xs:'100%',md:'50%'},
                borderRadius: "0.5rem",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  transition: "all 0.6s ease-in-out",
                  color: "white",
                },
              }}
              m={1}
              p={1}
            >
              <Typography sx={{ fontWeight: "bold",  fontSize: { xs: "0.7rem", md: "1rem" },}}>3 shopping methoods</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            {data.map((item,index) => (
              <Accordion sx={{margin:'auto',backgroundColor:'white'}} key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{  fontWeight: "bold" ,fontSize: { xs: "0.7rem", md: "1rem" }}}
                >
                  {item}
                </AccordionSummary>
                <AccordionDetails sx={{fontSize: { xs: "0.6rem", md: "0.9rem" }}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PeopleTho;
