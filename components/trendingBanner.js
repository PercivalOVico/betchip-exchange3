import MoreButton from './moreButton'
import TrendingCardRow from './trendingCardRow'
import Image from 'next/image'
import CarouselNotifications from './carouselNotifications'


const styles = {
  trendingCard: `w-2/3 p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex items-center justify-between`,
}




const TrendingBanner = ({ icon, title, trendingData }) => {
  return (
    

    <div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
     <div className='flex'>
          {icon && <Image src={icon} width={27} height={27} alt='' />}
          &nbsp;&nbsp;
          <p className='font-bold'>{title}</p>
           <MoreButton />
        </div>
   <CarouselNotifications />

  </div>
</div>
  )
}

export default TrendingBanner
