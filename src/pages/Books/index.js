import { Button, Grid, Modal, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getDetail } from "../../api/books";
import Header from "../../components/Header";
import { setLoading } from "../../redux/actions/categoryActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "16px",
  p: 1,
};

export default function Books() {
  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    setBookData(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [bookData, setBookData] = useState();

  const error = useSelector((state) => state.categories.error);
  const loading = useSelector((state) => state.categories.loading);
  const [categoryInfo, setCategoryInfo] = useState();
  const location = useLocation();
  const { url } = useParams();
  useEffect(async () => {
    const detail = await getDetail(url);
    console.log(detail.data);
    setCategoryInfo(detail.data);
    setLoading(false);
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Paper
            elevation={0}
            sx={{
              flex: 1,
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <img
                style={{
                  height: "300px",
                  display: "block",
                  margin: "0 auto",
                  borderRadius: "8px 8px 0 0",
                }}
                src={bookData && bookData.book_image}
                alt=""
              />
            </div>
            <Stack
              direction="column"
              justifyContent={"space-between"}
              style={{
                padding: "10px 20px",
                flex: 1,
                textAlign: "center",
              }}
            >
              <div>
                <Typography fontWeight="bold">
                  Title: {bookData && bookData.title}
                </Typography>
                <Typography style={{ color: "#8F8F8F" }}>
                  Author: {bookData && bookData.author}
                </Typography>
                <Typography style={{ color: "#8F8F8F" }}>
                  Price: {bookData && bookData.price}
                </Typography>
                <Typography style={{ color: "#8F8F8F" }}>
                  Publisher: {bookData && bookData.publisher}
                </Typography>
                <Typography style={{ color: "#8F8F8F" }}>
                  Description:
                </Typography>
                <Typography style={{ color: "#8F8F8F" }}>
                  {bookData && bookData.description}
                </Typography>
              </div>
              <Stack
                direction="row"
                justifyContent="center"
                spacing={1}
                sx={{ margin: "10px 0" }}
              >
                <a
                  style={{
                    padding: "12px 24px",
                    textDecoration: "none",
                    display: "inline-block",
                    background: "#14668C",
                    color: "white",
                    borderRadius: "16px",
                    width: "200px",
                    textAlign: "center",
                  }}
                  href={bookData && bookData.amazon_product_url}
                  target="_blank"
                >
                  Buy
                </a>
              </Stack>
            </Stack>
          </Paper>
        </Paper>
      </Modal>
      <Header />
      {!error ? (
        loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <Typography variant="h4" textAlign="center" margin="40px 0">
              {categoryInfo.list_name}
            </Typography>
            <Grid container marginBottom="40px" spacing={2}>
              {categoryInfo.books.map((book) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{ display: "flex" }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      flex: 1,
                      borderRadius: "8px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "8px 8px 0 0",
                        }}
                        src={book.book_image}
                        alt=""
                      />
                    </div>
                    <Stack
                      direction="column"
                      justifyContent={"space-between"}
                      style={{
                        padding: "10px 20px",
                        flex: 1,
                      }}
                    >
                      <div>
                        <Typography fontWeight="bold">
                          Title: {book.title}
                        </Typography>
                        <Typography style={{ color: "#8F8F8F" }}>
                          Author: {book.author}
                        </Typography>
                        <Typography style={{ color: "#8F8F8F" }}>
                          Price: {book.price}
                        </Typography>
                      </div>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        spacing={1}
                        sx={{ margin: "10px 0" }}
                      >
                        <a
                          style={{
                            padding: "12px 24px",
                            textDecoration: "none",
                            display: "inline-block",
                            background: "#14668C",
                            color: "white",
                            borderRadius: "16px",
                          }}
                          href={book.amazon_product_url}
                          target="_blank"
                        >
                          Buy
                        </a>
                        <button
                          onClick={() => {
                            handleOpen(book);
                          }}
                          style={{
                            padding: "12px 24px",
                            textDecoration: "none",
                            display: "inline-block",
                            background: "#14668C",
                            color: "white",
                            borderRadius: "16px",
                            outline: "none",
                            border: "none",
                          }}
                        >
                          More
                        </button>
                      </Stack>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
        )
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Something went wrong :(
          </Typography>
        </Grid>
      )}
      <Outlet />
    </div>
  );
}
