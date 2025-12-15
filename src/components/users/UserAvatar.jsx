const UserAvatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return <div className="avatar">{initials}</div>;
};

export default UserAvatar;