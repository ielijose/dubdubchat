function getRandomCharacter(selected) {
  return selected[Math.floor(Math.random() * selected.length)];
}

function simulateMessageWritingTime(quote) {
  const min = 1000;
  const max = 5000;
  const timeMultiplierInMs = 30;
  const time = quote.length * timeMultiplierInMs;
  if (time < min) {
    return min;
  }
  if (time > max) {
    return max;
  }

  return time;
}

function getMembers(selected, me) {
  return selected
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .filter(m => m.id !== me.id)
    .slice(0, 7)
    .map(c => {
      return c.name.split(' ')[0];
    });
}

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getFirstName(name = '') {
  let result = name;
  const pieces = name.split(' ');
  if (pieces.length > 0) {
    [result] = pieces;
  }
  return result;
}

export default {
  getRandomCharacter,
  simulateMessageWritingTime,
  getMembers,
  generateRandomColor,
  getFirstName,
};
