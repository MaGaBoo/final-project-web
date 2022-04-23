import { useAuthContext } from "../../contexts/AuthContext";
import { deletePlant } from "../../services/PlantService";

const Profile = () => {
  const { user, getUser } = useAuthContext();

  const handleDelete = (id) => {
    deletePlant(id)
      .then(() => {
        getUser();
      })
  }

  return (
    <div className="profile">
      <h4 className="mt-3">Profile</h4>

      <h1>{user.name}</h1>
      <h2>Plants:</h2>
      {user.plants.map(plant => {
        return (
          <div>
            <h3>{plant.commonName}</h3>
            <button onClick={() => handleDelete(plant.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Profile
