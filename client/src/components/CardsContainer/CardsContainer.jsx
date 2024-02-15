import { Link } from "react-router-dom";
import { Card } from "../Card/Card"
import style from "./CardsContainer.module.scss";
import { useSelector } from "react-redux"
export const CardContainer = () => {
    const users = useSelector(state => state.users)
  return (
    <div className={style.container}>
        {users.map((user) => {
            return <Link to={`/detail/${user.id}`}>
            <Card
				        key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
            />
            </Link>
        })}
    </div>
  )
}
