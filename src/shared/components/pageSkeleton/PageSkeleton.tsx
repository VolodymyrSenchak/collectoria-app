import {Box} from '@mui/material';

export const PageSkeleton = (params: {
  heights: (number | string)[];
}) => {
  return params.heights.map((height, idx) => (
    <Box
      key={idx}
      sx={{
        width: '100%',
        height: height,
        borderRadius: 2,
        background: 'linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)',
        backgroundSize: '200% 100%',
        animation: 'skeleton-loading 1.5s infinite linear',
        marginBottom: 1,
        '@keyframes skeleton-loading': {
          '0%': {backgroundPosition: '200% 0'},
          '100%': {backgroundPosition: '-200% 0'},
        },
      }}/>
  ));
};
