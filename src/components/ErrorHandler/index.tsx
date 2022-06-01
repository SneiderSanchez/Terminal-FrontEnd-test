import { ErrorContainer } from './styles';

type ErrorHandlerProps = {
  errorObj: Error;
};

export const ErrorHandler = ({ errorObj }: ErrorHandlerProps) => {
  // We can do A LOT of things here, send the error to a log tool, show a fallback data, fancy styles, and so on ...
  return (
    <ErrorContainer role="alert" aria-live="assertive">
      <h3>An error occurred 😭 : {errorObj.message || 'Unknown Error'} </h3>
    </ErrorContainer>
  );
};
