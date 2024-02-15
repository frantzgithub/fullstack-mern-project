import  axios  from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import styles from "./detail.module.scss"

const Detail = () => {
  const params = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3002/users/${params.id}`)
      const data = await response.data;

      if (response) {
        console.log(data)
        setDetail(data)
      }
    
    }
    fetchData();
  }, [])


    return (
      <>
          {detail && <div className={`container ${styles.detail}`}>
            <h2>{detail.name}</h2>
            <h4>{detail.email}</h4>
            <p>{detail.phone}</p>
            
            <h1> user post</h1>
            {detail.Posts && detail.Posts.length > 0 ? <div>
              {detail.Posts.map((post) => {
                return <>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </>
              })}</div> : <p>this user do not have any post yet</p>}
          </div>
          }
      </>
    )
  }
  
  export default Detail