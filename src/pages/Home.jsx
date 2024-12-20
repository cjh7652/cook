import React,{useContext, useState} from 'react';
import { DataContext } from '../App';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import List from '../conponents/List';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const Home = () => {
  const {data} = useContext(DataContext);
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    swiper?.slidePrev()
  }
  const handleNext = () => {
    swiper?.slideNext()
  }
  return (
    <div className='home'>
       <Swiper
          modules={[Autoplay]}
          className='swiperMain'
          spaceBetween={0}
          slidesPerView={3}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}

          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {
            data.slice(11, 30).map((item) => (
              <SwiperSlide key={item.id}>
               <img src={item.ATT_FILE_NO_MK} alt={item.HASH_TAG} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      <div className="title">
        <h2> 추천 레시피</h2>
        <div className="homeList">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
         /*  navigation={true} */
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {
            data.slice(0, 10).map((item) => (
              <SwiperSlide key={item.id}>
                <List data={[item]} />
              </SwiperSlide>
            ))
          }
         
        </Swiper>
        <div className="swiper_btn">
          <div className="swiperPrevBtn" onClick={handlePrev}><GrPrevious /></div>
          <div className="swiperNextBtn" onClick={handleNext}><GrNext /></div>
        </div>
        </div>
      </div>
     
     
    </div>
  );
};

export default Home;