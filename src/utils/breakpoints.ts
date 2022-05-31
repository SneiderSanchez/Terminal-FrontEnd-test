const size = {
  sm: '640px',
  md: '641px-1179px',
  lg: '1180px',
};
const mdSplit = size.md.split('-');
const device = {
  sm: `(max-width: ${size.sm})`,
  md: `(min-width:${mdSplit[0]}) and (max-width:${mdSplit[1]})`,
  lg: `(min-width: ${size.lg})`,
};

export { device };
