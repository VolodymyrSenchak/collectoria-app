import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEYS} from "../utils";
import {userSettingsStore} from "../store";
import type {IUserSettings} from "../models";

export const useUserSettings = () => {
  const queryClient = useQueryClient();
  const userSettingsQuery = useQuery({
    queryKey: [QUERY_KEYS.userSettings],
    queryFn: () => userSettingsStore.getSettings(),
    refetchOnWindowFocus: false
  });

  const userSettingsSaveMutation = useMutation({
    mutationFn: async (settings: IUserSettings) => userSettingsStore.saveSettings(settings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.userSettings]});
    }
  });

  return {
    userSettings: userSettingsQuery.data,
    saveSettings: (settings: IUserSettings) => userSettingsSaveMutation.mutateAsync(settings),
  };
};
