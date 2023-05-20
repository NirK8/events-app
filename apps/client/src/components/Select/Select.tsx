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

const names = Object.values(EventType);

const Select: FC = () => {
  const [personName, setPersonName] = React.useState<string[]>(names);

  const renderSelectValue: (value: string[]) => React.ReactNode = (values) => {
    return (
      <ChipsContainer>
        {values.map((value) => (
          <Chip
            key={value}
            clickable
            label={eventTypeTexts[value as EventType]}
            deleteIcon={
              <CancelIcon onMouseDown={(event) => event.stopPropagation()} />
            }
            onDelete={(e) => handleDelete(e, value)}
          />
        ))}
      </ChipsContainer>
    );
  };
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setPersonName(event.target.value as string[]);
  };

  const handleDelete = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    setPersonName((current) => {
      const copy = current.slice();
      const indexOfDeletedValue = copy.indexOf(value);
      copy.splice(indexOfDeletedValue, 1);
      return copy;
    });
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
        value={personName}
        onChange={handleChange}
        IconComponent={ArrowDropDownIcon}
        renderValue={renderSelectValue}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={personName.includes(name)} />
            <ListItemText primary={eventTypeTexts[name]} />
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
