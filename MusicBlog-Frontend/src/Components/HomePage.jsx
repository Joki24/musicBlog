import Blogsection from "./Blogsection";
import Navbar from "./NavBar";
import SectionHomePage from "./SectionHomepage";
import Sidebar from "./Sidebar";

export default function HomePage() {

    return (
        <div classNameName="App">
            <div id="container">
                <Sidebar/>
                <div id="wrap" >
                    <SectionHomePage/>
                    <Blogsection/>
                </div>
            </div>
        </div>
    )
}