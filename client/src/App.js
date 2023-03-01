import './App.css';
import {useEffect, useState} from "react"


function App() {
  return (
    <div className="App">
      <PhoneList/>
    </div>
  );
}


function PhoneList(){

  const [mobileList, setMobileList] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/mobiles")
      .then((res)=> res.json())
      .then((data)=>{
        setMobileList(data)
      })

  }, [])
  
  return (
    <div className="phone-list-container">
      {
        mobileList.map((phone, index)=>{
          return <Phone phone= {phone} key={phone._id}/>
        })
      }
    </div>
  )
  
}


// card component
function Phone(props){
  const {phone} = props;
  return(
    <div className="phone-container">
      <img src={phone.img} alt={phone.model} className="phone-picture"/>
      <h2 className="phone-name">{phone.model}</h2>
      <p className="phone-company">{phone.company}</p>
    </div>
  )
}

export default App;
