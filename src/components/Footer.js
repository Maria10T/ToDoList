import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const {user, logOut} =useUserAuth()
    const navigate=useNavigate()
    const handleLogOut=async()=>{
      try{
        await logOut()
        navigate("/")
      }catch(err){
      }
    }
  return (
    <div className="footer">
        <Button variant="secondary" onClick={handleLogOut}> Log out </Button>
      
    </div>
  )
}
