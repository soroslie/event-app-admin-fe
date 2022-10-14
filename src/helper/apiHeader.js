import LocalStorageConstant from '../constants/local_storage';

const setPrepareHeader = (headers, { getState }) => {
  const token = localStorage.getItem(LocalStorageConstant.tokenKey);
  headers.set('authorization', `Bearer ${token}`);

  return headers;
};

export default setPrepareHeader;
