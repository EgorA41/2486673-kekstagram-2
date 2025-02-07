const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnail = template.cloneNode(true);

  const pictureImage = thumbnail.querySelector('.picture__img');

  pictureImage.src = url;
  pictureImage.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments;

  fragment.append(thumbnail);
};

const createThumbnails = (photo) => {
  photo.forEach(createThumbnail);
  container.append(fragment);
};

export { createThumbnails };
