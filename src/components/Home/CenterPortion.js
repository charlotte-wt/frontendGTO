import React from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom'  
import './CenterPortion.css';

export default function CenterPortion() {
    const navigate = useNavigate();
    return (
    <div className='bg-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='center-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => navigate("/virtualworld")}
        >
          VIRTUAL WORLD
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => navigate("/content")}
        >
          SHARE YOUR CAREER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

