import React from 'react';

interface TaskLoggingProps {}

class TaskLogging extends React.Component<TaskLoggingProps> {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <div className="header">
            <div className="menuIcon">
              <div className="dashTop"></div>
              <div className="dashBottom"></div>
              <div className="circle"></div>
            </div>
            <h1>Registro de Tareas</h1>
            <input
              type="text"
              className="searchInput"
              placeholder="Buscar ..."
            />
            <div className="fa fa-search searchIcon"></div>
          </div>
          <div className="content">
            <div className="line"></div>
            <div className="item">
              <div className="avatar">
                <img
                  alt="Francisca"
                  src="/images/francisca.jpg"
                />
              </div>
              <span className="time">Hace una hora</span>
              <p>Fui a comer con amigos</p>
            </div>
            <div className="item">
              <div className="avatar">
                <img
                  alt="Paco"
                  src="/images/paco.jpg"
                />
              </div>
              <span className="time">10:00 am</span>
              <p>Leí un artículo sobre tecnología</p>
            </div>
            <div className="item">
              <div className="avatar">
                <img
                  alt="Quica"
                  src="/images/quica.jpg"
                />
              </div>
              <span className="time">10:00 am</span>
              <p>Escribí notas sobre un proyecto importante</p>
            </div>
            <div className="item">
              <div className="avatar">
                <img
                  alt="Curro"
                  src="/images/curro.jpg"
                />
              </div>
              <span className="time">2:21 pm</span>
              <p>Preparé la presentación para la reunión de mañana</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskLogging;
