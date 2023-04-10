import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100%" }}
    >
      <App />
    </Container>
  </BrowserRouter>
);

reportWebVitals();
