
import { useNavigate } from 'react-router-dom';


import './App.css';


function Nav(props) {

  const  navigate=useNavigate();

function myfun1(e){
e.preventDefault();
setTimeout(()=>{
    navigate('/')
props.sethomestate("navstart");
}, 1000)

var array1= [false, "navendfull", "navendfull", "navendfull"]
props.setstate(array1);
}


function myfun2(e){
    e.preventDefault();

    setTimeout(()=>{
        navigate('/about')
        props.setaboutstate("navstart");
    }, 1000)

    var array1= ["navendfull", false, "navendfull", "navendfull"]
    props.setstate(array1);
    
}


function myfun3(e){
    e.preventDefault();
    setTimeout(()=>{
        navigate('/services')
        props.setservicesstate("navstart");
    }, 1000)
    
    var array1= ["navendfull", "navendfull", false, "navendfull"]
    props.setstate(array1);
}


function myfun4(e){
    e.preventDefault();
    setTimeout(()=>{
    navigate('/contact')
    props.setcontactstate("navstart");
}, 1000)

var array1= ["navendfull", "navendfull", "navendfull", false]
props.setstate(array1);
}

    return ( 

        <div>

            <a onClick={myfun1} className='navbutton' href="">Home</a>
            <a onClick={myfun2} className='navbutton'  href="">About</a>
            <a onClick={myfun3} className='navbutton'  href="">Services</a>
            <a onClick={myfun4} className='navbutton'  href="">Contact</a>
        </div>
     );
}

export default Nav;