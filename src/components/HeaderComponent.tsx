import React from 'react';
import BuscarComponent from "./BuscarComponent";

interface HeaderProps {
  titulo: string
}

export const HeaderComponent: React.FC<HeaderProps> = ({ titulo }) => {

    return (
        <>

          <div className="header card-header d-flex justify-content-between align-items-center">
                <div className="menuIcon d-flex flex-column justify-content-center align-items-center">
                  <span className="dashTop border-top"></span>
                  <span className="dashBottom border-top mt-1"></span>
                  <span className="circle border rounded-circle mt-1"></span>
                </div>
                <h1 className="h5 mb-0">{ titulo }</h1>

                <BuscarComponent etiqueta='Buscar...' />
                
          </div>

        </>
    )
}