import LocalStorageConstant from '../constants/local_storage';

export default function setPrepareHeader(headers) {
  const token = localStorage.getItem(LocalStorageConstant.tokenKey);
  headers.set('authorization', `Bearer ${token}`);

  return headers;
}
