import log4js from 'log4js';
import toast from "react-hot-toast";

const logger = log4js.getLogger();
logger.level = 'all';

const showSuccessToast = (message, duration=1500) => {
    toast.success(
        message,
        {
            duration: duration
        }
    );
}

const showErrorToast = (message, duration=1500) => {
    toast.error(
        message,
        {
            duration: duration
        }
    );
}

const showLoadingToast = (message, duration=2000) => {
    toast.loading(
        message,
        {
            duration: duration
        }
    );
}

const printError = (log, message, duration) => {
    logger.error(log);
    showErrorToast(message, duration);
}