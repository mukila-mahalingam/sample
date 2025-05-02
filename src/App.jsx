import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function add(x) {
    return function (y) {
      return function (z) {
        return x + y + z;
      };
    };
  }

  const add5 = add(5); // Partially apply the first argument (x = 5)
  const add5_7 = add5(7); // Partially apply the second argument (y = 7)
  const result = add5_7(20); // The final argument (z = 10)
  console.log(result); // Output: 22

  function fun(a, b) {
    return a + b;
  }
  console.log(fun(1, 2)); // 3
  console.log(fun(1, 2, 3, 4, 5)); // 3

  // es6 rest parameter
  function fun(...input) {
    let sum = 0;
    for (let i of input) {
      sum += i;
    }
    return sum;
  }
  console.log(fun(1, 2)); //3
  console.log(fun(1, 2, 3)); //6
  console.log(fun(1, 2, 3, 4, 5)); //15

  function addnum(a, b) {
    return a + b;
  }

  function maxNum([...arr]) {
    return Math.max(...arr);
  }

  function palindrom(str) {
    return str === str?.split("")?.reverse()?.join("");
  }

  console.log(
    "responce",
    addnum(2, 3),
    maxNum([1, 2, 3, 4, 5, 8, 10]),
    palindrom("bye")
  );

  let carName = "Volvo";

  console.log("carName", carName);

  //sorting algorithm

  function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  let numbers = [87, 65, 11, 22, 45, 90];
  console.log("numbers", bubbleSort(numbers));

  //searching algorithm

  function searchingAlgm(arr, x) {
    let pairedArr = arr.map((value, index) => ({ value, index }));
  
    // Sort based on value
    pairedArr.sort((a, b) => a.value - b.value);
    let left = 0,
      right = pairedArr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (pairedArr[mid].value === x) return pairedArr[mid].index;
      else if (pairedArr[mid] < x) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }

  let arr = [23, 45, 67, 12, 56];
  let x = 12;
  console.log("search", searchingAlgm(arr, x));
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p id="example">hello</p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
