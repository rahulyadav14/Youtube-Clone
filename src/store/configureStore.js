import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from '../features/youtubeSlice'


export default configureStore({
  reducer: {
    youtubeApp: youtubeReducer
  },
});
