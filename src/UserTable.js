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

export function UserTable({ users, sortDesc }) {
  const sortedUsers = users.sort((a, b) => {
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
      <tr>
        <th></th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
      </tr>
      {sortedUsers.map((user) => (
        <UserRow {...user} />
      ))}
    </table>
  );
}
