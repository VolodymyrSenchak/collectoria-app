import {Box, useTheme} from '@mui/material';

export const PageSkeleton = (params: {
  heights: (number | string)[];
}) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? theme.palette.grey["700"] : theme.palette.grey["300"];

  return params.heights.map((height, idx) => (
    <Box
      key={idx}
      sx={{
        width: '100%',
        height: height,
        borderRadius: 2,
        background: `linear-gradient(90deg, ${color} 25%, #f5f5f5 50%, ${color} 75%)`,
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
