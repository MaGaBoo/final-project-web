<<<<<<< HEAD
import { useAuthContext } from "../../contexts/AuthContext"

const Profile = () => {
  const { user } = useAuthContext()

  return (
    <div className="Profile">
      <h1 className="mt-3">Profile</h1>

      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default Profile
=======
import { useAuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <>
      <p>{JSON.stringify(user)}</p>
    </>
  )
}

export default Profile;
>>>>>>> c0cd98ea37a727a45f00776095b8392f2c299e06
