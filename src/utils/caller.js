export const caller = async apiRequest => {
  try {
    const request = await apiRequest();
    const data = await request.json();
    return { data, errorNumber: data.code, errorMessage: data.messages };
  } catch (error) {
    return { error };
  }
};
