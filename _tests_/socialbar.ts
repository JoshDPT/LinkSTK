import { render } from '@testing-library/react';
import SocialBar, { LinkProps } from '@/components/SocialBar';

test('renders SocialBar component with correct props', () => {
  const links: LinkProps[] = [
    { title: 'Twitter', href: 'https://twitter.com' },
    { title: 'GitHub', href: 'https://github.com' },
  ];
  const { getAllByTestId } = render(<SocialBar links={links} />);
  const socialLinks = getAllByTestId('social-link');
  expect(socialLinks.length).toBe(2);
});