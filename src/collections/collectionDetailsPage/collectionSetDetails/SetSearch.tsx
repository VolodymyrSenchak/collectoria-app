import {Box, Button, Card, TextField, Typography} from '@mui/material';
import { setsIntegrationApi } from '@shared/api';
import { useLoading } from '@shared/hooks';
import { type ISetIntegration } from '@shared/models/integration';
import { isEmpty } from '@shared/utils/objectUtils';
import { useState } from 'react';

export const SetSearch = (params: {
  onPickIntegrationSet: (set: ISetIntegration) => void;
}) => {
  const [setNo, setSetNo] = useState('');
  const [integrationSet, setIntegrationSet] = useState<ISetIntegration | null>(null);
  const { loading, waitWithLoading } = useLoading();

  const searchSetByEnteredCode = async () => {
    const preparedSetNo = setNo.trim();

    if (isEmpty(preparedSetNo)) return;

    const setIntegration = await waitWithLoading(setsIntegrationApi.findSetByCode(preparedSetNo));
    setIntegrationSet(setIntegration);
  };

  const pickFoundSet = () => {
    params.onPickIntegrationSet(integrationSet!);
  };

  return (
    <Box display="flex" flexDirection="column" mb={2}>
      <TextField
        label="Search by set code"
        fullWidth
        margin="normal"
        value={setNo}
        onChange={(e) => setSetNo(e.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <Button
                type="button"
                variant="contained"
                loading={loading}
                onClick={searchSetByEnteredCode}
              >
                Search
              </Button>
            )
          }
        }}
      />
      {integrationSet && !isEmpty(setNo) && (
        <Card>
          <Box display="flex" gap={3}>
            <img src={integrationSet.image_url} height={48} width={48} />

            <Box>
              <Typography variant="subtitle2">Set no</Typography>
              <Typography variant="body1">{integrationSet.no}</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2">Set name</Typography>
              <Typography variant="body1">{integrationSet.name}</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2">Year released</Typography>
              <Typography variant="body1">{integrationSet.year_released}</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2">Weight</Typography>
              <Typography variant="body1">{integrationSet.weight}</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2">Dimensions</Typography>
              <Typography variant="body1">
                {integrationSet.dim_x} x {integrationSet.dim_y} x {integrationSet.dim_z}
              </Typography>
            </Box>

            <Box flex={1}></Box>

            <Button sx={{ justifySelf: "flex-end" }} variant="outlined" onClick={pickFoundSet}>Take this set</Button>
          </Box>
        </Card>
      )}
    </Box>
  );
};