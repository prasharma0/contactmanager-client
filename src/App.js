import {Routes as Switch, Route} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {AuthContextProvider} from "./context/AuthContext";

const App = ()=>{
  return (
    <AuthContextProvider>
    <Layout> 
    <Switch>
      <Route path ="/" element = {<Home />} />
      <Route path ="/login" element = {<Login />} />
      <Route path ="/register" element = {<Register />} />
    </Switch>
    
    </Layout>

    </AuthContextProvider>
    
  )};
export default App;