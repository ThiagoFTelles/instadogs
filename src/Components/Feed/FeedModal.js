import React from 'react';
import styles from './FeedModal.module.css';
import usefetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo }) => {
  const { data, loading, error, request } = usefetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      <Error error={error} />
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
