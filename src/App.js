import { useState } from "react";
import "./App.css";
import data from "./data.json";
import { UserTable } from "./UserTable";

function TableHeader({ sortDesc, onSortDescChange }) {
  return (
    <div>
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
  const users = data.data;
  const [sortDesc, setSortDesc] = useState(true);

  return (
    <div className="content">
      <TableHeader sortDesc={sortDesc} onSortDescChange={setSortDesc} />
      <UserTable sortDesc={sortDesc} users={users} />
    </div>
  );
}

export default App;
