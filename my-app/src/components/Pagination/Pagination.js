import { useEffect, useState } from "react";
import { getMenuesById, getVenueCount } from "../../api/menuService";
import { getUsersCount } from "../../api/adminService";
import PageButtons from "../PageButtons/PageButtons";

const Pagination = (props) => {
    const [pages, setPages] = useState(0);
    useEffect(()=>{
        if(props.type === "Venues") {
            getVenueCount().then((res)=>{setPages(Math.ceil(res.data/10))})
        } else if(props.type === "Users") {
            getUsersCount().then((res)=>{setPages(Math.ceil(res.data.usersCount/10))})
        } else if(props.type === "Menues") {
            // getMenuesById().then((res)=>{console.log(res)})
        }
    },[])
    
    return (
        <div>
            <PageButtons page={props.page} pages={pages} setPage={props.setPage}/>
        </div>
    );
  };
  
  
export default Pagination