import React,{useState} from 'react';
import  NavComponent from '../components/nav/Nav'
import About from '../components/about/About'
import Project from '../components/project/Project'
import Contact from '../components/contact/Contact'
const App =()=>{
    const [ShowSection, setShowSection] = useState(About)
    const onClickShowAbout=()=>{
        setShowSection(About)
    }
    const onClickShowProject=()=>{
        setShowSection(Project)
    }
    const onClickShowContact=()=>{
        setShowSection(Contact)
    }
const props = {
    onClickShowAbout,onClickShowProject,onClickShowContact
}
    return (<div>
        < NavComponent props={props}/>
        {ShowSection}
        
    </div>)
}

export default App;