const FILTERS = [
    <option value="0" key={0}>Most liked</option>,
    <option value="1" key={1}>Highest rated</option>,
    <option value="2" key={2}>Newest first</option>,
    <option value="3" key={3}>Most feedbacks</option>,
    <option value="4" key={4}>Oldest first</option>,
    <option value="5" key={5}>Lowest rated</option>,
    <option value="6" key={6}>Muted</option>,
    <option value="7" key={7}>Not muted</option>,
    <option value="8" key={8}>Banned</option>,
    <option value="9" key={9}>Not banned</option>,
]

const Search = (props) => {
    return (
        <div>
            <select
                name="selectedFilter"
                onChange={(e)=>props.setFilter(e.target.value)}
                value={props.filter}
            >
                {props.filters.map((value)=>FILTERS[value])}
            </select>
            <input type="search" onChange={(e)=>{props.setSearchTerm(e.target.value)}} value={props.searchTerm}/>
            <button onClick={props.handleSearch}>Ok</button>
        </div>
      );
    };
    
    
  export default Search