import { render, screen } from "@testing-library/react";
import { Link } from "react-router-dom";
import App from "../../App";
import Navbar from "../../components/navbar/Navbar";

test("renders navbar with visible link children", () => {
  render(
    <App>
      <Navbar>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Navbar>
    </App>
  );
  const loginLink = screen.getByText(/Loading/i);
  expect(loginLink).toBeInTheDocument();
});
