import log4js from 'log4js';
import toast from "react-hot-toast";
import "server-only";

log4js.configure({
    appenders : {
        system : {type : 'file', filename : './logs/system.log'},
        debug : {type : 'file', filename : './logs/debug.log'}
    },
    categories : {
        default : {appenders : ['system'], level : 'info'},
        debug : {appenders : ['debug'], level : 'debug'}
    }
});
const loggerInfo = log4js.getLogger('system');
const loggerErr = log4js.getLogger('debug');

type toastFunction = (
    message: string,
    duration: number
) => void;

const showSuccessToast: toastFunction = (message, duration=1500) => {
    toast.success(
        message,
        {
            duration: duration
        }
    );
}

const showErrorToast: toastFunction = (message, duration=1500) => {
    toast.error(
        message,
        {
            duration: duration
        }
    );
}

const showLoadingToast: toastFunction = (message, duration=2000) => {
    toast.loading(
        message,
        {
            duration: duration
        }
    );
}

export const printError = (
    log: string, 
    message: string, 
    duration: number
    ) => {
    // logger.error(log);
    showErrorToast(message, duration);
}