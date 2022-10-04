# Add Amplify

## 🔥 Install Amplify CLI

```
npm install -g @aws-amplify/cli
```

## 🔥 Add Amplify to your project

```
yarn add aws-amplify @aws-amplify/ui-react
```

## 🔥 Configure Amplify

| Category             | Command                   |
| -------------------- | ------------------------- |
| Authentication       | amplify add auth          |
| Storage              | amplify add storage       |
| API (GraphQL)        | amplify add api           |
| API (REST)           | amplify add api           |
| Functions            | amplify add function      |
| Analytics            | amplify add analytics     |
| Notifications        | amplify add notifications |
| Geo                  | amplify add geo           |
| Interactions         | amplify add interactions  |
| Predictions          | amplify add predictions   |
| XR                   | amplify add xr            |
| Custom AWS resources | amplify add custom        |

[Amplify Docs](https://docs.amplify.aws/)

[Authorization rules](https://docs.amplify.aws/cli/graphql/authorization-rules/)

[Use CDK to add custom AWS resources](https://docs.amplify.aws/cli/custom/cdk/)

```
amplify pull --appId <YOUR_APP_ID> --envName <YOUR_ENV_NAME>
```

```
amplify pull
```

```
amplify push
```

```
amplify push --allow-destructive-graphql-schema-updates
```

```
amplify mock
```

```
amplify codegen models
```

```
amplify status api -acm Blog
```

| Command               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| amplify mock          | Run mock server for supported categories               |
| amplify mock api      | Run mock GraphQL server to simulate AppSync            |
| amplify mock function | Locally test/invoke the function in your local backend |
| amplify mock storage  | Run mock server to simulate S3                         |

```graphql
type Post @model @auth(rules: [{ allow: public }]) {
  id: ID!
  content: String!
  media: AWSURL!
}

type User @model @auth(rules: [{ allow: public }]) {
  id: ID!
  nickname: String!
  avatar: String!
}
```

npx envinfo --system --npmPackages react,react-dom,aws-amplify,@aws-amplify/ui-react --binaries --browsers
