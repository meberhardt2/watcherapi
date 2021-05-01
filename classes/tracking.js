/**************************************************************************************/
module.exports = class tracking{

	/********************************************/
	constructor(DB) {
		this.DB = DB;
        this.status = '';
        this.imdb_id = '';
        this.stream_name = '';
	}
	/********************************************/


	/********************************************/
	trackIt(){
        let sql = '';
		let data_out = {};

        sql = 'select id from stream where imdb_id = ?;';
		data_out = this.DB.prepare(sql).get(this.imdb_id);

		//no matches, it will return undefined
		if(typeof data_out !== 'undefined'){
            this.status = 'duplicate';
        }
        else{
            sql = "insert into stream(stream_name,imdb_id,last_season,last_episode) values(?,?,'',0);";
            let data = this.DB.prepare(sql).run(this.stream_name.toLowerCase(),this.imdb_id)

            if(typeof data.lastInsertRowid === 'undefined' || data.lastInsertRowid < 1){
                this.status = 'error';
            }
            else{
                this.status = 'success';
            }
        }
    }
	/********************************************/

}
/**************************************************************************************/
