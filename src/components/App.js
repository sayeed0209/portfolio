import React,{useState,useEffect} from 'react';
import  NavComponent from '../components/nav/Nav'
import About from '../components/about/About'
import Project from '../components/project/Project'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import "./App.css";
const App =()=>{
    const [ShowSection, setShowSection] = useState(<Home/>)
    const [isRendered,setIsRendered] = useState(false)
    const onClickShowAbout=()=>{
        setShowSection(<About/>)
    }
    const onClickShowProject=()=>{
        setShowSection(<Project/>)
    }
    const onClickShowContact=()=>{
        setShowSection(<Contact/>)
    }
    const onRendered=()=>{
        setIsRendered (false)
    }
    const onLogoClick=()=>{
        setShowSection(<Home/>)
    }
 
    useEffect(()=>{ 
    setIsRendered (true)
    },[ShowSection])

const props = {
    onClickShowAbout,onClickShowProject,onClickShowContact,isRendered,onRendered,onLogoClick
}
    return (<div>
        <NavComponent props={props}/>
        {ShowSection}
        <Footer props={props}/>
        
    </div>)
}

export default App;