import "./UserTable.css";

function UserRow({ picture, firstName, lastName, email }) {
  return (
    <tr>
      <td>
        <img className="picture" src={picture} />
      </td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
    </tr>
  );
}

export function UserTable({ users, sortDesc, filter }) {
  const sortedUsers = users
    .filter((user) => user.email.startsWith(filter))
    .sort((a, b) => {
      if (a.lastName > b.lastName) {
        return sortDesc ? 1 : -1;
      }

      if (a.lastName < b.lastName) {
        return sortDesc ? -1 : 1;
      }

      return 0;
    });

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <UserRow key={user.id} {...user} />
        ))}
      </tbody>
    </table>
  );
}
