import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "@/components/ui/provider";
import { Box, Button, Container, Theme } from "@chakra-ui/react";
import TodoProvider from "./context/TodoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <Provider>
        <Theme appearance="light">
          <Container>
            <App />
          </Container>
        </Theme>
      </Provider>
    </TodoProvider>
  </StrictMode>
);
