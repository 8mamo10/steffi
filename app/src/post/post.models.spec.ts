import { Post } from './post.models';

describe('PostModels', () => {
  it('should be defined', () => {
    expect(new Post()).toBeDefined();
  });
});
