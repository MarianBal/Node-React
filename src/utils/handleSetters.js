export const toggleValue = (setter, value) => () => setter(!value);

export const handleEvent = setter => event => setter(event.target.value);
