import { useState } from 'react';
import {Formik, Form, Field} from 'formik';
import './header.css';
import './content.css';
import './article.css';

const FindImages = () => {
    const [photos, setPhotos] = useState([]);
    const open = url => window.open(url)
    console.log({ photos });
  
    return (
        <div>
        <header>
            <h3>Find the image you are looking for on Unsplash site</h3>
          <Formik
            initialValues={{ search: ''}}
            onSubmit={async values=> {
  
              const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
                headers: {
                  'Authorization': 'Client-ID QT45SAp-0v4m0rDhCHvG-BcRhJ3akax87idWzH_ikAQ'
                }
              })
              const data = await response.json()
  
              setPhotos(data.results);
  
            }}
          >
            <Form>
              <Field name='search' />
            </Form>
          </Formik>
        </header>
  
        <div className='container'>
            <div className="center">
              {photos.map(photo => 
                <article
                  className='article-photos'
                  key={photo.id}
                  onClick={() => open(photo.links.html)}>
                    <img src={photo.urls.regular} alt={photo.alt_description}/>
                    <p>{[photo.description, photo.alt_description].join(' - ')}</p>
                </article>
              )}
            </div>
        </div>
      </div>
    )
}

export default FindImages
