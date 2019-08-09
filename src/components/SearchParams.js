import React, { Component }  from "react";

class SearchParams extends Component {

  handleChange = (e, query)=>  {
    this.props.onInputChange(e.target.value)
  }


  render() {
    return (

    <div className="search-params">
    <form action="">
      <label htmlFor="ingredients">
        Search ingredients
        <input type="text"
               id="ingredients"
               placeholder="Search by ingredients"
               onChange={e => this.handleChange(e)}/>
      </label>
    </form>
    </div>
  )

  }
}
export default SearchParams;