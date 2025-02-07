import {isEscapeKey} from './util.js';


const container = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureShownComments = bigPicture.querySelector('.social__comment-shown-count');
const bigPictureCommentsCount = bigPicture.querySelector('.social__comment-total-count');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const createBigPicture = (pictureData) => {
  bigPictureImg.src = pictureData.url;
  bigPictureLikesCount.textContent = pictureData.likes;
  // bigPictureShownComments.textContent = pictureData.comments;
  bigPictureCommentsCount.textContent = pictureData.commentsCount;
};

function openBigPicture (pictureData) {
  bigPicture.classList.remove('hidden');
  createBigPicture(pictureData);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}


container.addEventListener('click', (evt) => {
  evt.preventDefault();
  const picture = evt.target.closest('.picture');
  if (!picture) {
    return;
  }
  const pictureImgSrc = picture.querySelector('img').src;
  const pictureLikesCount = picture.querySelector('.picture__likes').textContent;
  // const pictureShownComments = picture.querySelector('.social__comment-shown-count').textContent;
  const pictureCommentsCount = picture.querySelector('.picture__comments').length;

  const pictureData = {
    url: pictureImgSrc,
    likes: pictureLikesCount,
    // comments: pictureShownComments,
    commentsCount: pictureCommentsCount,
  };

  openBigPicture(pictureData);

}
);

bigPictureClose.addEventListener('click', closeBigPicture);


// Реализовать сценарий просмотра фотографий в полноразмерном режиме. В таком режиме пользователь получает несколько дополнительных возможностей: детально рассмотреть изображение, поставить «лайк», почитать комментарии, оставленные другими пользователями.


// Окно должно открываться при клике на миниатюру. Данные для окна (изображение, комментарии, лайки и так далее) берите из того же объекта, который использовался для отрисовки соответствующей миниатюры.

// Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

// Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

// Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

// Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.

// Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.

// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//   <img
//     class="social__picture"
//     src="{{аватар}}"
//     alt="{{имя комментатора}}"
//     width="35" height="35">
//   <p class="social__text">{{текст комментария}}</p>
// </li>

//         Копировать


// Описание фотографии description вставьте строкой в блок .social__caption.

// После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

// После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

// Подключите модуль в проект.

// Как связать модули миниатюр и полноразмерного режима?
// Задача не имеет одного верного решения, поэтому будет правильным как использование третьего модуля для связки двух других, так и импорт модуля полноразмерных изображений в модуль миниатюр и дальнейшая работа с интерфейсом этого модуля, addEventListener и замыканиями. Последнее решение похоже на демонстрацию по учебному проекту. А первое — с третьим модулем — более сложное из-за отсутствия примера, но самостоятельное. В качестве третьего модуля можно выбрать точку входа, а можно завести отдельный модуль, например «Галерея». Решение за вами.
