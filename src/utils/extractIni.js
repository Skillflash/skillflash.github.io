const extractInitials = value => {
  let name = '';

  if (value && value.length > 0) {
    name = value;
  } else {
    name = 'Skill Flash';
  }

  let letters = name
    .split(' ')
    .slice(0, 2)
    .map(l => l[0])
    .join('')
    .toUpperCase();

  return letters;
};

export default extractInitials;
