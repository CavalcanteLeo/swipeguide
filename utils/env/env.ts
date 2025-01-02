interface EnvVariables {
  apiUrl: string;
  customerId: string;
  customerName: string;
  iosBundleIdentifier: string;
  androidPackageName: string;
  easProjectId: string;
  easProjectSlug: string;
}

export const loadEnv = (): EnvVariables => {
  const env: Partial<EnvVariables> = {
    apiUrl: process.env.EXPO_PUBLIC_API_URL,
    customerId: process.env.EXPO_PUBLIC_CUSTOMER_ID,
    customerName: process.env.EXPO_PUBLIC_CUSTOMER_NAME,
    iosBundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
    androidPackageName: process.env.EXPO_PUBLIC_ANDROID_PACKAGE_NAME,
    easProjectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
    easProjectSlug: process.env.EXPO_PUBLIC_EAS_PROJECT_SLUG,
  };

  const requiredEnvVariables: (keyof EnvVariables)[] = [
    'apiUrl',
    'customerId',
    'customerName',
    'iosBundleIdentifier',
    'androidPackageName',
    'easProjectId',
    'easProjectSlug',
  ];

  for (const variable of requiredEnvVariables) {
    if (!env[variable] && process.env.NODE_ENV !== 'test') {
      throw new Error(`Missing required environment variable: ${variable}`);
    }
  }

  return env as EnvVariables;
};

export const env = loadEnv();
