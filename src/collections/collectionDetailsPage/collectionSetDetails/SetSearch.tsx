import { Box, Button, TextField, Typography } from '@mui/material';
import { setsIntegrationApi } from '@shared/api';
import { type ISetIntegration } from '@shared/models/integration';
import { isEmpty } from '@shared/utils/objectUtils';
import { useState } from 'react';

export const SetSearch = (params: {
  onPickIntegrationSet: (set: ISetIntegration) => void;
}) => {
  const [setNo, setSetNo] = useState('');
  const [integrationSet, setIntegrationSet] = useState<ISetIntegration | null>(null);

  const searchSetByEnteredCode = async () => {
    const setIntegration = await setsIntegrationApi.findSetByCode(setNo);
    if (setIntegration) {
      setIntegrationSet(setIntegration);
    }
  };

  const pickFoundSet = () => {
    params.onPickIntegrationSet(integrationSet!);
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        label="Search by set code"
        fullWidth
        type="search"
        margin="normal"
        value={setNo}
        onChange={(e) => setSetNo(e.target.value)}
      />
      <Button type="button" onClick={searchSetByEnteredCode}>Search</Button>
      {integrationSet && !isEmpty(setNo) && (
        <Box>
          <Typography variant="body2">
            Found Set: {integrationSet.name} ({integrationSet.no})
          </Typography>
          <Button type="button" onClick={pickFoundSet}>Take this set</Button>
        </Box>
      )}
    </Box>
  );
};