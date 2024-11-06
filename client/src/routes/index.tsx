import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import NotFound from '../pages/NotFound';

export const RouterMain = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      // {
      //   path: '/empleados',
      //   element: <PersonasView />,
      // },
      // {
      //   path: '/empleado/:id',
      //   element: <InfoPersona />,
      // },
      // {
      //   path: '/marcacion',
      //   element: <Marcacion />,
      // },
      // {
      //   path: '/audit-marcacion',
      //   element: <AuditMarcacion />,
      // },
      // {
      //   path: '/opciones',
      //   element: <Opciones />,
      //   children: [
      //     { index: true, element: <div className='p-2 text-gray-600 flex items-center justify-center h-full pb-20'><span className='text-2xl'> ↩  Seleccione Una Opción</span></div> },
      //     { path: 'areas', element: <Areas /> },
      //     { path: 'cargos', element: <Cargos /> },
      //     { path: 'grupoturno', element: <GrupoTurno /> },
      //     { path: 'turnos', element: <Turnos /> },
      //     { path: 'grupo-turno', element: <GrupovsTurno /> }
      //   ]
      // }
    ]
  }
]);