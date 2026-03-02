import axios from "axios";
import { useState } from "react";

const App = () => {

  const studentSchema = {
    Name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(studentSchema);
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post( "http://localhost:5000/api/middleware/create", data);

      // console.log(res.data.msg);

      alert(res.data.msg);
      setData(studentSchema);
    } catch (error) {
      console.log(error);            
    }
  };


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login Form</h1>

      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>

        <input type="text" name="Name" placeholder="Name" value={data.Name} onChange={handleChange} required />
        <br /><br />


        <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} required />
        <br /><br />

        <input type="password" name="password" placeholder="password" value={data.password}  onChange={handleChange} required />
        <br /><br />


        <button type="submit">Login</button>

      </form>

      <hr />
    </>
  );
};

export default App;