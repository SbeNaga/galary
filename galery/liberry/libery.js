import Swiper from 'swiper';
import 'swiper/css';
const swiper = new Swiper(...Swiper);
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = new Swiper('.swiper', {    modules: [Navigation, Pagination],
    ...Swiper
  });
  import Swiper from 'swiper/bundle';
  import 'swiper/css/bundle';
  const swiper = new Swiper(...Swiper);
