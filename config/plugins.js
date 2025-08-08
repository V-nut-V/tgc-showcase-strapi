module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-oss", // full package name is required
      providerOptions: {
        accessKeyId: env("ACCESS_KEY_ID"), // required
        accessKeySecret: env("ACCESS_KEY_SECRET"), // required
        region: env("REGION"), // required
        bucket: env("BUCKET"), // required
        uploadPath: env("UPLOAD_PATH"),
        baseUrl: env("BASE_URL"),
        timeout: env("TIMEOUT"),
        secure: env("OSS_SECURE"),
        internal: env.bool("OSS_INTERNAL", false),
        bucketParams: {
          ACL: "private", // default is 'public-read'
          signedUrlExpires: 60 * 60, // default is 30 * 60 (30min)
        },
      },
    },
  },
  "drag-drop-content-types": {
    enabled: true,
  },
});
