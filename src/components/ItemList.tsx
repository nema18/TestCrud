import React, { useEffect, useState } from 'react';
// axios
import axios from 'axios';
// bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Spinner  from 'react-bootstrap/Spinner';

interface Item {
  id: string;
  name: string;
  avatar: string;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://6172cfe5110a740017222e2b.mockapi.io/elements')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return (
  //     <div className='d-flex justify-content-center align-items-center min-vh-100' data-testid="loading-spinner">
  //       <Spinner animation="border" />
  //     </div>
  //   );
  // }

  return (
    <div>
      {
        loading 
        ? 
          <div className='d-flex justify-content-center align-items-center min-vh-100' data-testid="loading-spinner">
            <Spinner animation="border" />
          </div> 
        : <div className='d-flex justify-content-center mw-50 mt-2 mb-2'>
            <ListGroup className="d-flex justify-content-center gap-2">
              {items.map(item => (
                <div key={item.id} className="d-flex card">
                  <div className='card-body d-flex justify-content-start align-items-center gap-4'>
                    <Image src={item.avatar} roundedCircle width="50"  alt={item.name} />
                      {item.name}
                  </div>
                </div>
              ))}
            </ListGroup>
          </div>
      }
    </div>
    
  );
};

export default ItemList;