import { User } from './user.models';

describe('UserModels', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
