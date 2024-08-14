import { Metadata } from "next"
import Contact from "."

export const metadata:Metadata ={
  title:'Contact | Crunchy Bite',
  description:"Crunchy Bite"
}
const Page =()=>{
return <Contact/>
}
export default Page