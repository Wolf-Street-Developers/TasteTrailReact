import "./PageButton.css"

const PageButton = (props) => {
    return (
        <div className={props.page===props.curPage? "page-buttton-current" : "page-buttton"} onClick={()=>{props.setPage(props.page);}}>
            {props.page}
        </div>
      );
    };
    
    
  export default PageButton