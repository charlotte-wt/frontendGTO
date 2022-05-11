import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

export default function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these sharings of various careers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://media.istockphoto.com/photos/tweaking-some-finer-details-in-the-data-picture-id1081869166?b=1&k=20&m=1081869166&s=170667a&w=0&h=2ekyjqZWN0MqIHMp0oGKsm0s92itAaYzMX98y6_zmIQ='
              text='Women in  technology!'
              label='Technology'
              path='/content/technology'
            />
            <CardItem
              src='https://image.shutterstock.com/image-photo/business-women-reviewing-data-financial-260nw-1606825513.jpg'
              text='My Accountancy Journey'
              label='Accountant'
              path='/content/accountancy'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='data:image/png;base64,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'
              text='Being a ladyboss'
              label='Startup'
              path='/content/startup'
            />
            <CardItem
              src='https://www.investopedia.com/thmb/jdCYyoX1r1i8finXV3zq4LYdFGw=/680x440/filters:fill(auto,1)/womenwithchart-5bfc32efc9e77c0058786764.jpg'
              text='Joining an investment banking team'
              label='Investment Banking'
              path='/content/investmentbanking'
            />
            <CardItem
              src='https://s3.amazonaws.com/utep-uploads/wp-content/uploads/sparkle-box/2021/02/16121129/FemaleEE.jpg.jpg'
              text='Electronic Engineer'
              label='Electronic Engineering'
              path='/content/engineering'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
