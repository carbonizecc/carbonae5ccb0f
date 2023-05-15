// account-x
import { useNavigate } from "react-router-dom";


export default function UserAccountXModule () {

  const navigate = useNavigate();

  // if (loading) return <WebbSpinner/>


  return (
  <>

    <span className="text-small border m-0 cursor back-color-wite hidark rounded-wd p-2 px-3"
      onClick={() => navigate('/auth/x')}
    >Logout</span>
    

  </>

  )
}