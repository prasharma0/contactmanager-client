
import Navbar from "./Navbar";

const Layout = ({ navbar = true, children})=>{ //destructuring the children so that it gives spaces for the every part of our app
    return(
        <>
        {navbar && <Navbar />}
        <div className = "container mt-3">{children} </div>
        </>
    );
};
export default Layout;