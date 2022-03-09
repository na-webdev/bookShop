import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../api/books";
import Header from "../../components/Header";
import book from "../../images/book.png";
import { setLoading } from "../../redux/actions/categoryActions";

export default function Categories() {
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);
  const categories = useSelector((state) => state.categories.categories);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <Header />
      <Typography variant="h4" textAlign="center" margin="40px 0">
        Categories
      </Typography>
      <Grid container marginBottom="40px" spacing={2}>
        {!error ? (
          loading ? (
            <h1>Loading...</h1>
          ) : (
            categories.map((category, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{ display: "flex" }}
                  onClick={() => {
                    navigate(`/${category.list_name_encoded}`, {
                      name: category.display_name,
                    });
                    setLoading(true);
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{ textAlign: "center", padding: "20px", flex: 1 }}
                  >
                    <img src={book} alt="" />
                    <Typography sx={{ fontWeight: "bold" }}>
                      {category.display_name}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })
          )
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Something went wrong :(
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
