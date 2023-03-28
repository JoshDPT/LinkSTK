import { render } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom'

test('renders Home component without crashing', () => {
  render(<Home />);
});