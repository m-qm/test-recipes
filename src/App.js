import React, { Component } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';
import './App.css';
import SearchParams from './components/SearchParams';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {},
      query: '',
      isLoading: false,
      error: null
    }
  }

  getMeals(query) {
    this.setState({
      isLoading: true 
    })
    if(this.state.query) {
      const URL = `https://badi-recipes.now.sh/api?i=${this.state.query}&p=1`;
      axios.get(URL)
        .then(res => {
          const meal = res.data.results;
          if(typeof meal === 'object'){
            this.setState({ meal, isLoading: false });
          }
        })
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
    }
    const DEFAULT_QUERY = 'onions,garlic'
    const URL = `https://badi-recipes.now.sh/api?i=${DEFAULT_QUERY}&p=1`;
    axios.get(URL)
      .then(res => {
        const meal = res.data.results;
        if(typeof meal === 'object'){
          this.setState({ meal, isLoading: false });
        }
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

componentDidMount() {
  this.getMeals()
}

onInputChange(query) {
  this.setState({
    query: query
  })
  this.getMeals(this.state.query)
}

render() {

  var data = this.state.meal;
  const {error, isLoading} = this.state;

  if (!data) {
  return <p>No data yet ...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }
    return (
      <div className="App">
      <SearchParams onInputChange={query => this.onInputChange(query)}/>
        {data.length > 0 && <RecipeCard meals={data} />}
      
      </div>
    );
  }
}
export default App;