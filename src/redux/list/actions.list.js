import asanshahr from '../../api/asanshahr';

export const fetchList = () => async dispatch => {
  const response = await asanshahr.get('/offers?pageSize=10&pageNumber=1');

  dispatch({ type: 'FETCH_LIST', payload: response.data });
};
