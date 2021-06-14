import React,{useState,useEffect} from 'react';
import  NavComponent from '../components/nav/Nav'
import About from '../components/about/About'
import Project from '../components/project/Project'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
const App =()=>{
    const [ShowSection, setShowSection] = useState(<Project/>)
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
 
    useEffect(()=>{ 
    setIsRendered (true)
    },[ShowSection])

const props = {
    onClickShowAbout,onClickShowProject,onClickShowContact,isRendered,onRendered
}
    return (<div>
        <NavComponent props={props}/>
        {ShowSection}
        <Footer props={props}/>
        
    </div>)
}

export default App;