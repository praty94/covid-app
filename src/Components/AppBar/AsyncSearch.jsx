import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchCountries } from '../../api';

const AsyncSearch = (props) => {
  
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const {countries} = await fetchCountries();
      

      if (active) {
        setOptions(countries);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      size="small"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e,value)=>props.routerHelper(value)}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}      
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Country"
          variant="outlined"
          color="secondary"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
  
}

export default AsyncSearch;
