import StartPage from "./pages/StartPage";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StartPage />
    </ThemeProvider>
  );
}
export default App;
