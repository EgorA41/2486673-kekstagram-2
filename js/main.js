import './big-picture.js';

import { getPhotos } from './photo-description.js';
import { createThumbnails } from './thumbnails.js';

createThumbnails(getPhotos());
