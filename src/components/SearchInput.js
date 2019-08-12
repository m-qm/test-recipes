import React, { Component }  from "react";
import axios from 'axios';
import RecipeCard from './RecipeCard'
import './SearchInput.css'

class SearchInput extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			results: {},
			loading: false,
			message: '',
		};

		this.cancel = '';
	}

  fetchSearchResults = ( query ) =>{
		if(this.state.query.length >= 3){
    const searchUrl = `https://badi-recipes.now.sh/api?i=${this.state.query}`;
    if(this.cancel) {
      this.cancel.cancel()
    }
    this.cancel = axios.CancelToken.source();
    axios.get( searchUrl, {
          cancelToken: this.cancel.token
        } )
          .then( res => {
            const resultNotFoundMsg = ! res.data.results.length
                        ? 'There are no search results. Please t'
                        : '';
            this.setState( {
              results: res.data.results,
              message: resultNotFoundMsg,
              loading: false
            } )
          } )
          .catch( error => {
            if ( axios.isCancel(error) || error ) {
              this.setState({
                loading: false,
              })
            }
          } )}
  }


  handleOnInputChange = ( event ) => {
		const query = event.target.value;
		if ( ! query ) {
			this.setState( { query, results: {}, message: '' } );
		} else {
			this.setState( { query, loading: true, message: '' }, () => {
				this.fetchSearchResults( query );
			} );
		}
	};

	renderSearchResults = () => {
		const { results } = this.state;
		if ( Object.keys( results ).length && results.length ) {
			return (
        <RecipeCard meals={results}/>
			)
		}
	};


	render() {
		const { query,message, error } = this.state;
		
		if(error) {
			return <p>{error.message}</p>
		}

		return (
			
			<div className="container">
			<label className="search-label" htmlFor="search-input">
				<i className="fa fa-search search-icon" aria-hidden="true"/>

				<input
					type="text"
					name="query"
					value={ query }
					id="search-input"
					placeholder="Search..."
					onChange={this.handleOnInputChange}
				/>
			</label>

			{/*	Error Message*/}
				{message && <p className="message">{ message }</p>}

			{ this.renderSearchResults() }

			</div>
		)
	}
}

export default SearchInput;