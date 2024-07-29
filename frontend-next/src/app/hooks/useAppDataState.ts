import { RecoilState, useRecoilState } from "recoil";
import { AppState } from "../data/types";
import { useApolloClient } from "@apollo/client";
import { useEffect } from "react";

export function useAppDataState<RecoilType>(
  appState: AppState<RecoilType>,
  initialData?: RecoilType
): [RecoilType, (data: RecoilType) => void] {
  const client = useApolloClient();
  const [state, setState] = useRecoilState(appState.atom);

  useEffect(() => {
    const fetchData = async () => {
      if (state && Array.isArray(state) && state.length === 0) {
        const { data } = await client.query({
          query: appState.query,
        });
        if (data && data[appState.atom.key]) {
          setState(data[appState.atom.key]);
        }
      }
    };

    if (!initialData) {
      fetchData();
    }
  }, []);

  if (initialData) {
    setState(initialData);
  }

  return [state, setState];
}
