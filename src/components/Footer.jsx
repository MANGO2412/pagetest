export default function Footer(){
    return(
        <footer className="bg-[#0A2A4A] text-white py-12 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="10">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Address section  --> */}
                 <div>
                    <h2 className="text-xl font-bold mb-4">
                        Addresss
                    </h2>
                    <a href="mailto:customerInfo@positronradionics.com" className="text-gray-300 hover:text-white transition-colors">
                       info@copenlabs.com
                    </a>
                    <div className="flex gap-4 mt-4">

                        <a href="" className="text-gray-300 hover:text-white transition-colors">
                           <i className="fa-brands fa-x-twitter" style={{color:"#ffffff"}}></i>
                            <span className="sr-only">X-twitter</span>
                        </a>
                        
                        <a href="" className="text-gray-300 hover:text-white transition-colors">
                            <i className="fa-brands fa-facebook" style={{color: "#ffffff"}}></i>
                            <span className="sr-only">Facebook</span>
                        </a>
                        
                        <a href="" className="text-gray-300 hover:text-white transition-colors">
                            <i className="fa-brands fa-youtube" style={{color: "#ffffff"}}></i>
                            <span className="sr-only">YouTube</span>
                        </a>
                        
                    </div>
                 </div>

                 {/* <!-- Opening Hours  Section --> */}
                  <div>
                     <h2 className="text-xl font-bold mb-4">Opening Hours</h2>
                     <p className="text-gray-300 mb-2">Monday - Friday</p>
                     <p className="text-gray-300">08:00 AM - 05:00 PM</p>
                  </div>

                  {/* <!-- Services Section  --> */}
                   <div>
                      <h2 className="text-xl font-bold mb-4">Services</h2>
                      <ul className="space-y-2">
                        <li ><a href="" className="text-gray-300 hover:text-white transition-colors">Devices</a></li>
                        <li ><a href="" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
                      </ul>
                   </div>
            </div>

                 {/* <!-- Bottom  Section--> */}
                 <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm">
                    © Positron, All Right Reserved.  
                  </p>
                  <div className="flex gap-6 mt-4 md:mt-0">
                     <a href="" className="text-gray-300 hover:text-white text-sm transitions-colors">
                      Home
                     </a>
                     <a href="" className="text-gray-300 hover:text-white text-sm transitions-colors">
                      Terms & Conditions 
                     </a>
                     <a href="" className="text-gray-300 hover:text-white text-sm transitions-colors">
                      Privacy Policy
                     </a> 
                  </div>
            </div>
        </div>
       </footer>
    )
}