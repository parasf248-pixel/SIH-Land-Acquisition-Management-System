
import React , {useEffect, useState} from 'react'
import { House, Sunrise, Headset, LayoutDashboard ,FolderDot ,BookOpenText ,Workflow ,ShieldQuestionMark   } from 'lucide-react'
import { Link } from 'react-router-dom'

const LeftNav = (props) => {
  const [condition, setCondition] = useState(false);
  useEffect(()=>{
    setCondition(props.data);
  } , [props.data]);
  return (
    <div className='flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 via-blue-900 to-black py-4 text-white'>

      <Link to="/" className='flex items-center justify-center gap-2 px-4 py-2 rounded-2xl outline-none hover:bg-blue-700 hover:text-cyan-400 transition-all duration-300 ease-in-out whitespace-nowrap'>
        <House size={20} />
        <span className="font-semibold text-base hover:text-cyan-400">Home</span>
      </Link>

      <Link to="/About" className={'flex items-center justify-center gap-2 px-4 py-2 rounded-2xl outline-none hover:bg-blue-700 hover:text-cyan-400 transition-all duration-300 ease-in-out whitespace-nowrap'}>
        <Sunrise size={20} />
        <span className="text-base font-semibold  hover:text-cyan-400">About Us</span>
      </Link>

      <Link to='/How' className='flex items-center justify-center gap-2 px-4 py-2 rounded-2xl outline-none hover:bg-blue-700 hover:text-cyan-400 transition-all duration-300 ease-in-out whitespace-nowrap cursor-pointer'>
        <Workflow size = {20}/>
        <span className="text-base font-semibold hover:text-cyan-400">How it Works</span>
      </Link>

      <Link to="/DaskBoard" className={`${condition === true ? 'block' : 'hidden'} flex items-center justify-center gap-2 px-4 py-2 rounded-2xl outline-none hover:bg-blue-700 hover:text-cyan-400transition-all duration-300 ease-in-out whitespace-nowrap`}>
        <LayoutDashboard size={20} />
        <span className="text-base font-semibold hover:text-cyan-400">Dashboard</span>
      </Link>

      <Link to='/Projects' className={` ${condition === true ? 'block' : 'hidden'}  flex items-center justify-center gap-2 px-4 py-2 rounded-2xl outline-none hover:bg-blue-700 hover:text-cyan-400 transition-all duration-300 ease-in-out whitespace-nowrap cursor-pointer`}>
        <FolderDot size={20} />
        <span className="text-base font-semibold hover:text-cyan-400">Project</span>
      </Link>

      <Link to='/Resources' className={`${condition === true ? 'block' : 'hidden'}  flex items-center justify-center gap-2 px-4 py-2 rounded-2xl outline-none hover:bg-blue-700 hover:text-cyan-400hover:bg-blue-700 hover:text-cyan-400  transition-all duration-300 ease-in-out whitespace-nowrap cursor-pointer`}>
        <BookOpenText size={20}/>
        <span className="text-base font-semibold hover:text-cyan-400">Resources</span>
      </Link>

      <Link to='/FAQ' className={`flex items-center justify-center gap-2 px-4 py-2 rounded-2xl outline-none hover:bg-blue-700 hover:text-cyan-400hover:bg-blue-700 hover:text-cyan-400  transition-all duration-300 ease-in-out whitespace-nowrap cursor-pointer ${condition === true ? 'block' : 'hidden'} `}>
        <ShieldQuestionMark  size={20} />
        <span className={`text-base font-semibold hover:text-cyan-400`}>FAQ</span>
      </Link>

      <Link to="/Contact" className={`flex items-center justify-center gap-2 px-4 py-2 rounded-2xl outline-none hover:bg-blue-700 hover:text-cyan-400 transition-all duration-300 ease-in-out whitespace-nowrap`}>
        <Headset size={20} />
        <span className={`text-base font-semibold hover:text-cyan-400`}>Contact Us</span>
      </Link>

    </div>
  )
}

export default LeftNav