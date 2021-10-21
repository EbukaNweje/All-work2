import React,{useState, useEffect, useRef} from 'react'
import "./components/MyCSS.css"
import img from "./components/facebook.png"
import img2 from "./components/twitter.png"
import img3 from "./components/instagram.png"
import img4 from "./components/github.png"
import img5 from "./components/image1.jpg"
import {AiFillDelete, AiOutlineDelete,
AiOutlineLoading3Quarters,} from "react-icons/ai";



const App = () => {
  

  // Input Function for useState
  const [text, setText] = useState(" ");

  // Delete Function
  const deleteItem = (id) => {
    const removeItem = myData.filter((el) => el.id !== id);
    setMyData(removeItem);
  };


  // Setting the Map function with dummy datas
  const addItem = () => {
    const items = {
      task: text,
      number: myData.length + 1,
      id: myData.length + 1,
      time: "3Secs ago",
    };

    setMyData([...myData, items]);

    setText("");
  };


  // Dummy datas
  const [myData, setMyData] = useState([
        {
          id: 1,
          number: 1,
          task: "React assignment",
          time: "3sec ago",
        },
        {
          id: 2,
          number: 2,
          task: "JavaScript practice",
          time: "6sec ago",
        },
        {
          id: 3,
          number: 3,
          task: "1 hour exercise",
          time: "90sec ago",
        },
      ]);


  // Creating a function to use your browser local Storage
  
  useEffect(() => {
    const saveItems = JSON.parse(localStorage.getItem("store"));
    setMyData(saveItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(myData));
  }, [myData]);




  return (
    <body>
    <div className="Main">

        <div className="Glass">
          
          <div className="Profile">
            <div className="PicsName">
            <div className="Avatar">
                <img src={img5} />
                </div>
            <div className="Name">Muomaife Frederick David</div>
            </div>

          <div className="Icons">
            <div className="IconName">
              <div className="Icon">
                <img src={img} />
              </div>
              <a href="http://david.frederick.96387" className="Link">Muomaife Frederick David</a>
            </div>

            <div className="IconName">
              <div className="Icon">
                <img src={img2} />
                </div>
              <a href="" className="Link">@MuomaifeFrederick</a>
            </div>

            <div className="IconName">
              <div className="Icon">
                <img src={img3} />
                </div>
              <a href="" className="Link">@muomaifefrederick</a>
            </div>

            <div className="IconName">
              <div className="Icon">
                <img src={img4} />
                </div>
              <a href="http://github.com/FrederickDavid" className="Link">
                FrederickDavid</a>
            </div>
          </div>

          </div>


          <div className="Task">
            <div className="InputButton" 
             value={text}
             onChange={(e) => {
             setText(e.target.value);
              }}
            >
              <input placeholder="  Save your task for the today" className="Input" />
              <button className="Button"
               onClick={() => {
               console.log(text);
               addItem();
               }}
              
              >Add Task</button>
            </div>
            <div className="TaskPane">
              {myData.map((props) => (
              <div className="Tasks" key={props.id}>
              <div className="Number">{props.number}</div>
              <div className="TaskInputed">{props.task}</div>
              <div className="Time">{props.time}</div>
              <div className="DeleteIcon">
              <AiOutlineDelete
                onClick={() => {
                console.log("I can be deleted of ID: ", props.id);
                deleteItem(props.id);
                }} />

              </div>
              </div>
              ))}
            </div>
          </div>

        </div>
    </div>
    <div className="Circle1">
        
    </div>
    <div className="Circle2">

    </div>
</body>
  )
}

export default App

