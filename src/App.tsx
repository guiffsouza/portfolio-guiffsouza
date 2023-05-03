import GlobalStyle from "./components/globalstyle";
import HomePage from "./pages/home";
import ThemeProvider from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle/>
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
