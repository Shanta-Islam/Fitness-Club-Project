import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import Activities from './components/Activities/Activities';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => {
    toast.success('🧘 Meditation Completed!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div>
      <ToastContainer />
      <Activities notify={notify}></Activities>
    </div>
  );
}

export default App;
