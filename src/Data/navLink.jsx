import {FaCoins, FaHandshake, FaInfo, FaPowerOff} from 'react-icons/fa'
import {HiHome} from 'react-icons/hi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {BsFillTelephoneFill, BsHeartFill} from 'react-icons/bs'
import {IoIosSnow} from 'react-icons/io'
import {FaQuestionCircle} from 'react-icons/fa'
import {FaSquarePen} from 'react-icons/fa6'

export const NavLinks = [
    {
        id:2,
        title:'Home',
        icon:<HiHome/>,
        link:"/dashboard"
    },
    {
        id:1,
        title:'About',
        icon:<FaInfo/>,
        link:"/about"
    },
    {
        id:3,
        title:'Services',
        icon:<MdOutlineMiscellaneousServices/>,
        link:"/service"
    },
    {
        id:4,
        title:'Testimonials',
        icon:<BsHeartFill/>,
        link:"/testimonial"
    },
    {
        id:6,
        title:'FAQS',
        icon:<FaQuestionCircle/>,
        link:"/faq"
    },
    {
        id:9,
        title:'Contact',
        icon:<BsFillTelephoneFill/>,
        link:"/contact"
    },
    {
        id:5,
        title:'IOSS',
        icon:<IoIosSnow/>,
        link:"/ioss"
    },
    {
        id:10,
        title:'Fiscal',
        icon:<FaSquarePen/>,
        link:"/fiscal"
    },
    {
        id:9,
        title:'Taxpay',
        icon:<FaCoins/>,
        link:"/tax"
    },
    {
        id:9,
        title:'Partnership',
        icon:<FaHandshake/>,
        link:"/partner"
    },
    {
        id:7,
        title:'Logout',
        icon:<FaPowerOff/>
    }
    
]