import "./App.css";
import FullProfile from "./components/FullProfile";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-12">

        
        <Sidebar />
      
        
        <div className="col-span-11 bg-gray-100">

          <Profile />

          <div className="flex gap-x-6 justify-between">

          <ProfileCard />

<FullProfile />

          </div>

          

        </div>
    


      </div>
    
    </>
  );
}

export default App;
