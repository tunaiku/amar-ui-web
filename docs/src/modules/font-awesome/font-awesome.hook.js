import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faRocket } from '@fortawesome/free-solid-svg-icons';

const useFontAwesome = () => {
  return library.add(faGithub, faRocket, faExternalLinkAlt);
};

export default useFontAwesome;
