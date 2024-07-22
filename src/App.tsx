import {Outlet} from 'react-router-dom';
import AppLayout from './Layouts/AppLayout.tsx';

function App() {
  return (
      <>
          <AppLayout>
              <Outlet/>
          </AppLayout>
      </>
  )
}

export default App;
