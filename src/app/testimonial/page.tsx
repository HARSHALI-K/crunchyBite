import { Metadata } from "next"
import Testimonial from "."

export const metadata:Metadata ={
  title:'Testimonial | Crunchy Bite',
  description:"Crunchy Bite"
}
const Page =()=>{
return <Testimonial/>
}
export default Page