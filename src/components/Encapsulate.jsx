import Nav from './Nav'
import Footer from './Footer'


export default function Encapsulate({children}){
     return (
       <>
         <Nav/>
          {children}
         <Footer/>
       </>
     )
}