import "./PageButton.css"

const PageButton = (props) => {
    return (
        <div className={props.page===props.curPage? "page_buttton current_button" : "page_buttton"} onClick={()=>{props.setPage(props.page);}}>
            {props.page}
        </div>
      );
    };
    
    
  export default PageButton