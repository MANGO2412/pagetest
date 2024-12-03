//images
import IMG_6420 from '../assets/img/IMG_6420.jpg'
import Ivan_Charts from '../assets/img/Ivan-Charts-Portrait.jpg'
import Ivan_taking from '../assets/img/Ivan-taking-hair-sample.png'
import mk12p from '../assets/img/mk12p.png'

export default function Index(){
    return(
        <>
         {/* carrousel */}
          <div className="relative h-[500px] w-full mt-2 delay-[300ms] duration-[600ms] taos:translate-x-[200px] taos:opacity-0" data-taos-offset="400">
               <img src={mk12p} alt="" style={{height:'500px'}} className="object-cover opacity-80"/>
               <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A4A]/90 to-transparent">
                   <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="mx-w-lg bg-white/90 p-8 rounded-lg shadow-xl">
                            <h1 className="text-[#0A2A4A] text-4xl font-bold mb-4">
                               Discover
                            </h1>
                            <h2 className="text-[#285E96] text-2xl mb-2">
                              The secrets
                            </h2>
                            <p className="text-[#507D9B] mb-4">
                             to Your Health
                            </p>
                            <p className="text-3xl font-bold">
                              through
                            </p>
                            <p className="text-4xl font-bold mt-2">
                              hair analysis
                            </p>
                        </div>
                   </div>
               </div>
          </div>

          {/* information */}
          <div className="bg-[#507D9B]/10 min-h-screen py-12">
             {/* main section */}
             <div className="container mx-auto px-4">
               {/* the first information */}
                <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center bg-white rounded-lg shadow-lg p-8 mb-12  delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0" data-taos-offset="400">
                  <img className="rounded-tl-3xl rounded-br-3xl" style={{ width: "298px", height: "360px"}} src={IMG_6420} alt=""  />
                  <div className="space-y-4">
                      <h1 className="text-3xl md:text-4xl font-bold">
                        Unlock <span className="text-[#0A2A4A]">Total Wellness</span> with
                         <br />
                        Quantum Hair Analysis (QHA)
                        <br />
                        <span className="text-[#0A2A4A]">Personalized</span> Healing Tinctures
                      </h1>
                      <h2 className="text-xl text-[#0A2A4A]">
                        Reveal Hidden Imbalances and Restore Harmony with Dr. Ivan's Quantum Hair Analysis
                        (QHA) & Custom Remedies.
                      </h2>
                      <p className="text-[#507D9B] leading-relaxed">
                         Your hair carries important clues about your body's health. Through advanced techniques of quantum
                         physics, Dr. Ivan can uncover hidden imbalances. After a comprehensive hair analysis, Dr. Ivan crafts
                         proprietary tinctures that are specifically formulated to address the unique deficiencies and toxicities
                         found in your results. This powerful combination provides a personalized path to restored balance and
                         optimal wellness.
                      </p>
                  </div>
                </div>
                
                {/* second information */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12   delay-[300ms] duration-[600ms] taos:translate-x-[200px] taos:opacity-0"  data-taos-offset="400">
                  <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start" >
                     <div className="space-y-6">
                         <h2 className="text-2xl md:text-3xl font-bold text-[#0A2A4A]">
                         What Can Quantum Hair Analysis (QHA) Reveal About Your Health?
                         </h2>
                          <ul className="space-y-3">
                            <li>Understand and eliminate the root cause of your pain.</li>
                            <li>Identify yeast and parasites that cause bloating and inflammation and provide needed relief.</li>
                            <li>Determine why you can't lose weight and balance your metabolism.</li>
                            <li>Discover why you have mood swings and restore emotional balance.</li>
                            <li>Identify and remove imbalances in organs and glands that may lead to disease.</li>
                            <li> Balance the soul, chakras, and aura to restore optimal health.</li>
                          </ul>
                          <div className="italic text-[#0A2A4A] text-center space-y-2">
                            <p>"Leave your worries behind.</p>
                            <p>I will guide you to vibrant health."</p>
                            <p>- Dr. Ivan</p>
                          </div>
                     </div>
                     <img src={Ivan_taking} alt=""   style={{width: "400px",height: "260px"}}  className="rounded-tl-3xl rounded-br-3xl object-cover" />
                  </div> 
                </div>

                {/* the third information */}
                <div className="bg-[#0A2A4A] text-white rounded-lg shadow-lg p-8  delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0" data-taos-offset="400">
                    <div className="grid md:grid-cols-[300px_1fr] gap-8  gap-8 items-center">
                      <img src={Ivan_Charts} className="rounded-tl-3xl rounded-br-3xl object-cover" style={{width: "300px",height:"600px"}} alt=""  />
                            <div className="space-y-6">
                               <h2 className="text-2xl md:text-3xl font-bold text-[#78A9D0]">
                                Benefits of Quantum Hair Analysis (QHA):
                               </h2>
                               <div className="space-y-4">
                                    <div>
                                      <h3 className="font-bold text-[#78A9D0] mb-2">Pinpoint Hidden Imbalances:</h3>
                                      <p className="text-gray-300">
                                        Quantum technology allows Dr. Ivan to detect subtle energy disturbances in your body, revealing organ,
                                        gland and blood imbalances, mineral deficiencies, toxins and heavy metals, aura stagnation, chakra
                                        disturbances and other imbalances that may be affecting your health.
                                      </p>
                                    </div>
                                     <div>
                                       <h3 className="font-bold text-[#78A9D0] mb-2">A Personalized Approach to Healing:</h3>
                                       <p className="text-gray-300">
                                         Each analysis results in a tailor-made wellness solution, as Dr. Ivan creates a custom tincture
                                         specifically designed to address your unique needs. This personalized remedy supports your body in
                                         naturally restoring balance.
                                       </p>
                                     </div>
                                     <div>
                                       <h3 className="font-bold text-[#78A9D0] mb-2">Non-Invasive and Accurate:</h3>
                                       <p className="text-gray-300">
                                         Unlike other health assessments, QHA is non-invasive and provides accurate, long-term insights into
                                         your overall health and energy levels.
                                       </p>
                                     </div>
                                     <div>
                                       <h3 className="font-bold text-[#78A9D0] mb-2">Holistic Support for Lasting Wellness:</h3>
                                       <p className="text-gray-300">
                                         With Dr. Ivan's proprietary tinctures, you're not just masking symptoms; you're giving your body the
                                         tools it needs to heal from the inside out.
                                       </p>
                                     </div>  
                              </div>
                               <div className="text-center space-y-4 pt-6">
                                    <p className="text-xl italic text-[#78A9D0]">
                                      Discover Your Imbalances and Restore Balance with a
                                     <br />
                                      Personalized Healing Solution!
                                    </p>
                                    <button className="bg-[#285E96] hover:bg-[#78A9D0] text-white px-8 py-6  text-lg rounded-full">
                                        Order Your Hair Analysis & Custom Tincture
                                    </button>
                               </div>
                            </div>
                    </div>
                </div>
             </div>
          </div>
        </>
    )
}