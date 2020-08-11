# RTK Dependency Example

Sample reproduction of a circular imports issue I was facing when using `createAsyncThunk` and `createReducer` (would also be applicable for `createSlice`) from RTK.

This repo now contains the fixed code. To see the code in broken state, view project state at commit: [f60be2c](https://github.com/ghostwriternr/rtk-dependecy-example/tree/f60be2c33b6448f8cafc62ab3ecb6cc9907b22a8).

Full issue description & resolution at [reduxjs/redux-toolkit#687](https://github.com/reduxjs/redux-toolkit/issues/687).