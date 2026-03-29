import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Navigationbar from "./components/Navbar/Navbar";
import ScreenSizeProvider from "./screenSizeContext/ScreenSizeProvider";

test("renders the main navigation", () => {
  render(
    <MemoryRouter>
      <ScreenSizeProvider>
        <Navigationbar />
      </ScreenSizeProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("About")).toBeInTheDocument();
});
