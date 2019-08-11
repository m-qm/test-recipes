import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';
import Label from './Label'
import Ingredients from './Ingredients'
import FavoriteButton from './FavoriteButton'

import './RecipeCard.css'


class RecipeCard extends Component {




 render(){


  return(
    <div className="row">
      {this.props.meals.map((item, index) => {
        return (
          <div className="column" key={item.title}>
            <div className="card">
              <Image source={item.thumbnail} text={item.title} />
              <Title title={item.title} />
              <a href={item.href} className="link">Link</a>
              <Ingredients ingredients={item.ingredients} />
              <FavoriteButton />
              <Label data={item.ingredients} />
            </div>
          </div>
        )
      })}
      
    </div>
  )
 }
}

export default RecipeCard;