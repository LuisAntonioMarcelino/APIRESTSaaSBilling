export async function getProfile(supa) {
  const { data, error } = await supa.from("profiles").select("*").single();
  error
    ? (() => {
        throw new Error(error.message);
      })()
    : null;
  return data;
}
