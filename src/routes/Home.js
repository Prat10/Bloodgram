import Accordion from '../components/Accordion';
import Form from '../components/Contact';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { Test_Data } from '../components/OurTeamData/test_data';
import Profile from '../components/Profile';
import UserReview from '../components/UserReview';

function App() {
  return (
    <div className='App'>
      <Main />
      <Form />
      <Accordion />
      <UserReview />
      <Footer />
    </div>
  );
}
export default App;
