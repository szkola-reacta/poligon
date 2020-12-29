import { useState } from 'react';

import api from '../api';

function CreateMovie() {

  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const [title, description, video_url] = event.target.elements;

    const values = {
      title: title.value,
      description: description.value,
      video_url: video_url.value
    };

    // console.log('values', values);
    api.post('/movies', values).then(() => setFormSent(true));
  };

  return (
    <div>
      {formSent && <span>Success!</span>}
      {!formSent &&
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title-field">Title</label>
            <input type="text" id="title-field" name="title" />
          </div>
          <div>
            <label htmlFor="description-field">Description</label>
            <input type="text" id="description-field" name="description" />
          </div>
          <div>
            <label htmlFor="video-url-field">Video URL</label>
            <input type="text" id="video-url-field" name="video_url" />
          </div>
          <button type="submit">Submit</button>
        </form>
      }
    </div>
  );
}

export default CreateMovie;
