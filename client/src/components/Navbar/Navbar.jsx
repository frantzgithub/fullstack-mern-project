import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
export const Navbar = () => {
  return (
    <div className={style.mainContainer}>
        <Link to="/home">Home</Link>
        <Link to="/detail">Detail</Link>
        <Link to="/create">Form</Link>
    </div>
  )
}
