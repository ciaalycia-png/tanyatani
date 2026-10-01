import { createServerClient } from '@supabase/ssr';
import { env } from '$env/dynamic/public';
export const handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll: () => event.cookies.getAll(),
      setAll: (list) => list.forEach(({ name, value, options }) => event.cookies.set(name, value, { ...options, path: '/' }))
    }
  });
  event.locals.getUser = async () => (await event.locals.supabase.auth.getUser()).data.user;
  return resolve(event, { filterSerializedResponseHeaders: (n) => n === 'content-range' || n === 'x-supabase-api-version' });
};
