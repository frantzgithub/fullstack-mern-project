import { CardContainer } from "../../components/CardsContainer/CardsContainer";
import {useDispatch} from "react-redux"
import { getUsers } from "../../redux/action";
import { useEffect } from "react";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  return (
    <>
        <h1>this is the home page</h1>
        <CardContainer />
    </>
  )
}

export default Home