import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './sections/Section1';  
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';
import Section7 from './sections/Section7';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
