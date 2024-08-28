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

                    <input id='ch' type='checkbox' className={vehicle_style.checkbox}/>

                    <div className={vehicle_style.m_s_1_subsection_1}>
    
                        <div className={vehicle_style.m_s_1_s_1_text}>
                            <h1>VEHICLE 1</h1>
                            <ul className={vehicle_style.m_s_1_s_1_t_list}>
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
                        <div className={vehicle_style.m_s_1_s_1_model}>
                            <ThreeScene_Bike1 />
                        </div>
                        
                    </div>
                    <div className={vehicle_style.m_s_1_subsection_expand_1}>
                        <h1>TIMELINE</h1>
                        <div className={vehicle_style.m_s_1_s_e_1_div}>
                            <div className={vehicle_style.m_s_1_s_e_1_text}>
                                <p>Random Text</p>
                            </div>
                            <div className={vehicle_style.m_s_1_s_e_1_images}>
                                <p>Random Text</p>
                            </div>
                        </div>
                        <label htmlFor='ch' className={vehicle_style.collapsebox}>Collapse</label>

                    </div>

                    <label htmlFor='ch' className={vehicle_style.expandbox}>EXPAND</label>

                </div>
            </div>




            {/* <div className={vehicle_style.v_s_1} id="bike-1">
                <div className={vehicle_style.main_style_1}>

                    <input id='ch' type='checkbox' className={vehicle_style.checkbox}/>

                    <div className={vehicle_style.m_s_1_subsection_1}>
                        <div className={vehicle_style.m_s_1_s_1_text}>
                            <h1>Random Text</h1>
                            <ul className={vehicle_style.m_s_1_s_1_t_list}>
                                <li>

                                </li>
                                <li>

                                </li>
                                <li>

                                </li>
                            </ul>
                        </div>
                        <div className={vehicle_style.m_s_1_s_1_model}>
                            <ThreeScene_Bike1 />
                        </div>
                    </div>
                    <div className={vehicle_style.m_s_1_subsection_expand_1}>
                        <div className={vehicle_style.m_s_1_s_e_1_div}>
                            <div className={vehicle_style.m_s_1_s_e_1_text}>
                                <p>Random Text</p>
                            </div>
                            <div className={vehicle_style.m_s_1_s_e_1_images}>
                                <p>Random Text</p>
                            </div>
                        </div>
                        <label htmlFor='ch' className={vehicle_style.collapsebox}>Collapse</label>

                    </div>

                    <label htmlFor='ch' className={vehicle_style.expandbox}>Expand</label>

                </div>
            </div> */}

            


            <p className={vehicle_style.p_h_space}> Place Holder Space </p>

        </main>
    );
};