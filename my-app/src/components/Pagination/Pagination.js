import { useEffect, useState } from "react";
import { getVenueCount } from "../../api/menuService";
import { getUsersCount } from "../../api/adminService";
import PageButtons from "../PageButtons/PageButtons";

const Pagination = (props) => {
    const [pages, setPages] = useState(0);
    useEffect(()=>{
        if(props.type === "Venues") {
            getVenueCount().then((res)=>{setPages(Math.ceil(res.data/props.count))})
        } else if(props.type === "Users") {
            getUsersCount().then((res)=>{setPages(Math.ceil(res.data.usersCount/props.count))})
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