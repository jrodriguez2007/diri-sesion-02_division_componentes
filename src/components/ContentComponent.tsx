import React from 'react';
import CardComponent from "./CardComponent";

export const ContentComponent: React.FC = () => {

    const personas = [
      {
        'id': '1',
        'nombre': 'Francisca',
        'nombre_img': 'francisca',
        'texto': 'Hace una hora',
        'texto_largo': 'Fui a comer con amigos'
      },
      {
        'id': '2',
        'nombre': 'Paco',
        'nombre_img': 'paco',
        'texto': '10:00 am',
        'texto_largo': 'Leí un artículo sobre tecnología'
      },
      {
        'id': '3',
        'nombre': 'Quica',
        'nombre_img': 'quica',
        'texto': '10:00 am',
        'texto_largo': 'Escribí notas sobre un proyecto importante'
      },
      {
        'id': '4',
        'nombre': 'Curro',
        'nombre_img': 'curro',
        'texto': '2:21 pm',
        'texto_largo': 'Preparé la presentación para la reunión de mañana'
      }
    ];

    return (
        <>
            <div className="content card-body">
              <div className="line"></div>

              <div className="list-group">

              {
                personas.map((person) => 
                (
                  <CardComponent 
                    key={person.id}
                    nombre={person.nombre} 
                    nombre_img={person.nombre_img} 
                    texto={person.texto} 
                    texto_largo={person.texto_largo}/>         
                ))
              }

            </div>
          </div>

        </>
    )
}