import axios from "axios";

// The getSongs method retrieves songs from the server
// It accepts a "query" or term to search the song api for
export default {
  getSongs: function(query) {
    return axios.get("/api/songs/all", {params: {title:query }});
  }
};