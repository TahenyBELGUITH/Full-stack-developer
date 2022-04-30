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
  language,
  languageContainer,
  frameworks,
  frameworksContainer,
  skills,
  skillsContainer,
  professional,
  professionalFolders,
} from './variables.js';

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

professional.addEventListener('click', () => {
  professionalFolders.classList.toggle('display-none');
});

language.addEventListener('click', () => {
  languageContainer.classList.toggle('display-none');
});

frameworks.addEventListener('click', () => {
  frameworksContainer.classList.toggle('display-none');
});

skills.addEventListener('click', () => {
  skillsContainer.classList.toggle('display-none');
});
