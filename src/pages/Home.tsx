import { Accommodation } from '../components/Accommodation';
import { Clothes } from '../components/Clothes';
import { Footer } from '../components/Footer';
import { MeetScreen } from '../components/MeetScreen';
import { Schedule } from '../components/Schedule';
import { ToastMasters } from '../components/Toastmasters';
import { Welcome } from '../components/Welcome';

const Home = () => {
  return (
    <div className='flex flex-col text-center font-playfairdisplay text-wine'>
      <MeetScreen />
      <Welcome />
      <Schedule />
      <ToastMasters />
      <Accommodation />
      <Clothes />
      <Footer />
    </div>
  );
};

export { Home };
