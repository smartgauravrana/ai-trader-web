import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const dynamic = "force-dynamic";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/",
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
    },
    returnTo: "/",
  }),
});
