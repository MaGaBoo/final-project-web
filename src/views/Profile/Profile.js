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