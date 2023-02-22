import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel with response status "ok"', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 100 });

  expect(getLevel(1)).toBe('Ваш текущий уровень: 100');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should call getLevel with response status "false"', () => {
  fetchData.mockReturnValue({ status: 'false', level: 100 });

  expect(getLevel(2)).toEqual('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/2');
});
