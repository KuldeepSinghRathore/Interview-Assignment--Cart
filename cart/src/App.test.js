import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

{
  "id": "bb463b8b-b76c-4f6a-9726-65ab5730b69b",
  "name": "Generic Concrete Table",
  "image": "https://rukminim2.flixcart.com/image/612/612/kiw1dow0-0/portable-laptop-table/x/k/e/plywood-80007-hariom-all-in-one-wooden-original-imafykngt4etzcxp.jpeg?q=70",
  "price": "84.00",
  "material": "Granite",
  "brand": "quo"
}