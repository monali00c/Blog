import "./home.css"
import Header from "../../header/Header"
import Posts from "../../Posts/Posts"
import Sidebar from "../../Sidebar/Sidebar"
export default function Home() {
  return (
    <>
    <Header/>
    <div className="Home">
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}
