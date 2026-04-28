import { supabase } from '../supabase';
import { Member } from '.';

export const getCurrentMember = async (): Promise<Member | null> => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;

    return {
      loginEmail: user.email,
      loginEmailVerified: !!user.email_confirmed_at,
      status: 'APPROVED',
      profile: {
        nickname: user.user_metadata?.nickname ?? user.user_metadata?.full_name ?? undefined,
        photo: user.user_metadata?.avatar_url
          ? { url: user.user_metadata.avatar_url }
          : undefined,
      },
      _createdDate: user.created_at ? new Date(user.created_at) : undefined,
      lastLoginDate: user.last_sign_in_at ? new Date(user.last_sign_in_at) : undefined,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

