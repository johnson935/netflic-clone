
const API_KEY = "b1eaea30f547ddca5bcf43817054cc3d";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: ``,
    fetchActionMovies: ``,
    fetchComedyMovies: ``,
    fetchHorrorMovies: ``,
    fetchRomanceMovies: ``,
    fetchDocumentaries: ``
}

export default requests;