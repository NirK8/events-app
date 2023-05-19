import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const usePaginationSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 0;

  const setPage = useCallback(
    (page: number) => {
      setSearchParams({
        page: page.toString(),
      });
    },
    [setSearchParams]
  );

  return {
    page,
    setPage,
    setSearchParams,
  };
};

export default usePaginationSearchParams;
