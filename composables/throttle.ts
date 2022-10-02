export const throttle = (callback, timeout, isThrottled) => {
	if (isThrottled.value) return;

	callback();
	isThrottled.value = true;

	setTimeout(() => {
		isThrottled.value = false;
	}, timeout);
};
