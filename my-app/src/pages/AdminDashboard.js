import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
import { getUsers } from "../api/adminService";
import { useEffect, useState } from "react";
import UserItem from "../components/UserItem/UserItem";

const AdminDashboard = () => { 
    
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState(7)
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = () => {
        getUsers(Number(filter),page,10, searchTerm.trim()).then((res)=>{setUsers(res.data.entities)})
    }

    useEffect(()=>{handleSearch()},[page])
    
    return (
        <div>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} handleSearch={handleSearch} filters = {[6,7,8,9]}/>
            {users.map((item)=><UserItem item={item} key={item.user.id}/>)}
            <Pagination type="Users" setPage={setPage} page={page}/>
        </div>
    );
  };
  
  
export default AdminDashboard