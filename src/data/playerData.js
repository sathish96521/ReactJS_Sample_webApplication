const randomNames = [
  'John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Chris Davis',
  'Jessica Wilson', 'Michael Clark', 'Sarah Lewis', 'Daniel Young', 'Laura Allen',
  'David King', 'Emma Scott', 'James Wright', 'Olivia Green', 'Ethan Baker',
  'Isabella Harris', 'Mason Moore', 'Sophia Adams', 'Logan Lee', 'Mia Thompson'
];

const generatePlayers = (sport) => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: randomNames[index % randomNames.length],
    position: `Position ${index + 1}`,
    image: `https://source.unsplash.com/random/150x150?${sport}&sig=${index + 1}`
  }));
};

export const volleyballPlayers = generatePlayers('volleyball');
export const footballPlayers = generatePlayers('football');
export const cricketPlayers = generatePlayers('cricket');
export const basketballPlayers = generatePlayers('basketball');
export const hockeyPlayers = generatePlayers('hockey');
