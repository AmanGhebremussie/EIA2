namespace A04 {

    export interface Item{

        responsible: string;
        date: string;
        taskItem: string;
        comment: string;
    }

    export interface Data {
    [activity: string]: Item[];
    }

    export let data: Data = {

        initialItem: [
            { responsible: "", date: "", taskItem: "", comment:""}
            
        ]
    }
}
