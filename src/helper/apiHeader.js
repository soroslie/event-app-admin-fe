import LocalStorageConstant from '../constants/local_storage';

const setPrepareHeader = (headers, { getState }) => {
  const token = localStorage.getItem(LocalStorageConstant.tokenKey);
  headers.set('authorization', `Bearer ${token}`);

  return headers;
};

const setPrepareHeaderFormData = (headers, { getState }) => {
  const token = localStorage.getItem(LocalStorageConstant.tokenKey);
  headers.set('authorization', `Bearer ${token}`);

  headers.set('Content-Type', 'multipart/form-data');
  return headers;
};

export { setPrepareHeaderFormData };

export default setPrepareHeader;
