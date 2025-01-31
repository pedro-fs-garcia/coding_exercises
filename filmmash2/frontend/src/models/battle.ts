
class Battle {
    public id: number|null;
    public winner_id:number;
    public loser_id:number;
    public user_id:number;
    public battle_date:String|null;

    constructor(id:number|null, winner_id:number, loser_id:number, user_id:number, battle_date:String|null){
        this.id = id;
        this.winner_id = winner_id;
        this.loser_id = loser_id;
        this.user_id = user_id;
        this.battle_date = battle_date;
    }

    public toJson(){
        return {
            id: this.id,
            winner_id: this.winner_id,
            loser_id: this.loser_id,
            user_id: this.user_id,
            battle_date: this.battle_date
        }
    }
}

export default Battle;