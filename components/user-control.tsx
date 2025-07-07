'use client'
import { UserButton } from "@clerk/nextjs"
interface props{
    showName?:boolean
}
export const UserControl = ({
    showName
}:props) => {
  return (
   <UserButton
    showName={showName}
    appearance={{
        elements:{
            userButtonBox:'rounded-md!',
            userButtonAvatarBox:'rounded-md! size-8',
            userButtonTrigger:'rounded-md!',
        }
    }}
   />
  )
}
