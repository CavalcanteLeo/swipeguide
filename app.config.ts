import type { ExpoConfig } from 'expo/config';

const minimalConfig: ExpoConfig = {
  name: 'SwipeGuide',
  slug: 'SwipeGuide',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  plugins: ['expo-router'],
  experiments: {
    typedRoutes: true,
    // reactCompiler: true,
  },
};

export default ({ config }: { config: ExpoConfig }) => {
  return {
    ...minimalConfig,
    ...config,
    name: process.env.EXPO_PUBLIC_CUSTOMER_NAME,
    slug: process.env.EXPO_PUBLIC_EAS_PROJECT_SLUG,
    ios: {
      ...config.ios,
      bundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
    },
    android: {
      ...config.android,
      package: process.env.EXPO_PUBLIC_ANDROID_PACKAGE_NAME,
    },
    extra: {
      ...config.extra,
      eas: {
        projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
      },
    },
  };
};
