import { openPhone } from "zmp-sdk/apis";
import { SnackbarAction } from "zmp-ui/snackbar-provider";
export const openCallScreen = async () => {
    try{
        await openPhone({
            phoneNumber: "+84123456789",
        });
    }
    catch(error){
        console.log("Loi")
    }
}