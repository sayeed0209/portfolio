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

    return (<div>
        < NavComponent onClickShowAbout={onClickShowAbout} onClickShowProject={onClickShowProject} onClickShowContact={onClickShowContact}/>
        {ShowSection}
        
    </div>)
}

export default App;