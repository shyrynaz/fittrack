import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with default props', () => {
    const testRenderer = TestRenderer.create(<Button label='Submit' />);
    const testInstance = testRenderer.root;

    expect(testInstance.findByType('Text').props.children).toBe('Submit');
  });

  it('renders with custom props', () => {
    const testRenderer = TestRenderer.create(
      <Button label='Save' variant='secondary' size='lg' />
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType('Text').props.children).toBe('Save');
  });

  it('matches snapshot', () => {
    const tree = TestRenderer.create(<Button label='Submit' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
