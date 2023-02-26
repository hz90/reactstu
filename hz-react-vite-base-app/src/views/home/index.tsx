/*
 * @FilePath: /vite-project/src/views/home/index.tsx
 * @Description: Home
 *
 */
import { observer } from 'mobx-react';
import welcome from '@/assets/images/welcome.png';
import './index.less';
const Home = observer(() => {
  return (
    <div className="home">
      <img src={welcome} alt="" />
    </div>
  );
});

export default Home;
