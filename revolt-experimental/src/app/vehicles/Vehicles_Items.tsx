'use client';

import Image from "next/image";
import ThreeScene_Bike1 from "./ThreeScene_Bike_1";
import vehicle_style from '@/styles/Vehicles.module.scss';

export default function VehicleItem() {
    return (
        <main className={vehicle_style.main_content}>
            
            <h6 className={vehicle_style.margin_setup}> Margin Set Up </h6>

            {/* 
                //-------------------------------------------------------------------------
                    The first segment of code is a skeleton for the layout of the vehicles
                    and information.
                //-------------------------------------------------------------------------

                        <div className={vehicle_style.v_s_(number)}>
                            <div className={vehicle_style.main_style_1}>

                                <div className={vehicle_style.m_s_1_subsection_1}>
                                    <div className={vehicle_style.m_s_1_s_1_text}>

                                    </div>
                                    <div className={vehicle_style.m_s_1_s_1_model}>

                                    </div>
                                </div>
                                <div className={vehicle_style.m_s_1_subsection_expand_1}>
                                    <div className={vehicle_style.m_s_1_s_e_1_text}>

                                    </div>
                                    <div className={vehicle_style.m_s_1_s_e_1_images}>

                                    </div>
                                </div>

                            </div>
                        </div>



                //-------------------------------------------------------------------------
                    The second segment of code is a skeleton for the layout of the vehicles
                    and information, just in a flipped format.
                //-------------------------------------------------------------------------

                        <div className={vehicle_style.v_s_(number)}>
                            <div className={vehicle_style.main_style_2}>

                                <div className={vehicle_style.m_s_2_subsection_2}>
                                    <div className={vehicle_style.m_s_2_s_2_model}>

                                    </div>
                                    <div className={vehicle_style.m_s_2_s_2_text}>

                                    </div>
                                </div>
                                <div className={vehicle_style.m_s_2_subsection_expand_2}>
                                    <div className={vehicle_style.m_s_2_s_e_2_images}>

                                    </div>
                                    <div className={vehicle_style.m_s_2_s_e_2_text}>

                                    </div>
                                </div>
                            </div>
                        </div>


                        
                //-------------------------------------------------------------------------

                    For each vehicle added, make sure to add an id-value (the name of the
                    bike) to the most outter div in each of the skeleton. ie: 

                        className={vehicle_style.v_s_(number)} id="bike-name"

                //-------------------------------------------------------------------------
                
            */}

            <div className={vehicle_style.v_s_1} id="bike-1">
                <div className={vehicle_style.main_style_1}>

                    <input id='ch1' type='checkbox' className={vehicle_style.checkbox}/>

                    <div className={vehicle_style.m_s_1_subsection_1}>
    
                        <div className={vehicle_style.m_s_1_s_1_text}>
                            <h1>VEHICLE 1</h1>
                            <ul className={vehicle_style.m_s_1_s_1_t_list}>
                                <li>
                                    <p>Built on a 2010 Honda CBR125 chassis, this frame offers a strong, modular, and lightweight foundation for an electric conversion.</p>
                                </li>
                                <li>
                                    <p>Powered by a 96V Battery Pack delivering 59 HP to the wheels of the bike, enabling near instant torque and acceleration.</p>
                                </li>
                                <li>
                                    <p>Innovative active Aero technology that significantly improves braking performance and cornering precision</p>
                                </li>
                            </ul>
                        </div>
                        <div className={vehicle_style.m_s_1_s_1_model}>
                            <ThreeScene_Bike1 />
                        </div>
                        
                    </div>

                    <div className={vehicle_style.m_s_1_subsection_expand_1}>

                        <h1>TIMELINE</h1>
                        <div className={vehicle_style.m_s_1_s_e_1_div}>
                            <div className={vehicle_style.block}>
                                <div className={vehicle_style.block2}></div>
                            </div>
                            <div className={vehicle_style.m_s_1_s_e_1_text}>
                                <div className={vehicle_style.event3}>
                                    <h2>EVENT 3</h2>
                                    <h3>Month, Year</h3>
                                    <div>
                                        <p className={vehicle_style.text_style}>
                                            Description of events 
                                        </p>
                                    </div>
                                </div>
                                <div className={vehicle_style.event2}>
                                    <h2>EVENT 2</h2>
                                    <h3>Month, Year</h3>
                                    <div>
                                        <p className={vehicle_style.text_style}>
                                            Description of events
                                        </p>
                                    </div>
                                </div>
                                <div className={vehicle_style.event1}>
                                    <h2>EVENT 1</h2>
                                    <h3>Month, Year</h3>
                                    <div>
                                        <p className={vehicle_style.text_style}>
                                            Description of events
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={vehicle_style.img_layout}>
                                <div className={vehicle_style.m_s_1_s_e_1_images}>
                                    <Image src='/h_pg_images/pic-1.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="150vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-2.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="150vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-3.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="150vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-4.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="150vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-5.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="150vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-6.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="150vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                </div>
                            </div>
                        </div>
                        <label htmlFor='ch1' className={vehicle_style.collapsebox}>COLLAPSE</label>

                    </div>

                    <label htmlFor='ch1' className={vehicle_style.expandbox}>EXPAND</label>

                </div>
            </div>




            {/* <div className={vehicle_style.v_s_2} id="bike-2">
                <div className={vehicle_style.main_style_2}>

                    <input id='ch2' type='checkbox' className={vehicle_style.checkbox}/>

                    <div className={vehicle_style.m_s_2_subsection_2}>
    
                         <div className={vehicle_style.m_s_2_s_2_model}>
                            <ThreeScene_Bike1 />
                        </div>
                        <div className={vehicle_style.m_s_2_s_2_text}>
                            <h1>VEHICLE 2</h1>
                            <ul className={vehicle_style.m_s_2_s_2_t_list}>
                                <li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className={vehicle_style.m_s_2_subsection_expand_2}>

                        <h1>TIMELINE</h1>
                        <div className={vehicle_style.m_s_2_s_e_2_div}>
                            <div className={vehicle_style.img_layout}>
                                <div className={vehicle_style.m_s_2_s_e_2_images}>
                                    <Image src='/h_pg_images/pic-1.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="100vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-2.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="100vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-3.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="100vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-4.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="100vw" style={{ width: '25vw', height: 'auto' } }className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-5.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="100vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                    <Image src='/h_pg_images/pic-6.jpg' alt="ReVOLT Logo" width={0} height={0} sizes="100vw" style={{ width: '25vw', height: 'auto' }} className={vehicle_style.img_style} />
                                </div>
                            </div>
                            <div className={vehicle_style.block}>
                                <div className={vehicle_style.block2}></div>
                            </div>
                            <div className={vehicle_style.m_s_2_s_e_2_text}>
                                <div className={vehicle_style.event3}>
                                    <h2>EVENT 3</h2>
                                    <h3>Month, Year</h3>
                                    <div>
                                        <p className={vehicle_style.text_style}>
                                            Description of events
                                        </p>
                                    </div>
                                </div>
                                <div className={vehicle_style.event2}>
                                    <h2>EVENT 2</h2>
                                    <h3>Month, Year</h3>
                                    <div>
                                        <p className={vehicle_style.text_style}>
                                            Description of events
                                        </p>
                                    </div>
                                </div>
                                <div className={vehicle_style.event1}>
                                    <h2>EVENT 1</h2>
                                    <h3>Month, Year</h3>
                                    <div>
                                        <p className={vehicle_style.text_style}>
                                            Description of events
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label htmlFor='ch2' className={vehicle_style.collapsebox}>COLLAPSE</label>

                    </div>

                    <label htmlFor='ch2' className={vehicle_style.expandbox}>EXPAND</label>

                </div>
            </div> */}

            

            


            <p className={vehicle_style.p_h_space}> Place Holder Space </p>

        </main>
    );
};