import { Metadata } from "next"
import MyCarousel from "."

export const metadata:Metadata ={
  title:'Home | Crunchy Bite',
  description:"Crunchy Bite"
}
const Page =()=>{
return <MyCarousel/>
}
export default Page