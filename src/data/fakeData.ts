/**
 * Fake data for the test. You don't need to understand
 * the implementation detail of it. The only thing important to know is
 * the Player[] type which is what {data} from useFakeQuery() return resolves too
 */

import type { Player } from './types';

const playerNames = [
  'Zaydan Nicholson',
  'Camden Pemberton',
  'Ahmad Paul',
  'Alivia Gaines',
  'Kayla Yu',
  'Gianni Dickerson',
  'Muskaan Mcguire',
  'Shoaib Benton',
  'Ishmael Cole',
  'Ayyub Carr',
  'Lennon Mahoney',
  'Scarlet Marquez',
  'Lexi-Mae Cline',
  'Mandy Salazar',
  'Rahim Austin',
  'Conal Coates',
  'Mahir Ortiz',
  'Annabel Parsons',
  'Sullivan Small',
  'Charlton Fitzpatrick',
  'Barry Sargent',
  'Nansi Ventura',
  'Demi Warren',
  'Zephaniah Easton',
  'Britney Donaldson',
  'Keiran Ireland',
  'Denis Morton',
  'John Hogan',
  'Gwion Jordan',
  'Traci Connolly',
  'Hywel Payne',
  'Zaynab Fellows',
  'Kason Quinn',
  'Scarlett Walton',
  'Jawad Gross',
  'Emanuel Herbert',
  'Lyndsey Navarro',
  'Lili Salter',
  'Maariya Foster',
  'Aariz Butler',
  'Austen Barrett',
  'Connor Gamble',
  'Sinead Bailey',
  'Shaan Sexton',
  'Nell Stephens',
  'Eleanor Mccabe',
  'Susie Naylor',
  'Rhodri Spencer',
  'Ace Conroy',
  'Kierran Lancaster',
];

const locationNames = [
  'Aethelney',
  'Airedale',
  'Warthford',
  'Arkmunster',
  'Erostey',
  'Goldenleaf',
  'Taedmorden',
  'Lundy',
  'Auchendale',
  'Aramore',
];

const player1: Player = {
  membershipDate: '2020-01-02',
  fullName: playerNames[23], // Zephaniah Easton
  avatar: 'https://cutewallpaper.org/22/british-shorthair-wallpapers/90513132.jpg',
  games: [
    {
      date: '2020-02-14',
      location: locationNames[0],
      otherPlayers: [playerNames[0], playerNames[3], playerNames[7], playerNames[9]],
      winnerName: playerNames[23],
    },
    {
      date: '2020-07-01',
      accurateDate: {
        date: '2020-08-01',
      },
      location: locationNames[1],
      otherPlayers: [playerNames[0], playerNames[18], playerNames[9], playerNames[12]],
      winnerName: playerNames[23],
    },
    {
      date: '2020-02-02',
      accurateDate: {
        date: '2020-02-09',
      },
      location: locationNames[0],
      otherPlayers: [
        playerNames[0],
        playerNames[2],
        playerNames[8],
        playerNames[9],
        playerNames[36],
      ],
      winnerName: playerNames[40],
    },
    {
      date: '2020-02-16',
      location: locationNames[0],
      otherPlayers: [playerNames[0], playerNames[3], playerNames[7], playerNames[9]],
      winnerName: playerNames[23],
    },
    {
      date: '2020-02-24',
      location: locationNames[0],
      otherPlayers: [playerNames[0], playerNames[3], playerNames[7], playerNames[9]],
      winnerName: playerNames[27],
    },
  ],
};

const player2: Player = {
  membershipDate: '2020-01-10',
  fullName: playerNames[41], // John Hogan
  avatar:
    'https://www.picgaga.com/uploads/wallpaper/cute-cat-mobile/white-cute-cat-wallpaper-free-hd-download1617287096.jpg',
  games: [
    {
      date: '2020-03-02',
      accurateDate: {
        date: '2020-02-21',
      },
      location: locationNames[0],
      otherPlayers: [playerNames[3], playerNames[2], playerNames[5], playerNames[19]],
      winnerName: playerNames[5],
    },
    {
      date: '2020-02-23',
      location: locationNames[4],
      otherPlayers: [
        playerNames[23],
        playerNames[15],
        playerNames[29],
        playerNames[12],
        playerNames[12],
        playerNames[35],
        playerNames[20],
      ],
      winnerName: playerNames[41],
    },
    {
      date: '2020-03-23',
      location: locationNames[4],
      otherPlayers: [
        playerNames[1],
        playerNames[0],
        playerNames[4],
        playerNames[6],
        playerNames[8],
        playerNames[11],
        playerNames[22],
      ],
      winnerName: playerNames[3],
    },
    {
      date: '2020-01-02',
      accurateDate: {
        date: '2020-02-21',
      },
      location: locationNames[0],
      otherPlayers: [playerNames[17], playerNames[19], playerNames[31], playerNames[33]],
      winnerName: playerNames[5],
    },
    {
      date: '2020-03-02',
      accurateDate: {
        date: '2020-04-01',
      },
      location: locationNames[0],
      otherPlayers: [playerNames[32], playerNames[34], playerNames[36], playerNames[37]],
      winnerName: playerNames[5],
    },
  ],
};
// Demi Warren
const player3: Player = {
  membershipDate: '2020-01-01',
  fullName: playerNames[22],
  avatar: 'https://s2982.pcdn.co/wp-content/uploads/2022/03/cat.jpg',
  games: [
    {
      date: '2020-08-02',
      accurateDate: {
        date: '2020-08-02',
      },
      location: locationNames[3],
      otherPlayers: [playerNames[3], playerNames[0], playerNames[23]],
      winnerName: playerNames[0],
    },
    {
      date: '2020-02-02',
      accurateDate: {
        date: '2020-02-22',
      },
      location: locationNames[2],
      otherPlayers: [
        playerNames[1],
        playerNames[0],
        playerNames[11],
        playerNames[10],
        playerNames[2],
        playerNames[5],
        playerNames[12],
      ],
      winnerName: playerNames[10],
    },
  ],
};
// Mahir Ortiz
const player4: Player = {
  membershipDate: '2020-01-01',
  fullName: playerNames[16],
  avatar: 'https://www.comfortedkitty.com/wp-content/uploads/2021/03/image1-1-677x675.jpg',
  games: [
    {
      date: '2020-02-14',
      accurateDate: {
        date: '2020-09-10',
      },
      location: locationNames[3],
      otherPlayers: [playerNames[0]],
      winnerName: playerNames[16],
    },
    {
      date: '2020-02-14',
      accurateDate: {
        date: '2020-09-10',
      },
      location: locationNames[3],
      otherPlayers: [playerNames[0]],
      winnerName: playerNames[16],
    },
    {
      date: '2020-02-14',
      accurateDate: {
        date: '2020-09-10',
      },
      location: locationNames[3],
      otherPlayers: [playerNames[0]],
      winnerName: playerNames[16],
    },
    {
      date: '2020-02-02',
      accurateDate: {
        date: '2020-02-22',
      },
      location: locationNames[2],
      otherPlayers: [
        playerNames[1],
        playerNames[0],
        playerNames[11],
        playerNames[10],
        playerNames[2],
        playerNames[5],
      ],
      winnerName: playerNames[10],
    },
  ],
};

// Alivia Gaines
export const player5: Player = {
  membershipDate: '2020-01-01',
  fullName: playerNames[3],
  avatar: 'https://miro.medium.com/max/1400/1*__ygWNIuQg9K1IkfSG_-TA.jpeg',
  games: [
    {
      date: '2020-10-20',
      accurateDate: {
        date: '2020-10-20',
      },
      location: locationNames[3],
      otherPlayers: [playerNames[0]],
      winnerName: playerNames[3],
    },
    {
      date: '2020-02-14',
      accurateDate: {
        date: '2020-09-10',
      },
      location: locationNames[3],
      otherPlayers: [playerNames[0]],
      winnerName: playerNames[3],
    },
    {
      date: '2020-02-14',
      accurateDate: {
        date: '2020-09-10',
      },
      location: locationNames[3],
      otherPlayers: [playerNames[0]],
      winnerName: playerNames[3],
    },
    {
      date: '2020-02-14',
      accurateDate: {
        date: '2020-09-10',
      },
      location: locationNames[3],
      otherPlayers: [playerNames[0]],
      winnerName: playerNames[16],
    },
    {
      date: '2020-02-02',
      accurateDate: {
        date: '2020-02-22',
      },
      location: locationNames[2],
      otherPlayers: [
        playerNames[1],
        playerNames[0],
        playerNames[11],
        playerNames[10],
        playerNames[2],
        playerNames[5],
      ],
      winnerName: playerNames[10],
    },
  ],
  flipImageOnMobile: true,
};

export const players = [player1, player2, player3, player4, player5];
