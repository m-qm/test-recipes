import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';
import Ingredients from './Ingredients'
import FavoriteButton from './FavoriteButton'
import './RecipeCard.scss'
export default class RecipeCard extends Component {
 render(){
  return(
          <div className="card">
            {this.props.meals.map((item, index) => {
              return (
                <div className="card-item" key={item.title}>

                  <Image source={item.thumbnail} text={item.title} />
                  <Title title={item.title} />
                  <a href={item.href} className="link">Link</a>
                  <Ingredients ingredients={item.ingredients} />
                  <FavoriteButton />
                </div>
              )
          })}
         </div>
  )
 }
}