import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../images/Logo.png";
import hero from "../images/hero.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        flexWrap="wrap"
        sx={{ padding: "10px 20px" }}
      >
        <Link to="/">
          <img style={{ width: "240px" }} src={logo} alt="" />
        </Link>
        <FormControl
          sx={{ m: 1, width: "340px", borderRadius: "16px" }}
          variant="outlined"
        >
          <OutlinedInput
            sx={{ borderRadius: "16px" }}
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </FormControl>
      </Stack>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", filter: "contrast(60%)" }}
          src={hero}
          alt=""
        />
        <Typography
          variant="h1"
          element="h1"
          sx={{
            position: "absolute",
            width: "70%",
            margin: "0 auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "62px",
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            WebkitTextStroke: "0.3px black",
          }}
        >
          BookShop - easy buy books online
        </Typography>
      </div>
    </div>
  );
}
