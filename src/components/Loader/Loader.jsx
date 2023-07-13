import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return <Audio
    height="80"
    width="80"
    radius="9"
    color="#191970"
    ariaLabel="loading"
    wrapperStyle={{
      margin: '0 auto',
    }}
  />
};

export default Loader;