/**************************************************************************************/
module.exports = class search{

	/********************************************/
	constructor(creds) {
		this.creds = creds;
        this.post = {};
	}
	/********************************************/


	/********************************************/
	search(){
        /*
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: this.post.query},
            headers: {
                'x-rapidapi-key': creds.rapidapi.key,
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };
        
        axios.request(options).then(function (response) {
            //console.log(util.inspect(response.data, false, null, true));
            return(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        */

        let results = [];
        results.push(
            {
                i: {
                  height: 444,
                  imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAzMTU3MzQ0Ml5BMl5BanBnXkFtZTgwODcyNDEwMzE@._V1_.jpg',
                  width: 300
                },
                id: 'tt2964642',
                l: 'Life Below Zero',
                q: 'TV series',
                rank: 9299,
                s: 'James Franzo, Sue Aikens',
                v: [
                  {
                    i: {
                      height: 720,
                      imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTYxNzYwZTUtYjE2YS00MDdkLWI5YTgtZmQ2ZmJkM2Q1NmM3XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg',
                      width: 1280
                    },
                    id: 'vi194231577',
                    l: 'Life Below Zero: Season 10',
                    s: '1:23'
                  },
                  {
                    i: {
                      height: 720,
                      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDk1NTIwNjUtOGQ1Yi00NjlhLWFlMGQtODMwNDQzOTI2YjU3XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg',
                      width: 1280
                    },
                    id: 'vi2761080089',
                    l: 'Life Below Zero',
                    s: '1:48'
                  }
                ],
                vt: 2,
                y: 2013,
                yr: '2013-'
              }
        );
        
        let data_out = {
            results: results,
            total: 1
        }

        return(data_out)
    }
	/********************************************/

}
/**************************************************************************************/
