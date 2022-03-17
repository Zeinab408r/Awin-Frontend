import "./App.css";
import Header from "./components/header/Header.jsx";
import SimpleBottomNavigation from "./components/MainNav.jsx";
import SubCategory from "./components/subCategory/SubCategory.jsx";
import Category from "./components/category/Category.jsx";
import { Container } from "@material-ui/core";

function App() {
  return (
   
    <div>
      <Header />
      <div className="app">
        <Container>
          <Category />
          <SubCategory/>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
