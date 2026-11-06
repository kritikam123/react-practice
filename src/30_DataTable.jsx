import { useEffect, useMemo, useState } from "react";
import { fetchData } from "./utils";

export function DataTable() {
  const [data, setData] = useState([]);
  const [isRTL, setIsRTL] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const handleFetchData = async () => {
      const data = await fetchData();
      setData(data);
    };
    handleFetchData();
  }, []);

  const handleHeaderClick = (column) => {
    if (column === sortColumn) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const handleToggleClick = () => {
    setIsRTL((prev) => !prev);
  };

  const filteredData = useMemo(() => {
    return data
      .map((row) => {
        if (
          row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          String(row.id).includes(searchTerm) ||
          String(row.weight).includes(searchTerm)
        ) {
          return row;
        }
        return null;
      })
      .filter(Boolean);
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    const sorted = [...filteredData];

    return sorted.sort((a, b) => {
      let aValue = a[sortColumn];
      let bValue = b[sortColumn];

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filteredData, sortColumn, sortOrder]);
  return (
    <div>
      <header>
        <button onClick={handleToggleClick}>Toggle Columns</button>
        <input
          type="text"
          placeholder="Search items"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => handleHeaderClick("id")}>
                ID
                {sortColumn === "id" && (sortOrder === "asc" ? "↑" : "↓")}{" "}
              </button>
            </th>
            <th>
              <button onClick={() => handleHeaderClick("name")}>
                Name {""}{" "}
                {sortColumn === "name" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
            </th>
            <th>
              <button onClick={() => handleHeaderClick("weight")}>
                Weight{" "}
                {sortColumn === "name" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
