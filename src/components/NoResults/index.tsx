type NoResultsPops = {
  message?: string;
};
// TODO: add an animation or something, make this Component look cooler ;)
export const NoResults = ({ message }: NoResultsPops) => {
  return message && <h3>{message}</h3>;
};
