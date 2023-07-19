import React, { useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";

//
import { GlobalStyles } from "./styles/globalStyles";
//
import { Header, Login, Main } from "./ui";
//
import { ToggleThemeContextProvider } from "./context";
//
import { Children, Nothing, AuthenticationStatus } from "./types";
//
import {
  useAppDispatch,
  useAppSelector,
  useGetGithubUserQuery,
  useLogoutQuery,
  setAuthentication,
} from "./app";
//
import {
  getTokenFromStorage,
  removeTokenFromStorage,
  setTokenOnStorage,
} from "./utils";
//
import constants from "./constants";

const { ROUTES, API } = constants;

function Providers({ children }: Children): JSX.Element {
  return <ToggleThemeContextProvider>{children}</ToggleThemeContextProvider>;
}

function AuthO(): JSX.Element {
  const [search] = useSearchParams();
  const dispatch = useAppDispatch();
  const token = search.get("access_token");

  if (token) {
    dispatch(setAuthentication({ kind: "Unknown" }));
    setTokenOnStorage(token);

    return <Navigate to={ROUTES.SIGNIN} replace />;
  }

  return <></>;
}

function SignIn(): JSX.Element {
  const { data, error, isLoading } = useGetGithubUserQuery(API.USER);
  const dispatch = useAppDispatch();

  if (error) {
    dispatch(setAuthentication({ kind: "LoggedOut" }));
    // TODO consider redirecting to home page ?
    return (
      <>
        <p>sorry, we have an error fething User</p>
        <span>{JSON.stringify(error)}</span>
      </>
    );
  }

  if (isLoading) {
    return <>loading</>;
  }

  const hasUser = data && data !== Nothing;

  if (hasUser) {
    dispatch(setAuthentication(data));
    return <Navigate to={ROUTES.WELCOME} replace />;
  } else {
    // TODO error on decoding user
    console.info("-> ", "no user");
    dispatch(setAuthentication({ kind: "LoggedOut" }));
  }

  return <>SIGNIN</>;
}

function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const { data } = useLogoutQuery(API.USER_LOGOUT);

  if (data) {
    dispatch(setAuthentication({ kind: "LoggedOut" }));
    removeTokenFromStorage();
    return <Navigate to={ROUTES.HOME} replace />;
  }

  // TODO consider getting an error

  return <></>;
}

export default function App(): JSX.Element {
  const location = useLocation();
  // const navigate = useNavigate();
  // const status: AuthenticationStatus = useAppSelector(
  //   (state) => state.auth.status
  // );
  //
  // // useEffect(() => {
  // const isNotSignin = location.pathname !== ROUTES.SIGNIN;
  // const isNotHome = location.pathname !== ROUTES.HOME;
  // const isNotSignOut = location.pathname !== ROUTES.SIGNOUT;
  // check if other than SignIn
  // if (isNotSignin && isNotHome && isNotSignOut) {
  // check if we have the token on storage
  console.info("location", location.pathname);
  // const hasToken = getTokenFromStorage() !== Nothing;
  // const userTok = status.kind === "LoggedIn" ? status.token : "";
  //
  // if (!userTok && !hasToken) {
  //   console.info(" no token go to logout");
  //   // return <Navigate to={ROUTES.SIGNOUT} replace />;
  // }
  //
  // if (!userTok && hasToken) {
  //   console.info("token from storage ", getTokenFromStorage());
  //   // return <Navigate to={ROUTES.SIGNIN} replace />;
  // }
  // }
  // }, [location]);

  return (
    <Providers>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Login />} />
        <Route path={ROUTES.AUTH} element={<AuthO />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        <Route path={ROUTES.SIGNOUT} element={<SignOut />} />
        <Route path={ROUTES.WELCOME} element={<Main />} />
      </Routes>
    </Providers>
  );
}
