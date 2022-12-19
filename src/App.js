// code for To Do List
// function App() {
  //   const [toDo, setToDo] = useState("")
  //   const [toDos, setToDos] = useState([])
  //   const onChange = (event) => setToDo(event.target.value)
  //   const deleteBtn = index => {
    //     setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
    //   };
    //   const onSubmit = (event) => {
      //     event.preventDefault();
      //     if(toDo === "") {
        //       return;
        //     }
        //     setToDos(currentArray => [toDo, ...currentArray])
        //     setToDo("")
        //   }
        //   return( 
          //     <div>
          //       <h1>My To Dos ({toDos.length})</h1>
          //       <form onSubmit={onSubmit}>
          //         <input onChange={onChange}  value={toDo}  type="text" placeholder="Write your to do..." />
          //         <button>Add To Do</button>
          //       </form>
          //       <hr />
//       <ul>
//         {toDos.map((item, index) => 
//           <li key={index}>
//             {item}<button onClick={() => deleteBtn(index)}>❌</button>
//           </li>
//         )}
//       </ul>
//     </div>
//   )
// }

import { useEffect, useState } from "react";
import styles from "./Bitcoin.module.css";

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [bitcoin, setBitcoin] = useState(0)
  const onChange = (event) => {
    setBitcoin(event.target.value)
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(
      (response) => response.json()).then(
        (json) => {
          setCoins(json);
          setLoading(false);
        })
  }, [])
  return(
    <div>
      <h1 className={styles.h1}>Your Bitcoin to USD</h1>
      <div>
        <label className={styles.label} htmlFor="Bitcoin">Write a Bitcoin sum you want</label>
        <input className={styles.input} value={bitcoin} type="number" id="Bitcoin" placeholder="Write a Bitcoin sum you want." onChange={onChange}></input>
      </div>
      <div>
        <p className={styles.p}>${Math.round(bitcoin*16668.3)} USD</p>
      </div>
      <div className={styles.Information}>
        <h3>Information about Bitcoin</h3>
        
      </div>
      <div className={styles.coins}>
        <h3>Another coins ({coins.length} things)</h3>
        <p>{coins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}</p>
      </div>
    </div> 
  )
}

export default App;
