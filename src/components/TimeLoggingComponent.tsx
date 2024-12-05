import React from 'react';
import { HeaderComponent } from './HeaderComponent';
import { ContentComponent } from './ContentComponent';

export const TaskLogging: React.FC = () => {
      return (
        <div className="notificationsFrame">
          <div className="panel card">

            {/* Invocacion a la cabecera */}
            <HeaderComponent titulo='Registro de Tareas AC 2.2' />

            {/* Invocacion al Content */}
            <ContentComponent />

          </div>
        </div>

      );

  }



