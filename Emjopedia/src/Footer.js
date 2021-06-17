import React from 'react';
import './App.css'
const date =new Date()
var year =date.getFullYear();
//console.log(year);
function Footer(){
  return (<div>
<p className="Footer-copyright">  Copyright © {year}</p>
  </div>)
}
export default Footer;