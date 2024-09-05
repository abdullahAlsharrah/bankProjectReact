import instance from ".";

const getMyProfile = async () => {
  try {
    const { data } = await instance.get("auth/me");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateProfile = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await instance.put("auth/profile", formData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { updateProfile, getMyProfile };
