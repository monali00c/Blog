import SinglePost from "../../singlePost/singlePost"
import Sidebar from "../../Sidebar/Sidebar";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar/>
    </div>
  );
}