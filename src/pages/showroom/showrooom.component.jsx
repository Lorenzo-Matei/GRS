import React from 'react';

import './showroom.styles.scss'


const ShowRoom = () => {

    return(
        <div className='showcase-page-container'>
            <div className='yt-live'>
                <h1 id='live-title'>LIVE Kitchen Demo</h1>
                <iframe
                    src={`https://www.youtube.com/embed/zILd4hGLRxg`}
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="Wusthof Knives Lineup"
                    id='yt-live'
                />{" "}
            </div>

            <div className='content-box' id='kitchen-demos'>
                <h1 className='content-box-title'>Kitchen Demos</h1>
                
            </div>

            <div className='content-box' id='product-demos'>
                <h1 className='content-box-title'>Product Demos</h1>

            </div>

            <div className='content-box' id='tutorial-videos'>
                <h1 className='content-box-title'>Tutorials</h1>

            </div>

        </div>
    )

}

export default ShowRoom;