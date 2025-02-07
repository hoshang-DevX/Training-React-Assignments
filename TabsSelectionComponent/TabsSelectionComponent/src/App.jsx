import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(null);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  const contents = ["this is tab 1", "this is tab 2", "this is tab 3"];

  return (
    <div className="container">      
      <div className="tabs">  
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setIsActive(index)}
                  className= {` tabs-button ${isActive === index ? "active" : ""}`}
          >
         
            {tab}
          </button>
        ))}
      </div>

      <div className="contents" >
        {contents[isActive]}
      </div>
    </div>
  );
}

export default App;

// <div style={{display:"flex"  }} >       {/* sab tabs kaise dikehnge ek saath */}
//       <div style={{width:"15px", height:"6px", padding : "2px", textAlign : "center" }} >     {/* individual tab kaisa dikega */}
//       {tabs.map((tab,index) => <button key={index} onClick={() => setIsActive(tab)} > {tab} </button> )}
//       </div>

//       <div style={{width : "30px", height : "15px", padding : "2px"}} >      {/* uss tab ka content kaisa dikhega */}
//         {contents[isActive]  }
//       </div>
//     </div>
