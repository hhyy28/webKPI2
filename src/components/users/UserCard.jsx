import UserAvatar from './UserAvatar';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <UserAvatar name={user.name} />
      <h3>{user.name}</h3>
      <p>📧 {user.email}</p>
      <p>📱 {user.phone}</p>
      <p>🏙 {user.address.city}</p>
    </div>
  );
};

export default UserCard;