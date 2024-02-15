import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import styles from "./form.module.scss";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    ValidateEmail({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  function ValidateEmail(form) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
      console.log("email is valid");
    }else{
    console.log("You have entered an invalid email address!");
  }
}

const handleSubmit = async (e) => {
  e.preventDefault()
  const addData = await axios.post('http://localhost:3002/users', form)
  //.then(res => alert(res))
  //.catch(err => console.log(err))
  const json = await addData;
  console.log(json)
  dispatch({type: "ADD_USERS", payload: json})

  navigate('/home')

 form.email = ''
 form.name = ''
 form.phone = ''

}

  return (
    <section className={styles.form}>
      <h2>register new user</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={form.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            value={form.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default Form;
