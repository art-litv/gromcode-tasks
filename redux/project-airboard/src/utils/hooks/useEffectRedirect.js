import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useEffectRedirect(path, dependencies) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, dependencies);
}
