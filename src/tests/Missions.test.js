import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import { TableComponent } from '../components/Missions';

const store = ({
  missions: {
    missions: [
      {
        mission_name: 'Thaicom',
        mission_id: '9D1B7E4',
        wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
        website: 'http://www.thaicom.net/en/satellites/overview',
        twitter: 'https://twitter.com/thaicomplc',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        reserved: false,
      },
      {
        mission_name: 'Thaicom',
        mission_id: '9D1B7E0',
        wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
        website: 'http://www.thaicom.net/en/satellites/overview',
        twitter: 'https://twitter.com/thaicomplc',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        reserved: false,
      },
      {
        mission_name: 'Thaicom',
        mission_id: '9D1B7E5',
        wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
        website: 'http://www.thaicom.net/en/satellites/overview',
        twitter: 'https://twitter.com/thaicomplc',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        reserved: false,
      },
    ],
    status: 'success',
  },
});

describe('Testing Mission Components', () => {
  it('should render the mission component', () => {
    const leave = () => {};
    const join = () => {};
    const missions = renderer.create(
      <TableComponent
        missions={store.missions.missions}
        leave={leave}
        join={join}
      />,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });

  it('should render the mission component', () => {
    const leave = () => {};
    const join = () => {};
    render(
      <TableComponent
        missions={store.missions.missions}
        leave={leave}
        join={join}
      />,
    );
    const table = screen.getAllByRole('button');
    expect(table).toHaveLength(6);
  });
});
