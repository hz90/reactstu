/*
 * @FilePath: /vite-project/src/App.tsx
 * @Description: App.tsx
 *
 */
import Router from './routers';
import { globalStore } from './stores';
import { observer } from 'mobx-react';
import AuthRouter from './routers/authRouter';
import { ThemeColorConfigProvider } from '@/components/themeColors';
import { DarkModeConfigProvider } from '@/components/themeModeSwitch';

const App = observer(() => {
  const {
    themeConfig: { isGrayMode, isWeakMode }
  } = globalStore;
  // * 使用灰色模式和色弱模式
  const initTheme = () => {
    const body = document.documentElement as HTMLElement;
    if (!isGrayMode && !isWeakMode) body.setAttribute('style', '');
    if (isWeakMode) body.setAttribute('style', 'filter: invert(80%)');
    if (isGrayMode) body.setAttribute('style', 'filter: grayscale(1)');
  };
  initTheme();
  console.log('执行了');
  return (
    <DarkModeConfigProvider>
      <ThemeColorConfigProvider>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </ThemeColorConfigProvider>
    </DarkModeConfigProvider>
  );
});

export default App;
