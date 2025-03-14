import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { Home } from "./pages/Home"
import { ThemeContextProvider } from "./contexts/ThemeContext"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  </StrictMode>
)
