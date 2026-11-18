# Hello world

A beginner [DeepSeek Harness](https://github.com/deepseek-ai) plugin that adds one
model-facing tool, `greet`, to the agent.

## What it does

Registers the `greet` tool. When the agent calls it, the tool returns a friendly
greeting for the given name, optionally localized (`en`, `zh`, `es`, `ja`).

## Usage

Ask the agent to greet someone, for example:

> Please greet Alice.

The agent calls `greet` with `name: "Alice"` and an optional `language`.

## Install

Local directory — in DSH **Plugins** > **Add plugin**, or the `install_bundle`
tool, point at this directory.

npm (after publishing):

```sh
npm install @aionm/hello-world
```

then add the bundle in DSH **Plugins**.

## Uninstall

Disable the plugin row or remove the `@aionm/hello-world` bundle in **Plugins**.
The `greet` tool disappears as soon as the bundle is unloaded.

## License

[MIT](LICENSE)
