export default function Nav(){
    return(
        <>
         <div className="bg-[#0A2A4A] text-white px-4 py-2 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"  data-taos-offset="300">
           <div className="container mx-auto flex justify-between items-center text-sm">
               <div className="flex items-center gap-4 h-16">
                  <div className="flex items-center gap-2">
                       <span><i className="fa-solid fa-phone"></i></span>
                        <span>US WhatsApp: +1 346 393 5657</span>
                   </div>
                   <div  className="flex items-center gap-2">
                       <span><i className="fa-solid fa-envelope"></i></span>
                       <span>info@copenlabs.com</span>
                   </div>
               </div>
               <div className="flex items-center gap-4">
                   <a href="/account">My Account</a>
                   <a href="/cart" className="flex items-center gap-2">
                     <span><i className="fa-solid fa-cart-shopping"></i></span>
                     <span className="sr-only">Cart</span>
                   </a>
               </div>
           </div>
        </div>
        
         <nav className="container mx-auto py-4 px-4 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
             <div className="flex items-center gap-2">
               <a href="">
                 <img src="" alt=""/>
               </a>
               <div className="flex items-center gap-8">
                   <a href="/" className="text-gray-700 hover:text-[#78A9D0] hover:underline transition-colors">Home</a>
                   <a href="/about-us" className="text-gray-700 hover:text-[#78A9D0] hover:underline transition-colors">About us</a>
                   <a href="/fraud-warning" className="text-gray-700 hover:text-[#78A9D0] hover:underline transition-colors">Fruad Warnign</a>
                   <a href="/disclaimer" className="text-gray-700 hover:text-[#78A9D0] hover:underline transition-colors">Disclaimer</a>
                   <a href="/radionics" className="text-gray-700 hover:text-[#78A9D0] hover:underline transition-colors">Radionics</a>
               </div>
             </div>
           </nav>
        </>
    )
}