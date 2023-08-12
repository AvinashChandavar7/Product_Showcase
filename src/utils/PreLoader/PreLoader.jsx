import React, { useEffect } from 'react';
import './PreLoader.css';
import { preLoaderAnim } from '../../animations';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <span class="loader"></span>
      <div>
        <span class="loaders">Loading</span>
      </div>
    </div>
  );
};

export default PreLoader;
