import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ScrollToTop } from '../../shared/scrollToTop';

const Home = lazy(() => import('../../../pages/homePage/homePage'));

export function Router() {
  return (
    <main>
      <Suspense fallback={<div></div>}>
        <ScrollToTop />
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={3000}>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </main>
  );
}
