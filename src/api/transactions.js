import instance from ".";

const getMytransactions = async () => {
  try {
    const { data } = await instance.get("transactions/my");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const depositOrwithdraw = async (transData) => {
  try {
    const { data } = await instance.put(
      `transactions/${transData.type}`,
      transData
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const transfer = async (transData) => {
  try {
    const { data } = await instance.put(
      `transactions/transfer/${transData.username}`,
      transData
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { getMytransactions, depositOrwithdraw, transfer };
