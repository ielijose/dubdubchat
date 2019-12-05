import { HomePage } from '../pages/Home';
import { ChatPage } from '../pages/Chat';
import { NotFoundPage } from '../pages/NotFound';

const serverRoutes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/chat',
    component: ChatPage,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFoundPage,
  },
];

export default serverRoutes;
