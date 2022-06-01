import { PlayerFormatted } from '../../types';
import { Avatar, PlayerBadge, PlayerCardContainer, PlayerInfo } from './styles';

export const PlayerCard = ({
  lastActivityMoment,
  winRatio,
  uniqueOpponents,
  avatar,
  fullName,
  flipImageOnMobile,
}: PlayerFormatted) => {
  const lastActivity = lastActivityMoment.format('YYYY-MM-DD');
  return (
    <PlayerCardContainer>
      <Avatar src={avatar} flipImageOnMobile={flipImageOnMobile} />
      <PlayerInfo>
        <h5>{fullName}</h5>
        <span className="lastActivity">Last Activity: {lastActivity}</span>
        <span>Unique Opponents: {uniqueOpponents}</span>
      </PlayerInfo>

      <PlayerBadge value={winRatio} />
    </PlayerCardContainer>
  );
};
