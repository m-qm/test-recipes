import React, {Component} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import './SearchInput.css';

class SearchInput extends Component {
  constructor (props) {
    super (props);

    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
      searches: JSON.parse (localStorage.getItem ('searches')) != null
        ? JSON.parse (localStorage.getItem ('searches'))
        : '',
    };

    this.cancel = '';
  }

  fetchSearchResults = query => {
    const searchUrl = `https://badi-recipes.now.sh/api?i=${this.state.query}`;
    if (this.cancel) {
      this.cancel.cancel ();
    }
    this.cancel = axios.CancelToken.source ();
    axios
      .get (searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then (res => {
        const resultNotFoundMsg = !res.data.results.length
          ? 'There are no search results. Please type in a different query!'
          : '';
        this.setState ({
          results: res.data.results,
          message: resultNotFoundMsg,
          loading: false,
        });
      });
  };

  handleOnInputChange = (event, prevProps) => {
    const query = event.target.value;
    if (!query) {
      this.setState ({query, results: {}, message: ''});
      this.add ();
    } else {
      this.setState ({query, loading: true, message: ''}, () => {
        this.fetchSearchResults (query);
      });
    }
  };

  renderSearchResults = () => {
    const {results} = this.state;
    if (Object.keys (results).length && results.length) {
      return <RecipeCard meals={results} />;
    }
  };

  add = () => {
    var query = this.state.query;
    if (localStorage.getItem ('searches') == null) {
      var searches = [];
      searches.push (query);
      localStorage.setItem ('searches', JSON.stringify (searches));
    } else {
      var recentSearches = JSON.parse (localStorage.getItem ('searches'));
      recentSearches.push (query);
      localStorage.setItem ('searches', JSON.stringify (recentSearches));
    }
    this.setState ({
      searches: JSON.parse (localStorage.getItem ('works')),
    });
  };

  delete (e) {
    var index = e.target.getAttribute ('data-key');
    var list = JSON.parse (localStorage.getItem ('searches'));
    list.splice (index, 1);
    this.setState ({
      searches: list,
    });
    localStorage.setItem ('searches', JSON.stringify (list));
  }

  componentDidMount () {
    this.add ();
  }

  render () {
    const {query, message, error, searches} = this.state;
    console.log (this.state);

    if (searches != null && searches.length) {
      let searchList = '';
      if (localStorage.getItem ('searches')) {
        console.log (searchList);
        searchList = (
          <ul>
            {this.state.searches.map (function (search, index) {
              return (
                <div key={index}>
                  {searchList}
                  {' '}
                  <input
                    type="button"
                    value="X"
                    onClick={this.delete.bind (this)}
                    data-key={index}
                  />
                </div>
              );
            }, this)}

          </ul>
        );
      }
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className="container">
        <label className="search-label" htmlFor="search-input">
          <i className="fa fa-search search-icon" aria-hidden="true" />

          <input
            type="text"
            name="query"
            value={query}
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.fetchSearchResults ();
                this.add ();
              }
            }}
          />
        </label>

        {/*	Error Message*/}
        {message && <p className="message">{message}</p>}

        {this.renderSearchResults ()}

      </div>
    );
  }
}

export default SearchInput;
