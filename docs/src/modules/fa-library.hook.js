import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faRocket } from '@fortawesome/free-solid-svg-icons';

const useFontAwesomeLibrary = () => {
  const initializeIconLibrary = () => {
    library.add(faGithub, faRocket, faExternalLinkAlt);
  };

  return initializeIconLibrary();
};

export default useFontAwesomeLibrary;
