import React , {useEffect, useState} from 'react'
import LeftNav from '../Navbar/leftNav'
import Form from '../Form'
import { UserKey } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
const Header = (props) => {
  const [condition, setCondition] = useState(false);
  
  // console.log(props.data);
  useEffect(()=>{
    setCondition(props.data);
  } , [props.data]);
  
  
  const [home1Ref, home1Visible] = useScrollAnimation();
  return (
    <div className="">
      <div className="bg-linear-to-r  from-blue-600  via-blue-950 to-black py-3 text-white px-6"><span >Goverment of India / भारत सरकार</span></div>
      <div className="flex flex-wrap items-center justify-between bg-linear-to-r from-white via-gray-100 to-gray-500 flex flex-wrap gap-2 px-2">
        <div className="flex flex-wrap items-center">
        <img src="https://img.magnific.com/premium-vector/state-emblem-india-vector-download-eps-svg-national-emblem-republic-india_691560-11059.jpg?semt=ais_hybrid&w=740&q=80" alt="SomeThing Wrong" className='h-40 rounded-full w-28 cursor-pointer' />
        <div className="flex flex-col justify-between py-2">
        <div
        ref={home1Ref} 
        className={`text-black font-Broadway ${home1Visible ? "scroll-up" : "scroll-hidden"}`}>
        <span className='text-blue-800 font-black cursor-pointer text-5xl'>Bhoomi</span>
        <span className='text-green-700 font-bold cursor-pointer text-7xl'>S</span>
        <span className='text-green-700 font-bold cursor-pointer text-5xl'>etu</span>
        </div>
        <div className="text-black flex flex-col text-lg font-semibold">
          <span>National Land Aquisition Management System
          </span>
          <span>Ministry of Rural Development , Government of India</span>
        </div>
        </div>
        </div>
        <div className="">
          <Form/>
        </div>
        <div className={`${condition === true ? 'hidden' : 'block'} pr-10   cursor-pointer border-4 border-blue-600 bg-linear-to-r  from-blue-600 to-blue-950 px-7 py-2 rounded shadow-[inset_20px_4px_12px_rgba(0,0,0,0.15)]  transition-all duration-300 ease-in-out
            active:scale-125`}>
          <div
        ref={home1Ref}
        className={home1Visible ? "scroll-left" : "scroll-hidden"}
      ><Link to='/Login'><div className=" flex flex-wrap item-center justify-center gap-2"><UserKey size={20} /><span>Login</span>
            </div></Link></div>
        </div>
      </div>

      <div className="">
        <LeftNav data={condition}/>
      </div>
    </div>
  )
}

export default Header