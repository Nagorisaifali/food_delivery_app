import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";


const Categories = [
    {
        id:1,
        name:"All",
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:2,
        name:"Breackfast",
        icon:<MdOutlineFreeBreakfast  className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:3,
        name:"soups",
        icon:<LuSoup className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:4,
        name:"pasta",
        icon:<MdFastfood className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:5,
        name:"pizza",
        icon:<FaPizzaSlice className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:6,
        name:"burger",
        icon:<FaBurger  className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:7,
        name:"main_course",
        icon:<FaBowlFood className="w-[60px] h-[60px] text-green-600"/>
    },
]

export default Categories