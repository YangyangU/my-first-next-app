import type { NextPage } from 'next';
import CatCard from '../components/cards/cat/CatCard';

const Home: NextPage = () => {
    return (
      <>
        <div>
        Hello Next
        </div>
        <CatCard></CatCard>
      </>
    );
  };
  
  export default Home;

