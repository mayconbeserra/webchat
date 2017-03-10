import { validatePost, validatePut } from './validateUsers';

export default function () {
  return {
    usersPost: validatePost,
    usersPut: validatePut,
  };
}
