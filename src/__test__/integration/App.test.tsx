import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import moment from 'moment';
import App from '../../App';
import { players } from '../../data/fakeData';
import * as FakeFetchClient from '../../data/fakeFetchClient';
import { darkTheme, lightTheme } from '../../theme';
import { transformPlayerArrayData } from '../../utils';

describe('Should render page normally', () => {
  it('Should render Header, SearchBar and toggleTheme components', async () => {
    render(<App />);

    // Verify that header is rendered
    const headerElement = screen.getByRole('heading', { name: 'Recent Activity' });
    expect(headerElement).toBeInTheDocument();

    // Verify that the Searchbar is rendering correctly
    const formSearchBar = screen.getByRole('form', { name: 'searchBar' });
    expect(formSearchBar).toBeInTheDocument();
    expect(formSearchBar.children.length).toBe(2);

    // Input searchbar
    const searchInput = screen.getByPlaceholderText('Search By Name');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
    expect(searchInput).toHaveAttribute('id', 'searchInput');
  });

  it('Should render LoadingScreen when loading page and after that should show player data', async () => {
    render(<App />);
    // Verify that header is rendered
    const headerElement = screen.getByRole('heading', { name: 'Recent Activity' });
    expect(headerElement).toBeInTheDocument();

    // Should render Loading... message initially
    expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();
    // Wait unitl the request is finished and loading header is removed
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: 'Loading...' }));

    // verify that player cards container is rendered
    const playerCardsContainer = await screen.findByTestId('playersCardContainer');
    expect(playerCardsContainer).toBeInTheDocument();
  });

  it('Should render player data', async () => {
    render(<App />);
    // Wait unitl the request is finished and loading header is removed
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: 'Loading...' }));

    // Get PlayerCards Info and verify that 5 have been rendered
    const playerCardsInfo = await screen.findByTestId('playersCardContainer');
    expect(playerCardsInfo.children.length).toBe(5);

    // Test the first Card to verify that the data have been rendered correctly
    const aliviaPlayerCard = playerCardsInfo.children[0];
    // Player avatar
    expect(aliviaPlayerCard.children[0]).toHaveAttribute(
      'src',
      'https://miro.medium.com/max/1400/1*__ygWNIuQg9K1IkfSG_-TA.jpeg',
    );
    // Player fullName
    expect(aliviaPlayerCard.children[1].children[0]).toHaveTextContent('Alivia Gaines');
    // Player last activity
    expect(aliviaPlayerCard.children[1].children[1]).toHaveTextContent('Last Activity: 2020-10-20');
    // Player unique Opponents
    expect(aliviaPlayerCard.children[1].children[2]).toHaveTextContent('Unique Opponents: 5');
    // Player win ratio
    expect(aliviaPlayerCard.children[2]).toHaveTextContent('0.6');
  });

  it('Should render ToggleTheme button and change colors on some components', async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search By Name');
    const formSearchBar = screen.getByRole('form', { name: 'searchBar' });

    // Wait unitl the request is finished and loading header is removed
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: 'Loading...' }));

    const playerCardsInfo = await screen.findByTestId('playersCardContainer');
    const aliviaPlayerCard = playerCardsInfo.children[0];

    // Verify that we are using light theme initially
    const toggleThemeButton = screen.getByRole('button', { name: '🌝 🌚' });
    expect(toggleThemeButton).toBeInTheDocument();
    expect(aliviaPlayerCard).toHaveStyleRule('color', lightTheme.text);
    expect(aliviaPlayerCard).toHaveStyleRule('background', lightTheme.background);
    expect(searchInput).toHaveStyleRule('color', lightTheme.lightColor);
    expect(searchInput).toHaveStyleRule('background', lightTheme.lightBackground);
    expect(formSearchBar).toHaveStyleRule('border', `1px solid ${lightTheme.border}`);
    expect(formSearchBar).toHaveStyleRule('background', lightTheme.lightBackground);

    // Change theme
    fireEvent.click(toggleThemeButton);

    // Verify that after the change we are using dark theme
    expect(aliviaPlayerCard).toHaveStyleRule('color', darkTheme.text);
    expect(aliviaPlayerCard).toHaveStyleRule('background', darkTheme.background);
    expect(searchInput).toHaveStyleRule('color', darkTheme.lightColor);
    expect(searchInput).toHaveStyleRule('background', darkTheme.lightBackground);
    expect(formSearchBar).toHaveStyleRule('border', `1px solid ${darkTheme.border}`);
    expect(formSearchBar).toHaveStyleRule('background', darkTheme.lightBackground);
  });

  it('Should render ErrorHandler component when request fails', async () => {
    // Create a mock to force the error on
    const useFakeQueryMock = jest
      .spyOn(FakeFetchClient, 'useFakeQuery')
      .mockReturnValue({ data: null, error: new Error('Something went wrong!'), loading: false });

    render(<App />);
    // Verify that the mock was called and the fallback error component is rendered
    expect(useFakeQueryMock).toBeCalledTimes(1);
    expect(
      screen.getByRole('heading', { name: 'An error occurred 😭 : Something went wrong!' }),
    ).toBeInTheDocument();
  });
});

describe('Should manipulate data as expected', () => {
  it('Should transform player data correctly', () => {
    const playerData = transformPlayerArrayData(players);
    // This array represents the expectedReturnedData from the transform function
    const expectedOutput = [
      {
        lastActivityMoment: moment('2020-10-20', 'YYYY-MM-DD'),
        winRatio: 0.6,
        uniqueOpponents: 5,
        fullName: 'Alivia Gaines',
        avatar: 'https://miro.medium.com/max/1400/1*__ygWNIuQg9K1IkfSG_-TA.jpeg',
        flipImageOnMobile: true,
      },
      {
        lastActivityMoment: moment('2020-09-10', 'YYYY-MM-DD'),
        winRatio: 0.8,
        uniqueOpponents: 5,
        fullName: 'Mahir Ortiz',
        avatar: 'https://www.comfortedkitty.com/wp-content/uploads/2021/03/image1-1-677x675.jpg',
      },
      {
        lastActivityMoment: moment('2020-08-02', 'YYYY-MM-DD'),
        winRatio: 0,
        uniqueOpponents: 8,
        fullName: 'Demi Warren',
        avatar: 'https://s2982.pcdn.co/wp-content/uploads/2022/03/cat.jpg',
      },
      {
        lastActivityMoment: moment('2020-08-01', 'YYYY-MM-DD'),
        winRatio: 0.6,
        uniqueOpponents: 5,
        fullName: 'Zephaniah Easton',
        avatar: 'https://cutewallpaper.org/22/british-shorthair-wallpapers/90513132.jpg',
      },
      {
        lastActivityMoment: moment('2020-04-01', 'YYYY-MM-DD'),
        winRatio: 0.2,
        uniqueOpponents: 22,
        fullName: 'John Hogan',
        avatar:
          'https://www.picgaga.com/uploads/wallpaper/cute-cat-mobile/white-cute-cat-wallpaper-free-hd-download1617287096.jpg',
      },
    ];
    expect(playerData).toBeInstanceOf(Array);
    expect(playerData.length).toBe(5);

    //Verifiy that each player output after transform is the expected one
    playerData.forEach((player, index) => {
      expect(playerData[index]).toEqual(expectedOutput[index]);
    });
  });
});
