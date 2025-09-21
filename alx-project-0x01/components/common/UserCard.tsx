import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="grid gap-1">
        <div>
          <div className="title">
            <h2 className="text-3xl my-3">Personal Information</h2>
          </div>
          <div>
            <p>ID: {id}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
            <p>Portfolio Website: {website}</p>
          </div>
        </div>
        <div>
          <div className="title">
            <h2 className="text-3xl my-3">Address Information</h2>
          </div>
          <div>
            <p>Street: {address.street}</p>
            <p>{address.suite}</p>
            <p>Zipcode: {address.zipcode}</p>
          </div>
        </div>
        <div>
          <div className="title">
            <h2 className="text-3xl my-3">Geography Information</h2>
          </div>
          <div>
            <p>Latitude: {address.geo.lat}</p>
            <p>Longitude: {address.geo.lng}</p>
          </div>
        </div>
        <div>
          <div className="title">
            <h2 className="text-3xl my-3">Company Information</h2>
          </div>
          <div>
            <p>Name: {company.name}</p>
            <p>Catchphrase: {company.catchPhrase}</p>
            <p>BS: {company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
