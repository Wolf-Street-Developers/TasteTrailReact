

const Search = (props) => {
    return (
        <div>
            <select
                name="selectedFruit"
                onChange={(e)=>props.setFilter(e.target.value)}
                value={props.filter}
            >
                {/* <option value="0">Most liked</option> */}
                <option value="1">Highest rated</option>
                <option value="2">Newest first</option>
                <option value="3">Most feedbacks</option>
                <option value="4">Oldest first</option>
                <option value="5">Lowest rated</option>
                <option value="6">Muted</option>
                <option value="7">Not muted</option>
                <option value="8">Banned</option>
                <option value="9">Not banned</option>
            </select>
            <input type="search" onChange={(e)=>{props.setSearchTerm(e.target.value)}} value={props.searchTerm}/>
            <button onClick={props.handleSearch}>Ok</button>
        </div>
      );
    };
    
    
  export default Search