import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import store from "./redux/store";
import Books from "./pages/Books";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container sx={{ maxWidth: "1440px !important" }} fixed>
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/:url" element={<Books />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
