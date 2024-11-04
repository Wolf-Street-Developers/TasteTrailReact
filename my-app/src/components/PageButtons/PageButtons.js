import "./PageButtons.css"
import PageButton from "../PageButton/PageButton";

const PageButtons = (props) => {
    const {page, pages} = props

    const minPage = Math.max(1, page-2)
    const maxPage = Math.min(pages, page+2)

    const pageArr = Array.from(
        { length: (maxPage - minPage) + 1 },
        (_, index) => minPage + index * 1
    );
    
    return(
        <div className="page-buttons-container">
            {pageArr.map((value)=><PageButton page={value} setPage={props.setPage} curPage={props.page} key={value}/>)}
        </div>
    )
}

export default PageButtons