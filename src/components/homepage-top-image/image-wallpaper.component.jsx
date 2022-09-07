import React from 'react';

import './image-wallpaper.styles.scss';

import homepageWallpaper from '../homepage-top-image/kitchen1.jpg';
// import homepageTopWallpaper from '../../../public/assets/images/homepage/kitchen1.jpg';
// C:\React\germaine-r-s\src\components\homepage-top-image\kitchen1.jpg
// src\components\homepage-top-image\kitchen1.jpg

const topPageWallpaper = ({topImageWallpaper}) => (
    <div className='image-container'>
        <img src='../homepage-top-image/kitchen1.jpg'/>
    </div>

    // <div classname= 'image-container'>
    //     <div className='image'>
    //         <img src={homepageWallpaper}/>

    //     </div>

    //     {/* <div style={{ backgroundImage: `url('/articleImages/${imageName}')` }}>
    //         ...
    //     </div>
    //     <img src={`/articleImages/${imageName}`} /> */}

    // </div>

);

export default topPageWallpaper;