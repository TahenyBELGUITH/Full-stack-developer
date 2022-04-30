import './style.css';
import {
  personal,
  personalFolders,
  bio,
  bioDescriptionContainer,
  interests,
  interestsDescriptionContainer,
  education,
  educationDescriptionContainer,
} from './variables';

personal.addEventListener('click', () => {
  personalFolders.classList.toggle('display-none');
});

bio.addEventListener('click', () => {
  bioDescriptionContainer.classList.toggle('display-none');
});

interests.addEventListener('click', () => {
  interestsDescriptionContainer.classList.toggle('display-none');
});

education.addEventListener('click', () => {
  educationDescriptionContainer.classList.toggle('display-none');
});
