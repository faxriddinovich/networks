import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/127709-network-icon-lottie-json-animation.json'
import '../Sidebar/style/animation.css'
import '../Sidebar/style/animation.css'
import ExclusivePage from './ExclusivePage'
import Spline from '@splinetool/react-spline';

function Content({item}) {

    useEffect(()=>{
        console.log(item)
    },[])

  return (
    <div className='wrapper'>
        {item==='exclusive' ? <ExclusivePage/> :
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 mx-auto my-3'>
                        <div className='header'>
                            <h1 className='text-center mt-3'>{item[1]}</h1>
                        </div>

                        <div className='body'>
                            <p className='content-text'>
                                {item[2]}
                            </p>
                            <div className='animation-box'>
                                <Spline scene={item[4]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Content