import React from 'react';
import renderer from 'react-test-renderer';
import ProfileComponent from '../components/Profile';

// Mock the child components to avoid actual rendering
jest.mock('../components/JoinedMissions', () => 'JoinedMissions');
jest.mock('../components/ReservedRockets', () => 'ReservedRockets');
jest.mock('../components/ReservedDragons', () => 'ReservedDragons');

describe('ProfileComponent', () => {
  it('renders correctly', () => {
    const component = renderer.create(<ProfileComponent />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
