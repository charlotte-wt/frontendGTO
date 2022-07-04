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
              path='/blogs/62c2c5ed19fa9a6a2d96f583'
            />
            <CardItem
              src='https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2020/09/Female-accountant-working-from-home.jpg'
              text='My Accountancy Journey'
              label='Accountant'
              path='/blogs/62c2c9e619fa9a6a2d96f584'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://img.freepik.com/free-vector/business-woman-work-office-cartoon-posters-multitasking-businesswoman-with-smartphone-notepad-hands-holding-working-items-messy-cabinet-with-flying-paper-documents-vector-illustration_107791-8469.jpg?w=1380&t=st=1656931700~exp=1656932300~hmac=ed93bc46759b47721f7e4d8cd795e71d6c0d0cf76c9ef9208375e976b06ca3e6'
              text='Being a ladyboss'
              label='Startup'
              path='/blogs/62c2cdb78c8e7a69f3b26b71'
            />
            {/* <CardItem
              src='https://www.investopedia.com/thmb/jdCYyoX1r1i8finXV3zq4LYdFGw=/680x440/filters:fill(auto,1)/womenwithchart-5bfc32efc9e77c0058786764.jpg'
              text='Joining an investment banking team'
              label='Investment Banking'
              path='/blogs/investmentbanking'
            /> */}
            <CardItem
              src='https://s3.amazonaws.com/utep-uploads/wp-content/uploads/sparkle-box/2021/02/16121129/FemaleEE.jpg.jpg'
              text='Engineering'
              label='Engineering'
              path='/blogs/62c2ce4c8c8e7a69f3b26b73'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

