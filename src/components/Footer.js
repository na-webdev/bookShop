import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import algo from "../images/Algorismic.png";

export default function Footer() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "20px", backgroundColor: "#C4C4C4" }}
    >
      <Link to="/">
        <img style={{ width: "200px" }} src={logo} alt="" />
      </Link>
      <a href="https://www.algorismic.uz/" target="_blank">
        <img style={{ width: "200px" }} src={algo} alt="" />
      </a>
    </Stack>
  );
}
