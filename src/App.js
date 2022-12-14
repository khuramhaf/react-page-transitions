import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';


function App() {

  var array1= ["navstart", "navstart", "navstart", "navstart"]
const [navstate, setnavstate] = useState("navstart")
const [compstate, setcompstate]=useState(array1);

const [homestate, sethomestate] = useState("navstart")
const [aboutstate, setaboutstate] = useState("navstart")
const [servicesstate, setservicesstate] = useState("navstart")
const [contactstate, setcontactstate] = useState("navstart")

useEffect(()=>{

setnavstate("navend")
})


useEffect(()=>{

  window.addEventListener('popstate',()=>{

if (window.location.pathname==='/'){

  sethomestate("popstatestart");

  var array2= [false, "navstart", "navstart", "navstart"]

  setcompstate(array2)
}

else if (window.location.pathname==='/about'){

  setaboutstate("popstatestart");

  var array2= ["navstart", false, "navstart", "navstart"]

  setcompstate(array2)
}

else if (window.location.pathname==='/services'){

  setservicesstate("popstatestart");

  var array2= ["navstart", "navstart", false, "navstart"]

  setcompstate(array2)
}

else if (window.location.pathname==='/contact'){

  setcontactstate("popstatestart");

  var array2= ["navstart", "navstart", "navstart", false]

  setcompstate(array2)
}

else {

}
  }
  
  
  )
}, [])

  return (
<div>
    <div className={navstate}>
<Nav servicesstate={servicesstate} setservicesstate={setservicesstate} contactstate={contactstate} setcontactstate={setcontactstate} aboutstate={aboutstate} setaboutstate={setaboutstate} homestate={homestate} sethomestate={sethomestate} state={compstate} setstate={setcompstate}/>
</div>
<Routes>
<Route path='/' element={<Home homestate={homestate} sethomestate={sethomestate} state={compstate} setstate={setcompstate}/>}></Route>
<Route path='/about' element={<About aboutstate={aboutstate} setaboutstate={setaboutstate} state={compstate} setstate={setcompstate}/>}></Route>
<Route path='/services' element={<Services servicesstate={servicesstate} setservicesstate={setservicesstate} state={compstate} setstate={setcompstate}/>}></Route>
<Route path='/contact' element={<Contact contactstate={contactstate} setcontactstate={setcontactstate} state={compstate} setstate={setcompstate}/>}></Route>

</Routes>
</div>

  );
}

export default App;
