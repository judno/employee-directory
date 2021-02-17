import { useEffect, useState } from "react";
import "./App.css";
import { API_APP_ID, USER_API_URL } from "./config";
import { UserTable } from "./UserTable";

function TableHeader({
  sortDesc,
  onSortDescChange,
  emailFilter,
  onEmailFilterChange,
}) {
  return (
    <div className="tableHeader">
      <div>
        <label htmlFor="filter" className="filterLabel">
          Search Email
        </label>
        <input
          id="filter"
          type="text"
          value={emailFilter}
          onChange={(event) => {
            onEmailFilterChange(event.target.value);
          }}
        />
      </div>
      <select
        value={sortDesc}
        onChange={(event) => {
          onSortDescChange(event.target.value === "true");
        }}
      >
        <option value={false}>Ascending</option>
        <option value={true}>Descending</option>
      </select>
    </div>
  );
}

function App() {
  const [sortDesc, setSortDesc] = useState(true);
  const [emailFilter, setEmailFilter] = useState("");
  const [users, setUsers] = useState([]);

  // runs side effect to fetch api
  useEffect(() => {
    fetch(USER_API_URL, { headers: { "app-id": API_APP_ID } })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, [USER_API_URL, API_APP_ID]);

  return (
    <div className="content">
      <TableHeader
        sortDesc={sortDesc}
        onSortDescChange={setSortDesc}
        emailFilter={emailFilter}
        onEmailFilterChange={setEmailFilter}
      />
      <UserTable sortDesc={sortDesc} users={users} filter={emailFilter} />
    </div>
  );
}

export default App;
