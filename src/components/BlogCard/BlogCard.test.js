import { render, screen } from '@testing-library/react';
import BlogCard from './BlogCard';

test('should render the blog card with title, subtitle, author and text', () => {
  const container = render(
    <BlogCard
      title="Test title"
      authors={ { name: 'author' } }
      subtitle="Test subtitle"
      text="lorem ipsum blah blah blah"
      image="https://www.fillmurray.com/400/300"
    />
  );
  const title = screen.getByText('Test title');
  expect(title).toBeVisible();
});
