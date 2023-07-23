import { Box, Divider, Typography, makeStyles } from "@material-ui/core";

import React from "react";
import { useState } from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import YourPersonal from "./YourPersonal";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Motion from "src/component/Motion";
const useStyles = makeStyles((theme) => ({
  mainStepperBox: {
    height:"555px",
    [theme.breakpoints.down("sm")]:{
        height:"auto",
    },
    "& .steppBox": {
      display: "flex",
      "& .hrLine": {
        position: "absolute",
        top: "auto",
        left: "-1px",
        width: "100%",
      },
      "& .boxesmid": {
        width: "20%",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
        "& p": {
          fontSize: "13px",
          color: "#72849AB2",
          fontWeight: "500",
        },
        "& svg": {
          color: "#72849AB2",
          marginBottom: "3px",
          position:"relative",
          zIndex:"9"
        },
      },
      "& .active": {
        width: "20%",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
        "& p": {
          fontSize: "13px",
          color: "#5A75D7",
          fontWeight: "700",
        },
        "& svg": {
          color: "#78C600",
          marginBottom: "3px",
          position:"relative",
          zIndex:"9"
        },
      },
    },
  },
  mainbigStep:{
    padding:"16px 32px",
    [theme.breakpoints.down("sm")]:{
      padding:"16px 10px",
  },
  }
}));

export default function MainStepper() {
  const classes = useStyles();
  const [tab, setTabs] = useState("step1");
  return (
    <Box className={classes.mainStepperBox}>
    <Box style={{overflowX:"scroll"}}>


    <Box  style={{width:"1000px"}}>

      <Box className="steppBox">
        <Divider className="hrLine" style={{ top: "45px" }} />
        <Box
          onClick={() => setTabs("step1")}
          className={tab === "step1" ? "active" : "boxesmid"}
        >
          <Typography variant="body1">Stage 1</Typography>
          <Box pt={1}>
            <MdOutlineRadioButtonChecked />
          </Box>
          <Typography variant="body1">Your personal space</Typography>
        </Box>
        <Box
          onClick={() => setTabs("step2")}
          className={tab === "step2" ? "active" : "boxesmid"}
        >
          <Typography variant="body1">Stage 2</Typography>
          <Box pt={1}>
            <MdOutlineRadioButtonChecked />
          </Box>
          <Typography variant="body1">Eligibility for your best fit</Typography>
        </Box>
        <Box
          onClick={() => setTabs("step3")}
          className={tab === "step3" ? "active" : "boxesmid"}
        >
          <Typography variant="body1">Stage 3</Typography>
          <Box pt={1}>
            <MdOutlineRadioButtonChecked />
          </Box>
          <Typography variant="body1">Apply to University</Typography>
        </Box>
        <Box
          onClick={() => setTabs("step4")}
          className={tab === "step4" ? "active" : "boxesmid"}
        >
          <Typography variant="body1">Stage 4</Typography>
          <Box pt={1}>
            <MdOutlineRadioButtonChecked />
          </Box>
          <Typography variant="body1">Application Status</Typography>
        </Box>
        <Box
          onClick={() => setTabs("step5")}
          className={tab === "step5" ? "active" : "boxesmid"}
        >
          <Typography variant="body1">Stage 5</Typography>
          <Box pt={1}>
            <MdOutlineRadioButtonChecked />
          </Box>
          <Typography variant="body1">Visa Status</Typography>
        </Box>
      </Box>
    </Box>
    </Box>
      <Box className={classes.mainbigStep} >
        {tab === "step1" && 
        <Motion>
        <YourPersonal />
        </Motion>
        }
        {tab === "step2" && <Motion>
        <Step2 />
        </Motion> }
        {tab === "step3" &&<Motion>
        <Step3 />
        </Motion>}
        {tab === "step4" && <Motion>
        <Step4 />
        </Motion>}
        {tab === "step5" && <Motion>
        <Step5 />
        </Motion>}
      </Box>
    </Box>
  );
}
