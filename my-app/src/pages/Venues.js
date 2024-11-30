import { useEffect, useState } from "react";
import { getVenues } from "../api/menuService";
import VenueItem from "../components/VenueItem/VenueItem";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
import "./Venues.css";

const Venues = () => {
  const [venues, setVenues] = useState([]);
  const [filter, setFilter] = useState(1);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const countOnPage = 12;

  const handleSearch = () => {
    getVenues(Number(filter), page, countOnPage, searchTerm.trim()).then((res) => {
      setVenues(res.data.entities);
    });
  };

  useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <div className="menu-container">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        handleSearch={handleSearch}
        filters={[1, 2, 3, 4, 5]}
      />
      
      <div className="venue-grid">
        {venues.map((item) => (
          <VenueItem item={item} key={item.id} />
        ))}
      </div>

      <Pagination type="Venues" setPage={setPage} page={page} count={countOnPage}/>
    </div>
  );
};

export default Venues;