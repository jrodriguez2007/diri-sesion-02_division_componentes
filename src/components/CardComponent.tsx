import React from 'react';

interface CardProps {
    nombre: string,
    nombre_img: string,
    texto: string,
    texto_largo: string
}

const CardComponent: React.FC<CardProps> = ({ nombre, nombre_img, texto, texto_largo }) => {

    const cardImageUrl = `./src/assets/${nombre_img}.jpg`;

    return (
        <>
            <div className="item list-group-item d-flex align-items-center">
                <div className="avatar">
                  <img
                    src={cardImageUrl}
                    alt={ nombre }
                    className="rounded-circle me-3"
                  />
                </div>
                <div>
                  <div className="small text-muted">{texto}</div>
                  <p className="mb-0">{texto_largo}</p>
                </div>
              </div>

        </>
    )

}

export default CardComponent;