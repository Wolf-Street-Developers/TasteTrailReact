import React from 'react';


const LoaderWrapper = ({ isLoading, loader, children }) => {
    return (
        <div style={{ position: 'relative' }}>
        {isLoading ? (
            <div style={styles.loaderContainer}>
            {loader || <DefaultLoader />}
            </div>
        ) : (
            children
        )}
        </div>
    );
};

const DefaultLoader = () => (
<div style={styles.defaultLoader}>

</div>
);

const styles = {
    loaderContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 10,
    },
    defaultLoader: {
      fontSize: '18px',
      color: '#555',
    },
};

export default LoaderWrapper;