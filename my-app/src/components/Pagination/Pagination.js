import { useEffect, useState } from "react";
import { getFeedbacksByVenue, getMenueItemsById, getMenuesById, getVenueCount } from "../../api/menuService";
import { getUsersCount } from "../../api/adminService";
import PageButtons from "../PageButtons/PageButtons";

const Pagination = (props) => {
    const [pages, setPages] = useState(0);
    const [isNotFixed, setIsNotFixed] = useState(false);
    useEffect(()=>{
        if(props.type === "Venues") {
            getVenueCount().then((res)=>{setPages(Math.ceil(res.data/props.count))})
        } else if(props.type === "Users") {
            getUsersCount().then((res)=>{setPages(Math.ceil(res.data.usersCount/props.count))})
        } else if(props.type === "Menues") {
            getMenuesById(props.id).then((res)=>{setPages(Math.ceil(res.data.amountOfEntities/props.count))})
            setIsNotFixed(true)
        } else if(props.type === "MenuItems") {
            getMenueItemsById(props.id).then((res)=>{setPages(Math.ceil(res.data.amountOfEntities/props.count));})
        } else if(props.type === "Feedbacks") {
            getFeedbacksByVenue(props.id).then((res)=>{setPages(res.data.amountOfEntities/props.count)})
            setIsNotFixed(true)
        }
    },[])
    
    return (
        <div className="page-buttons">
            {pages > 1 && <PageButtons page={props.page} pages={pages} setPage={props.setPage} isNotFixed={isNotFixed}/>}
        </div>
    );
  };
  
  
export default Pagination