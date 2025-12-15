import UserCard from './UserCard';

const UserGrid = ({ users }) => {
  return (
    <div className="users-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;