import { Box } from "@mui/material";

import image from "../../assets/images/yo.gif";

const AboutUs = () => {
  return (
    <Box m={5} display="flex" justifyContent="center" alignItems="center">
      <img
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="yo"
        src={image}
      />
    </Box>
  );
};

export default AboutUs;
