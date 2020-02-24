import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Modal from './modal';
import '@testing-library/jest-dom';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders content', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Modal hidden="true" content={<p>Hello!</p>}/>, container);
  });
  //selects modal button
  const modalContent = document.getElementsByClassName('modal-content')[0];
  expect(modalContent).toContainHTML("<p>Hello!</p>");
});
