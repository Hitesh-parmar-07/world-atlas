import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Headers from "../UI/Headers";

function AppLayout() {
  return( 
  <>
    <Headers/>
      <Outlet></Outlet>  
    <Footer/>
  </>
  )
}

export default AppLayout;
