import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const loading = false;
  const signed = false;

  if (loading) {
    return (
      <div>
        <h1> carregando</h1>
      </div>
    );
  }

  if (!signed && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
