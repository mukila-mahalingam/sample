import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyApp = () => {
  const [data, setData] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { id, value } = e.target;
    setData((prevState) => ({ ...prevState, [id]: value }));
  };

  const array=[3,1,3,4,7,8]

  const handleBubbleSort=(e)=>{
    e.preventDefault()

    for(let i=0; i<array?.length; i++){
      for(let j=0; j<array?.length; j++){
        if(array[j]<array[j+1]){
          let temp=array[j]
          array[j]=array[j+1]
          array[j+1]=temp
          
        }
      }
    }
    console.log("buuble",array)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data?.name) {
      document.getElementById("name").focus();
    } else if (!data?.password) {
      document.getElementById("password").focus();
    } else {
      console.log("data", data);
      navigate("/main");
    }
  };

  //debouncing function

  const debouncing=(funct,delay)=>{

    let timer;
    return function ({...args}){
    clearTimeout()

    setTimeout(()=>{
        funct.apply(...args)

    },[delay])

}
  }

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/9")

      .then((res) => {
        console.log(res?.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("success");
      });
  };

  //asynchronous method

  const fetching = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/9"
      );

      const data = await response.json();

      console.log("dta", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching()  }, []);

  return (
    <>
      <div>
        <h5>Login!</h5>
        <form onSubmit={handleBubbleSort}>
          <input
            type="text"
            id="name"
            value={data?.name}
            onChange={(e) => handlechange(e)}
            placeholder="name"
          />
          <br />
          <br />
          <input
            type="password"
            id="password"
            value={data?.password}
            onChange={(e) => handlechange(e)}
            placeholder="password"
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default MyApp;
