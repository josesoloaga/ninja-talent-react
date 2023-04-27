import axios from "axios";
import { ApiResponse } from "./types";


export function getData(url: string, callback: (data: ApiResponse) => void)  {
  axios.get(url).then((response) => {
    callback(response.data);
    
  });
}


