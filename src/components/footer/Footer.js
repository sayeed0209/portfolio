import "./Footer.css";
import logo from "../../img/arrow.svg";


const Footer = ({props:{
  onClickShowAbout,
  onClickShowProject,
  onClickShowContact,
}}) => {

  return (
    <footer className="d-flex justify-content-around flex-wrap pt-3  position-relative footer">
        <div className="position-absolute rounded-circle arrow-top bg-white border-top p-4"><img  width="70px" src={logo} onClick={()=>{window.scrollTo(0,0)}} alt='logo'/></div>
      <div className="mt-5 pt-2 pt-sm-0 mt-md-1">© 2021 Abu Sayeed</div>
      <ul className="d-flex list-unstyled mt-5 mt-md-1  pt-2 pt-sm-0">
        <li className="mx-2" onClick={()=>{onClickShowAbout();window.scrollTo(0,0)}}>About</li>
        <li className="mx-2"onClick={()=>{onClickShowProject();window.scrollTo(0,0)}} >Project</li>
        <li className="mx-2"onClick={()=>{onClickShowContact();window.scrollTo(0,0)}} >Contact</li>
      </ul>
    </footer>
  );
};
export default Footer;
