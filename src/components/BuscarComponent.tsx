import React from 'react';

interface BuscarProps {
    etiqueta: string
}

const BuscarComponent: React.FC<BuscarProps> = ({ etiqueta }) => {

    return (
        <>
               <div className="d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control form-control-sm me-2"
                    placeholder={ etiqueta }
                  />
                  <i className="fa fa-search text-muted"></i>
                </div>

        </>
    )
}

export default BuscarComponent;