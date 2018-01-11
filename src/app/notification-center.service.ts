declare var $:any;
export class NotificationsService {

    constructor(){
        
    }

    showNotification(from, align , color , message ){
          
        $.notify({
            icon: "pe-7s-gift",
            message: message
        },{
            type: color,
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}