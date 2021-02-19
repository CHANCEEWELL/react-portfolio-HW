import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (

    <div className='cards'>
      <h1>Check Out Some Of My Work</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src="https://user-images.githubusercontent.com/69743567/97772219-83cff900-1b0a-11eb-9973-820d6ff72f48.PNG"
              text='Find the perfect pet for you with Pick-your-pet'
              label='Pets'
              path="https://katers0259.github.io/Pick-your-pet/"
            />
            <CardItem
              img src=""
              text='Modify you schedule with Workday Scheduler'
              label='Scheduler'
              path=""
            />
            <CardItem
              img src=''
              text='Track your daily workouts using this Fitness Tracker'
              label='Fitness'
              path=""
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src=''
              text='Track your spending habits with this Budget Tracker'
              label='Budget'
              path=""
            />
            <CardItem
              img src=''
              text='Write down your thoughts with Note Taker'
              label='Notes'
              path="https://polar-thicket-33954.herokuapp.com/"
            />
            <CardItem
              img src=''
              text='Get your local weather forecast with Weather Dashboard'
              label='Weather'
              path=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
