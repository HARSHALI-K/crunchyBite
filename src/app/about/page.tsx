import { Metadata } from "next"
import About from "."

export const metadata:Metadata ={
  title:'About | Crunchy Bite',
  description:"Crunchy Bite"
}
const Page =()=>{
return <About/>
}
export default Page