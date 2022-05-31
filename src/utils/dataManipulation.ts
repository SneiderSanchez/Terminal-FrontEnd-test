import moment from 'moment';
import { Player } from '../data/types';
import { PlayerFormatted } from '../types';

const transformPlayerData = (player: Player): PlayerFormatted => {
  const { games, membershipDate, ...playerDataToReturn } = player;
  let victories = 0;
  const datesArray = [];
  const allOponents = [];
  games.forEach((game) => {
    // If the winner player is the current player add one victory
    if (game.winnerName === player.fullName) {
      victories = victories + 1;
    }
    // Push date o current date to an array of dates
    datesArray.push(moment(game.accurateDate ? game.accurateDate.date : game.date, 'YYYY-MM-DD'));

    //Push oponents to opponents array and after that get the unique values
    allOponents.push(...game.otherPlayers);
  });

  const uniqueOpponents = allOponents.filter(
    (item, index, arr) => arr.lastIndexOf(item) === arr.indexOf(item),
  );

  // Get win ratio or pass 0 if no victories
  const winRatio = victories ? Math.round((victories / games.length) * 10) / 10 : 0;
  return {
    lastActivityMoment: moment.max(datesArray),
    winRatio,
    uniqueOpponents: uniqueOpponents.length,
    // send other data from player
    ...playerDataToReturn,
  };
};

export const transformPlayerArrayData = (data: Player[] | null) =>
  data &&
  data.length &&
  data
    // transform the data with the values that I need on FED
    .map((player) => transformPlayerData(player))
    // Sort the array from Top-Bottom
    .sort((a, b) => b.lastActivityMoment.valueOf() - a.lastActivityMoment.valueOf());
