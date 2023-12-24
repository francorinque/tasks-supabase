import supabase from "../supabase/client"

export const verifyAuth = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return session
}
