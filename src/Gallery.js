
import React, { useState } from 'react';
import './App.css';
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';

const Gallery = () => {
  let data = [
    {
      id: 2022,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/Melbourne_ACMI_2022.jpeg',
    },
    {
      id: 2022,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/melbourne_FEDSQ_2022.jpeg',
    },
    {
      id: 2022,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/melbourne-carlton_garden_2022.jpeg',
    },
    {
      id: 2022,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/Monash_2022.jpeg',
    },
    {
      id: 2022,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/Daat_2022.jpeg',
    },
    {
      id: 2019,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/Dalat_2019.jpeg',
    },
    {
      id: 2019,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/south_de_anza_blvd.jpeg',
    },
    {
      id: 2019,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/california_cupertino_2019-1.jpeg',
    },
    {
      id: 2019,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/UCB_2019.jpg',
    },
    {
      id: 2019,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/UCLA_2019.jpg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-7.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-6.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-5.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-4.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-3.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-2.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/LA_trip_2018-1.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/Walk_of_fame_2018.jpg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/Chirstmas-2018.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/halloween_2018_with_housemates-3.jpeg',
    },

    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/halloween_2018_with_housemates-2.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/halloween_2018_with_housemates-1.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/great_america_2018.jpg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/de_anza_2018.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/cali_summer_2018.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/Cal_swimpool_2018.jpg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/basketball_2018.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/apple_park_1.jpeg',
    },
    {
      id: 2018,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/de_anza_math43.JPG',
    },
    {
      id: 2003,
      imgSrc: 'https://phantom037.github.io/Ethereal/imgGallery-main/Leo_2003.jpeg',
    },
  ]
const [model, setModel] = useState(false);
const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <>
    <div className={model? 'model open' : 'model'}>
        <img src={tempimgSrc} style={{max-width: 100%, height: auto}}/>
        <CloseIcon onClick={() => setModel(false)}/>
    </div>
    <div className='gallery'>
      {data.map((item, index) =>{
        return (
        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
          <img src={item.imgSrc} style={{max-width: '100%'}}/>
        </div>
        );
      })}
    </div>
    </>
  )
}

export default Gallery;
