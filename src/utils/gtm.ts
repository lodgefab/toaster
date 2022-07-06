export const googleTagManagerId =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || "";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type GetResourcesLabel = "get_resources_button";

export const getResources = (label: GetResourcesLabel): void => {
  window.dataLayer.push({
    event: "get_resources",
    get_Resources_trigger: label,
  });
};
