import './App.css';
import { Navigation } from './component/Navbar'; //named export
import Car from './component/Carousel'; //export default
import Newform from './component/Newform';
function App (){



return (
  <div>
<Navigation></Navigation>
<Car></Car>
<Newform></Newform>
</div>
)
}
export default App