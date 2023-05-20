import React, { FC } from 'react';
import { EventType } from '@events-app/types';
import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InputLabel from '@mui/material/InputLabel';

import { Chip, ChipsContainer } from './styles';
import { colors, eventTypeTexts } from '../../utils';
import { allEventTypes, useFilters } from '../../contexts/Filters';

const Select: FC = () => {
  const { eventTypes, updateEventTypes, removeEventType } = useFilters();

  const renderSelectValue: (value: string[]) => React.ReactNode = (values) => (
    <ChipsContainer>
      {values.map((value) => (
        <Chip
          key={value}
          clickable
          label={eventTypeTexts[value as EventType]}
          deleteIcon={
            <CancelIcon onMouseDown={(event) => event.stopPropagation()} />
          }
          onDelete={(e) => handleDelete(e, value as EventType)}
        />
      ))}
    </ChipsContainer>
  );

  const handleChange = (event: SelectChangeEvent<EventType[]>) => {
    updateEventTypes(event.target.value as EventType[]);
  };

  const handleDelete = (e: React.MouseEvent, value: EventType) => {
    e.preventDefault();
    removeEventType(value);
  };
  return (
    <FormControl variant="outlined" margin={'normal'}>
      <InputLabel
        sx={{
          color: colors.custom.grey,
        }}
        id="events-select-label"
      >
        Event Type Filter
      </InputLabel>
      <MuiSelect
        labelId="events-select-label"
        label={'Event Type Filter'}
        variant="outlined"
        id="events-select"
        multiple
        value={eventTypes}
        onChange={handleChange}
        IconComponent={ArrowDropDownIcon}
        renderValue={renderSelectValue}
      >
        {allEventTypes.map((eventType) => (
          <MenuItem key={eventType} value={eventType}>
            <Checkbox checked={eventTypes.includes(eventType)} />
            <ListItemText primary={eventTypeTexts[eventType]} />
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
